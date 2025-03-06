import React, { useState } from "react";
import axios from "axios";
import "../css/AppointmentForm.css"; // Link to the updated CSS file

const AppointmentForm = () => {

  const [errors, setErrors] = useState({}); // State for validation errors

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    timeSlot: "",
    therapist: "",
    message: "",
    severityScale: "5", // Default value for severity scale
  });

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.preferredDate) newErrors.preferredDate = "Select a date";
    if (!formData.timeSlot) newErrors.timeSlot = "Select a time slot";
    if (!formData.therapist) newErrors.therapist = "Choose Online or Offline";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails

    try {
      const response = await axios.post("http://localhost:8080/api/appointments", formData);
      if (response.status === 201) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          timeSlot: "",
          therapist: "",
          message: "",
          severityScale: "5",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to book the appointment. Please try again.");
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-form">
        <h2>Book Your Counseling Appointment</h2>
        <div className="appointment-form-header">
          <img src="../images/Appointment-booking.jpg" alt="Counseling Icon" className="form-icon" />
          <p>We are here to assist you. Please fill out the form below.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="appointmentform-label">
            Full Name:
            <input
              className="appointmentform-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label className="appointmentform-label">
            Email:
            <input
              className="appointmentform-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span className="error">{errors.email}</span>}
          <label className="appointmentform-label">
            Phone Number:
            <input
              className="appointmentform-input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>

          <label className="appointmentform-label">
            Select Service:
            <select
              className="appointmentform-select"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="Relationship Counseling">Relationship Counseling</option>
              <option value="Stress Management">Stress Management</option>
              <option value="Depression Support">Depression Support</option>
              <option value="Behavioral Therapy">Behavioral Therapy</option>
              <option value="Anger Management">Anger Management Solutions</option>
              <option value="Financial Wellness Coaching">Financial Wellness Coaching</option>
              <option value="Self-Confidence Building">Self-Confidence Building</option>
              <option value="Support for Suicidal Thoughts">Support for Suicidal Thoughts</option>
              <option value="Parental Guidance">Parental Guidance</option>
              <option value="Parent-Child Relationships">Parent-Child Relationships</option>
            </select>
            {errors.service && <span className="error">{errors.service}</span>}
          </label>

          <label className="appointmentform-label">
            Preferred Date:
            <input
              className="appointmentform-input"
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
            />
            {errors.preferredDate && <span className="error">{errors.preferredDate}</span>}
          </label>
          <label className="appointmentform-label">
            Time Slot:
            <select
              className="appointmentform-select"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
            >
              <option value="">Select a Time Slot</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
            {errors.timeSlot && <span className="error">{errors.timeSlot}</span>}
          </label>
          <label className="appointmentform-label">
          Mode of Intractions:
            <select
              className="appointmentform-select"
              name="therapist"
              value={formData.therapist}
              onChange={handleChange}
            >
              <option value="">Select Mode (Online/Offline)</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            {errors.therapist && <span className="error">{errors.therapist}</span>}
          </label>
          <label className="appointmentform-label">
            Additional Message:
            <textarea
              className="appointmentform-textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <label className="appointmentform-label">
            Scale Yourself (1-10) (If Emergency Service Required):
            <select
              className="appointmentform-select"
              name="severityScale"
              value={formData.severityScale}
              onChange={handleChange}
            >
              <option value="1">1 - Not Severe</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 - Moderate</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 - Very Severe</option>
            </select>
            {errors.severityScale && <span className="error">{errors.severityScale}</span>}
          </label>
          <button type="submit" className="appointment-button">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
