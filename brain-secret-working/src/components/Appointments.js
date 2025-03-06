import React, { useState } from "react";
import "../css/Appointments.css";

const Appointments = () => {
  // Sample Appointment Data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "John Doe",
      dateTime: "2024-12-30 10:00 AM",
    //   sessionType: "Therapy",
      severity: "High",
      status: "Upcoming",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      dateTime: "2024-12-30 02:00 PM",
    //   sessionType: "Consultation",
      severity: "Medium",
      status: "Completed",
    },
    // Add more sample data as needed
  ]);

  // Filter States
  const [filters, setFilters] = useState({
    date: "",
    clientName: "",
    severity: "",
  });

  // Update Filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Filtered Appointments
  const filteredAppointments = appointments.filter((appointment) => {
    return (
      (!filters.date || appointment.dateTime.includes(filters.date)) &&
      (!filters.clientName || appointment.clientName.includes(filters.clientName)) &&
      (!filters.severity || appointment.severity === filters.severity)
    );
  });

  // Handle Actions
  const handleAction = (id, action) => {
    if (action === "edit") {
      alert(`Edit Appointment ID: ${id}`);
    } else if (action === "cancel") {
      alert(`Cancel Appointment ID: ${id}`);
    } else if (action === "markCompleted") {
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === id ? { ...appt, status: "Completed" } : appt
        )
      );
    }
  };

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>

      {/* Filters Section */}
      <div className="filters">
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          placeholder="Filter by Date"
        />
        <input
          type="text"
          name="clientName"
          value={filters.clientName}
          onChange={handleFilterChange}
          placeholder="Filter by Client Name"
        />
        <select
          name="severity"
          value={filters.severity}
          onChange={handleFilterChange}
        >
          <option value="">Filter by Severity</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Table Section */}
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Appointment Date & Time</th>
            {/* <th>Session Type</th> */}
            <th>Severity Scale</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.clientName}</td>
              <td>{appointment.dateTime}</td>
              {/* <td>{appointment.sessionType}</td> */}
              <td>{appointment.severity}</td>
              <td>{appointment.status}</td>
              <td>
                <button onClick={() => handleAction(appointment.id, "edit")}>
                  Edit
                </button>
                <button onClick={() => handleAction(appointment.id, "cancel")}>
                  Cancel
                </button>
                {appointment.status === "Upcoming" && (
                  <button
                    onClick={() => handleAction(appointment.id, "markCompleted")}
                  >
                    Mark as Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
