import React, { useState } from "react";
import axios from "axios";
import "../css/ContactUs.css"; // Custom styles

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("Submitting data:", formData); // Debugging

      const response = await axios.post("http://localhost:8080/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Server Response:", response); // Debugging
      setMessage("Query submitted successfully!");
      setFormData({ name: "", email: "", phone: "", query: "" }); // Clear form
    } catch (error) {
      console.error("Error submitting query:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
        setMessage(`Failed: ${error.response.data.message || "Please try again."}`);
      } else {
        setMessage("Failed to submit query. Server may be down.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us container py-5">
      <div className="text-center mb-5">
        <h2>Don't Wonder. Ask Away.</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone *</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Query *</label>
              <textarea
                className="form-control"
                name="query"
                rows="4"
                value={formData.query}
                onChange={handleChange}
                placeholder="Your Query"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </form>
        </div>

        {/* Illustration Section */}
        <div className="col-md-6 text-center">
          <img src="./images/contactus.svg" alt="Contact Illustration" className="img-fluid contactus-image" />
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <div className="icon-box">
            <img src="../images/contactus-calling.svg" alt="ContactUs_calling_image" />
            <h5>Phone</h5>
            <p>+918377327550</p>
            <br />
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="icon-box">
            <img src="../images/contactus-email.svg" alt="ContactUs_email_image" />
            <h5>Email</h5>
            <p>brainsecret@counselling.com</p>
            <br />
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="icon-box">
            <img src="../images/contactus-location.svg" alt="ContactUs_location_image" />
            <h5>Address</h5>
            <p>Bele colony, near Bhujbal Farm Rd, Nashik, Maharashtra 422306</p>
          </div>
        </div>
      </div>
    </div>
  );
}
