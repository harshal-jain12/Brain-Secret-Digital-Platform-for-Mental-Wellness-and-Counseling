import React, { useEffect, useState } from "react";
import "../css/AdminDashboard.css";

const AdminDashboard = () => {
  const [highPriorityClients, setHighPriorityClients] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  useEffect(() => {
    // Fetch the latest 7 appointments from the backend
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/appointments/latest");
        if (response.ok) {
          const data = await response.json();

          // Filter high-priority clients (severity scale > 7)
          const highPriority = data.filter(appointment => appointment.severityScale > 7);
          setHighPriorityClients(highPriority);

          // Set upcoming appointments
          setUpcomingAppointments(data);
        } else {
          console.error("Failed to fetch appointments.");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">Counselor Dashboard</div>
        <a href="/Dashboardlist">Dashboard</a>
        <a href="/Appointments">Appointments</a>
        {/* <a href="MentalHealthPage">Tests</a> */}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="welcome">
            <h1>Welcome, Dr.Pramila Pawar</h1>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Upcoming Appointments</h3>
            <p>{upcomingAppointments.length}</p>
          </div>
          <div className="dashboard-card">
            <h3>High Priority Clients</h3>
            <p>{highPriorityClients.length}</p>
          </div>
          <div className="dashboard-card">
            <h3>Recent Tests</h3>
            <p>5</p>
          </div>
          <div className="dashboard-card">
            <h3>Messages</h3>
            <p>2</p>
          </div>
        </div>

        {/* High Priority Clients Table */}
        <br />
        <h2>High Priority Clients</h2>
        <table className="small-priority-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Scale</th>
              <th>Date</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {highPriorityClients.map((client, index) => (
              <tr key={index}>
                <td>{client.name}</td>
                <td>{client.severityScale}</td>
                <td>{client.preferredDate}</td>
                <td>{client.service}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Upcoming Appointments Table */}
        <h2>Upcoming Appointments</h2>
        <table className="admin-appointment-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Session Mode</th>
              <th>Severity Scale</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {upcomingAppointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.preferredDate}</td>
                <td>{appointment.name}</td>
                <td>{appointment.therapist}</td> {/* Assuming therapist represents session mode */}
                <td>{appointment.severityScale}</td>
                <td>{appointment.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;








// import React from "react";
// import "../css/AdminDashboard.css";

// const AdminDashboard = () => {
//   const highPriorityClients = [
//     { name: "John Doe", scale: 9 },
//     { name: "Jane Smith", scale: 10 },
//   ];

//   const upcomingAppointments = [
//     { date: "01/01/2024", client: "John Doe", session: "Online", scale: 9, status: "Scheduled" },
//     { date: "02/01/2024", client: "Jane Doe", session: "Offline", scale: 5, status: "Scheduled" },
//   ];

//   return (
//     <div className="admin-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">Counselor Dashboard</div>
//         <a href="/Dashboardlist">Dashboard</a>
//         <a href="/Appointments">Appointments</a>
//         <a href="MentalHealthPage">Tests</a>
//         {/* <a href="#">Counseling Sessions</a> */}
//         {/* <a href="#">Reports</a>
//         <a href="#">Messages</a>
//         <a href="#">Profile</a> */}
//         {/* <a href="#">Settings</a> */}
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <div className="header">
//           <div className="welcome">
//             <h1>Welcome, Dr.Pramila Pawar</h1>
//           </div>
//           {/* <div className="user-profile">
//             <img src="profile.jpg" alt="Profile" />
//             <span>[Dr.Pramila Pawar]</span>
//           </div> */}
//         </div>

//         {/* Dashboard Cards */}
//         <div className="dashboard-cards">
//           <div className="dashboard-card">
//             <h3>Upcoming Appointments</h3>
//             <p>{upcomingAppointments.length}</p>
//           </div>
//           <div className="dashboard-card">
//             <h3>High Priority Clients</h3>
//             <p>{highPriorityClients.length}</p>
//           </div>
//           <div className="dashboard-card">
//             <h3>Recent Tests</h3>
//             <p>5</p>
//           </div>
//           <div className="dashboard-card">
//             <h3>Messages</h3>
//             <p>2</p>
//           </div>
//         </div>

//         {/* High Priority Clients Table */}
//         <br />
//         <h2>High Priority Clients</h2>
//         <table className="small-priority-table">
//           <thead>
//             <tr>
//               <th>Client</th>
//               <th>Scale</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {highPriorityClients.map((client, index) => (
//               <tr key={index}>
//                 <td>{client.name}</td>
//                 <td>{client.scale}</td>
//                 <td>
//                   <button className="button">View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Upcoming Appointments Table */}
//         <h2>Upcoming Appointments</h2>
//         <table className="admin-appointment-table">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Client</th>
//               <th>Session Type</th>
//               <th>Severity Scale</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {upcomingAppointments.map((appointment, index) => (
//               <tr key={index}>
//                 <td>{appointment.date}</td>
//                 <td>{appointment.client}</td>
//                 <td>{appointment.session}</td>
//                 <td>{appointment.scale}</td>
//                 <td>{appointment.status}</td>
//                 <td>
//                   <button className="button">View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
