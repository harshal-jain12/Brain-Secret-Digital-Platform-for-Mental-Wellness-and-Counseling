import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import "../css/signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "USER",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Captures reCAPTCHA Token
  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    console.log("Generated reCAPTCHA Token:", token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      console.log("🔄 Sending reCAPTCHA token to backend:", recaptchaToken);

      // ✅ Send signup request with reCAPTCHA to the backend
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          ...formData,
          recaptchaToken, // ✅ Ensure backend expects this field
        },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("✅ Signup successful:", response.data);

      alert("Signup successful! Please check your email.");

      // ✅ Send Welcome Email using EmailJS
      emailjs
        .send(
          "service_oijeo69", // Replace with your EmailJS Service ID
          "template_ixlewis", // Replace with your EmailJS Template ID
          {
            user_name: formData.name,
            user_email: formData.email,
            "g-recaptcha-response": recaptchaToken, // ✅ Added reCAPTCHA to EmailJS
          },
          "7EJ2_1VKBwrzubn0k" // Replace with your EmailJS Public Key
        )
        .then(() => {
          console.log("✅ Welcome email sent successfully!");
        })
        .catch((error) => {
          console.error("❌ Email sending failed:", error);
        });

      navigate("/login");
    } catch (err) {
      console.error("❌ Signup error:", err.response?.data || err.message);

      // ✅ Improve error messages for debugging
      if (err.response?.data?.message?.includes("Invalid reCAPTCHA")) {
        setError("Invalid reCAPTCHA. Please try again.");
      } else {
        setError(err.response?.data?.message || "Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            {/* ✅ Google reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6Ld0nu0qAAAAAIeV0jbC9MbE5Iwa4GyooMSIaM4P" // 🔥 Replace with your actual reCAPTCHA Site Key
              onChange={handleRecaptchaChange}
            />

            <button type="submit" className="btn btn-orange">Sign Up</button>
          </form>

          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}




// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import emailjs from "@emailjs/browser";
// import "../css/signup.css";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "USER",
//   });

//   const [recaptchaToken, setRecaptchaToken] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Captures reCAPTCHA Token and Logs to Console
//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token);
//     console.log("Generated reCAPTCHA Token:", token); // ✅ Logs token for debugging
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!recaptchaToken) {
//       setError("Please complete the reCAPTCHA verification.");
//       return;
//     }

//     try {
//       console.log("Sending reCAPTCHA token to backend:", recaptchaToken); // ✅ Logs before sending

//       // Register user via backend API
//       const response = await axios.post(
//         "http://localhost:8080/api/auth/register",
//         { ...formData, recaptchaToken },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 200 || response.status === 201) {
//         alert("Signup successful! Please check your email.");

//         // ✅ Send Welcome Email using EmailJS
//         emailjs
//           .send(
//             "service_oijeo69", // Replace with your EmailJS Service ID
//             "template_ixlewis", // Replace with your EmailJS Template ID
//             {
//               user_name: formData.name,
//               user_email: formData.email,
//             },
//             "7EJ2_1VKBwrzubn0k" // Replace with your EmailJS Public Key
//           )
//           .then(() => {
//             console.log("Welcome email sent successfully!");
//           })
//           .catch((error) => {
//             console.error("Email sending failed:", error);
//           });

//         navigate("/login");
//       } else {
//         setError("Unexpected response from server.");
//       }
//     } catch (err) {
//       console.error("Signup error:", err.response?.data || err.message);
//       setError(err.response?.data?.message || "Signup failed. Please try again.");
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-container">
//         <div className="signup-form">
//           <h2>Sign Up</h2>
//           {error && <p className="error">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 placeholder="Name *"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 name="email"
//                 placeholder="Email *"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="tel"
//                 className="form-control"
//                 name="phone"
//                 placeholder="Phone *"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 name="password"
//                 placeholder="Password *"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <select
//                 className="form-control"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="USER">User</option>
//                 <option value="ADMIN">Admin</option>
//               </select>
//             </div>
            
//             {/* ✅ reCAPTCHA with Logging */}
//             <ReCAPTCHA
//               sitekey="6Ld0nu0qAAAAAIeV0jbC9MbE5Iwa4GyooMSIaM4P" // Replace with your actual reCAPTCHA key
//               onChange={handleRecaptchaChange}
//             />

//             <button type="submit" className="btn btn-orange">Sign Up</button>
//           </form>

//           <p>Already have an account? <Link to="/login">Log In</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import "../css/signup.css";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     role: 'USER', // Default role
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send POST request to register user
//       const response = await axios.post('http://localhost:8080/api/auth/register', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (response.status === 200 | response.status === 201) { // Assuming 201 status for successful registration
//         alert('Signup successful! Please log in.');
//         navigate('/login');
//       } else {
//         setError('Unexpected response from server.');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-container">
//         <div className="signup-form">
//           <h2>Sign Up</h2>
//           {error && <p className="error">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 placeholder="Name *"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 name="email"
//                 placeholder="Email *"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group phone-group">
//               <input
//                 type="tel"
//                 className="form-control"
//                 name="phone"
//                 placeholder="Phone *"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group password-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 name="password"
//                 placeholder="Password *"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <select
//                 className="form-control"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="USER">User</option>
//                 <option value="ADMIN">Admin</option>
//               </select>
//             </div>
//             <button type="submit" className="btn btn-orange">Sign Up</button>
//           </form>
//           <p>Already have an account? <Link to="/login">Log In</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import "../css/signup.css";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     role: 'USER', // Default role
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/register', formData);
//       if (response.status === 201) { // Assuming 201 for successful registration
//         alert('Signup successful! Please log in.');
//         navigate('/login');
//       } else {
//         setError('Unexpected response from server.');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-container">
//         <div className="signup-form">
//           <h2>Sign Up</h2>
//           {error && <p className="error">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 placeholder="Name *"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 name="email"
//                 placeholder="Email *"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group phone-group">
//               <input
//                 type="tel"
//                 className="form-control"
//                 name="phone"
//                 placeholder="Phone *"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group password-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 name="password"
//                 placeholder="Password *"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <select
//                 className="form-control"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="USER">User</option>
//                 <option value="ADMIN">Admin</option>
//               </select>
//             </div>
//             <button type="submit" className="btn btn-orange">Sign Up</button>
//           </form>
//           <p>Already have an account? <Link to="/login">Log In</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import "../css/signup.css";

// export default function Signup() {
//   return (
//     <div className="signup-page">
//       <div className="signup-container">
//         <div className="signup-form">
//           <h2>Sign Up</h2>
//           <p>
//             Already have an account? <Link to="/login">Log In</Link> {/* Updated link */}
//           </p>
//           <form>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name *"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email *"
//               />
//             </div>
//             <div className="form-group phone-group">
//               <span className="flag-icon">🇮🇳</span>
//               <input
//                 type="tel"
//                 className="form-control"
//                 placeholder="081234 56789"
//               />
//             </div>
//             <div className="form-group password-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password *"
//               />
//               <span className="password-toggle">👁️</span>
//             </div>
//             <button className="btn btn-orange">Sign Up</button>
//           </form>
//           <p className="terms">
//             By signing up, you agree to our <a href="#terms">Terms Of Service</a>{" "}
//             and acknowledge that you have read our{" "}
//             <a href="#privacy">Privacy Policy</a>.
//           </p>
//         </div>
//         {/* <div className="social-signup">
//           <div className="divider"></div>
//           <p>Sign Up with</p>
//           <div className="social-buttons">
//             <button className="btn btn-light">
//               <img src="./images/Googleicon.png" alt="Google" />
//               <a href="https://www.google.com"> Google </a> 
//             </button>
//             <button className="btn btn-light">
//               <img src="./images/Facebookicon.png" alt="Facebook" />
//               <a href="https://www.facebook.com"> Facebook </a> 
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }
