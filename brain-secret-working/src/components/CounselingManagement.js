import React, { useState } from "react";
import "../css/CounselingManagement.css";

const CounselingManagement = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      counselor: "Dr. Smith",
      date: "2024-01-05",
      time: "10:00 AM",
      type: "Online",
    },
    { 
      id: 2,
      counselor: "Dr. Johnson",
      date: "2024-01-10",
      time: "2:00 PM",
      type: "In-Person",
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    counselor: "",
    date: "",
    time: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const addAppointment = () => {
    if (
      newAppointment.counselor &&
      newAppointment.date &&
      newAppointment.time &&
      newAppointment.type
    ) {
      setAppointments([
        ...appointments,
        { id: Date.now(), ...newAppointment },
      ]);
      setNewAppointment({
        counselor: "",
        date: "",
        time: "",
        type: "",
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
  };

  return (
    <div className="counseling-management">
      <h1>Appointment Management</h1>

      {/* Add New Appointment Section */}
      <div className="add-appointment">
        <h3>Add a New Appointment</h3>
        <form>
          <label>
            Counselor Name:
            <input
              type="text"
              name="counselor"
              value={newAppointment.counselor}
              onChange={handleInputChange}
              placeholder="Enter counselor name"
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={newAppointment.date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={newAppointment.time}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Session Type:
            <select
              name="type"
              value={newAppointment.type}
              onChange={handleInputChange}
            >
              <option value="">Select type</option>
              <option value="Online">Online</option>
              <option value="In-Person">Offline</option>
            </select>
          </label>
          <button
            type="button"
            onClick={addAppointment}
            className="add-button"
          >
            Add Appointment
          </button>
        </form>
      </div>

      {/* Appointment List Section */}
      <div className="appointments">
        <h3>Upcoming Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments scheduled.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Counselor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.counselor}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.type}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteAppointment(appointment.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CounselingManagement;
