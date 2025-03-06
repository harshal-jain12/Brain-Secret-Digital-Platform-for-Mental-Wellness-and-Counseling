import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../css/signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'USER', // Default role
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to register user
      const response = await axios.post('http://localhost:8080/api/auth/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200 | response.status === 201) { // Assuming 201 status for successful registration
        alert('Signup successful! Please log in.');
        navigate('/login');
      } else {
        setError('Unexpected response from server.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
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
            <div className="form-group phone-group">
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
            <div className="form-group password-group">
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
            <button type="submit" className="btn btn-orange">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}



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
