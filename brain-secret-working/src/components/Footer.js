import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 ">
    <div className="container">
      <div className="row">
        {/* Contact Us Section */}
        <div className="col-md-4 mb-4">
          <h5>Contact Us</h5>
          <p>
            <i className="bi bi-telephone-fill"></i> Hotline: +91 8377327550
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> Email: brainsecret@counselling.com
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Address: Bele colony, near, Bhujbal Farm Rd, Shanti Nagar, Lekha Nagar, Nashik, Maharashtra 422306
          </p>
          <p>Operating Hours: Mon-Fri, 9 AM - 6 PM</p>
        </div>

        {/* Quick Links Section */}
        <div className="col-md-4 mb-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-white text-decoration-none">Home</a>
            </li>
            <li>
              <a href="/Userplans" className="text-white text-decoration-none">Membership Plans</a>
            </li>
            <li>
              <a href="/aboutus" className="text-white text-decoration-none">About Us</a>
            </li>
            <li>
              <a href="/blogs" className="text-white text-decoration-none">Blogs</a>
            </li>
            <li>
              <a href="/contactus" className="text-white text-decoration-none">Contact Us</a>
            </li>
            <li>
              <a href="/faq" className="text-white text-decoration-none">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-md-4 mb-4">
          <div className="col-12">
            <h5 className="text-center">Our Location</h5>
            <div className="map-container" style={{ width: "300px", height: "250px" }}>

              {/* Google Map Embed */}
              <iframe
              title="Example of an Embedded Page"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7183549633623!2d73.77095757420884!3d19.97834342302821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb9b90c37723%3A0x3cb0b52688cc5668!2sBrain%20Secret-counselling%20center!5e0!3m2!1sen!2sin!4v1733397953781!5m2!1sen!2sin"
                width="100%"
                height="75%"
                style={{ border: 0, marginTop: "15px", marginLeft: "25px"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-light" style={{ marginTop: "-35px" }}/>
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2024 brainsecret. All Rights Reserved.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="/privacy" className="text-white text-decoration-none me-3">Privacy Policy</a>
          <a href="/terms" className="text-white text-decoration-none">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
  )
}
