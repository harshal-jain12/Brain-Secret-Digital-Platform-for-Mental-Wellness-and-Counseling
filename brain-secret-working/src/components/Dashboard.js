
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null); // Manage active sections

  // Navigation Handlers
  const handleDepressionTest = () => navigate("/MentalHealthPage");
  const handleCounselingManagement = () => navigate("/counselingmanagement");
  // const handlePayment = () => navigate("/payment");
  const handleCommunity = () => navigate("/community");

  // Dynamic Section Handlers
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggle the section
  };


  const handlePayment = async () => {
    try {
      // Step 1: Create Order via Backend
      const response = await fetch("http://localhost:8080/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5999 }), // Amount in INR
      });

      const orderData = await response.json();
      if (!orderData.orderId) {
        alert("❌ Failed to create order. Try again!");
        return;
      }

      // Step 2: Initialize Razorpay
      const options = {
        key: "rzp_test_cbAsi6AWaHNdfE", // Replace with your Razorpay Key
        amount: orderData.amount, // Amount in paisa
        currency: "INR",
        name: "BrainSecret",
        description: "Premium Plan Payment",
        order_id: orderData.orderId,
        handler: async function (response) {
          // Step 3: Verify Payment
          const verifyRes = await fetch("http://localhost:8080/api/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: orderData.orderId,
              paymentId: response.razorpay_payment_id,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.status === "success") {
            alert("✅ Payment Successful! 🎉");
          } else {
            alert("❌ Payment Verification Failed!");
          }
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("❌ Something went wrong!");
    }
  };




  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">User Dashboard</h2>
        <ul className="menu">
          <li>
            <button onClick={() => toggleSection("profile")}>Profile</button>
          </li>
          <li>
            <button onClick={handleDepressionTest}> Test</button>
          </li>
          <li>
            <button onClick={handleCounselingManagement}>
              Appointments Management
            </button>
          </li>
          <li>
            <button onClick={handlePayment}>Payment</button>
          </li>
          <li>
            <button onClick={handleCommunity}>Community</button>
          </li>
          {/* <li>
            <button onClick={() => toggleSection("progress")}>Progress</button>
          </li> */}
          <li>
            <button onClick={() => toggleSection("notifications")}>
              Notifications
            </button>
          </li>
          <li>
            <button onClick={() => toggleSection("settings")}>Settings</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <header className="userdashboard-header">
          <h1>Welcome, User!</h1>
        </header>

        {/* Widgets Section */}
        {activeSection === null && (
          <div className="widgets">
            <div className="widget">
              <h3> Test</h3>
              <p>Take a test to assess your mental health.</p>
              <button onClick={handleDepressionTest}>Start Test</button>
            </div>
            <div className="widget">
              <h3>Appointments Management</h3>
              <p>Manage counseling sessions and appointments.</p>
              <button onClick={handleCounselingManagement}>Manage</button>
            </div>
            <div className="widget">
              <h3>Payment</h3>
              <p>Manage payments and transactions.</p>
              <button onClick={handlePayment}>Make Payment</button>
            </div>
            <div className="widget">
              <h3>Community</h3>
              <p>Join discussions and connect with others.</p>
              <button onClick={handleCommunity}>Explore</button>
            </div>
          </div>
        )}

        {/* Dynamic Section Content */}
        {activeSection === "profile" && (
          <section id="profile" className="section">
            <h2>Profile</h2>
            <p>Name: Sham Yadav</p>
            <p>Email: shamyadav12@gmail.com</p>
            <p>Phone: +917756412489</p>
            <button>Edit Profile</button>
          </section>
        )}

        {/* {activeSection === "progress" && (
          <section id="progress" className="section">
            <h2>Progress Tracker</h2>
            <p>You’ve completed 3 out of 5 goals this month!</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}>
                70% Complete
              </div>
            </div>
          </section>
        )} */}

        {activeSection === "notifications" && (
          <section id="notifications" className="section">
            <h2>Notifications</h2>
            <ul className="no-bullets">
              <li>Your counseling session is scheduled for Jan 5, 2025.</li>
              <li>Payment for your last session has been confirmed.</li>
              <li>New community post: Tips for managing stress!</li>
            </ul>
          </section>
        )}

        {activeSection === "settings" && (
          <section id="settings" className="section">
            <h2>Settings</h2>
            <p>Change your preferences:</p>
            <ul className="no-bullets">
              <li>
                <label>
                  <input type="checkbox" defaultChecked /> Enable Email
                  Notifications
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Enable Push Notifications
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Dark Mode
                </label>
              </li>
            </ul>
            <button>Save Settings</button>
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
