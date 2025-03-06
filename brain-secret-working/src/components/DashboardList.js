import React from "react";
import { Bar } from "react-chartjs-2"; // For displaying activity trends
import "chart.js/auto"; // Ensure you install chart.js library
import "../css/DashboardList.css";

const DashboardList = () => {
  // Dummy Data
  const metrics = {
    upcomingAppointments: 7,
    highPriorityClients: 3,
    recentTests: 5,
    messages: 2,
  };

  // Data for activity trends graph
  const graphData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        label: "Client Activity",
        data: [2, 4, 3, 5, 6, 3, 4], // Replace with real data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(199, 199, 199, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const graphOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: true }, // Show the graph legend
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, Dr. Pramila Pawar</h1>
      {/* Metrics Summary */}
      <div className="dashboard-metrics">
        <div className="metric-card">
          <h3>Upcoming Appointments</h3>
          <p>{metrics.upcomingAppointments}</p>
        </div>
        <div className="metric-card">
          <h3>High Priority Clients</h3>
          <p>{metrics.highPriorityClients}</p>
        </div>
        <div className="metric-card">
          <h3>Recent Tests</h3>
          <p>{metrics.recentTests}</p>
        </div>
        <div className="metric-card">
          <h3>Messages</h3>
          <p>{metrics.messages}</p>
        </div>
      </div>

      {/* Activity Trends Graph */}
      <div className="dashboard-graph">
        <h2>Weekly Activity Trends</h2>
        <div className="graph-wrapper">
          <Bar data={graphData} options={graphOptions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardList;
