import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../css/login.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to login endpoint
      const response = await axios.post('http://localhost:8080/api/auth/login', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Log full response to check the returned data
      console.log('Response from backend:', response.data);
  
      const { token, role } = response.data;
  
      if (!role) {
        setError('Role is missing from the server response.');
        return;
      }
  
      if (token) {
        // Store JWT token in local storage
        localStorage.setItem('authToken', token);
        alert('Login successful!');
  
        // Normalize role to uppercase for consistent comparison
        const normalizedRole = role.toUpperCase();
  
        // Redirect based on role
        if (normalizedRole === 'ADMIN') {
          navigate('/AdminDashboard');
        } else if (normalizedRole === 'USER') {
          navigate('/userDashboard');
        } else {
          setError('Invalid user role.');
        }
      } else {
        setError('Failed to retrieve authentication token.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login. Please check your credentials.');
    }
  };
  


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Send POST request to login endpoint
  //     const response = await axios.post('http://localhost:8080/api/auth/login', formData, {
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     // Extract token and role from the response
  //     const { token, role } = response.data;
  
  //     // Log the role for debugging
  //     console.log('Role returned from backend:', role);
  
  //     if (token) {
  //       // Store JWT token in local storage
  //       localStorage.setItem('authToken', token);
  //       alert('Login successful!');
  
  //       // Normalize role to uppercase for consistent comparison
  //       const normalizedRole = role?.toUpperCase();
  
  //       // Redirect based on role
  //       if (normalizedRole === 'ADMIN') {
  //         navigate('/AdminDashboard'); // Ensure the route is correctly configured
  //       } else if (normalizedRole === 'USER') {
  //         navigate('/userDashboard');
  //       } else {
  //         setError('Invalid user role.'); // Fallback for unexpected roles
  //       }
  //     } else {
  //       setError('Failed to retrieve authentication token.');
  //     }
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Failed to login. Please check your credentials.');
  //   }
  // };
  


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Send POST request to login endpoint
  //     const response = await axios.post('http://localhost:8080/api/auth/login', formData, {
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     // Extract token and role from the response
  //     const { token, role } = response.data;
  
  //     if (token) {
  //       // Store JWT token in local storage
  //       localStorage.setItem('authToken', token);
  //       alert('Login successful!');
  
  //       // Redirect based on role
  //       if (role === 'ADMIN') {
  //         navigate('/AdminDashboard'); // Ensure this route is correctly set up in your routing
  //       } else if (role === 'USER') {
  //         navigate('/userDashboard');
  //       } else {
  //         setError('Invalid user role.'); // Fallback for unexpected roles
  //       }
  //     } else {
  //       setError('Failed to retrieve authentication token.');
  //     }
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Failed to login. Please check your credentials.');
  //   }
  // };
  
  

  return (
    <div className="login_page">
      <div className="login-container">
        <div className="login-form">
          <h2>Log In</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group password-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-orange">Submit</button>
          </form>
          <p>New here? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}




// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import "../css/login.css";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/login', formData);
//       const { token, role } = response.data;
//       localStorage.setItem('authToken', token);
//       alert('Login successful!');
//       role === 'ADMIN' ? navigate('/AdminDashboard') : navigate('/userDashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to login. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="login_page">
//       <div className="login-container">
//         <div className="login-form">
//           <h2>Log In</h2>
//           {error && <p className="error">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group password-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-orange">Submit</button>
//           </form>
//           <p>New here? <Link to="/signup">Sign Up</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import "../css/login.css";

// export default function Login() {
//   return (
//     <div className="login_page">
//       <div className="login-container login-div-container">
//         <div className="login-form">
//           <h2>Log In</h2>
//           <p>
//             New to Felicity? <Link to="/signup">Sign Up</Link> {/* Updated link */}
//           </p>
//           <form>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="form-group password-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//               />
//               <span className="password-toggle">👁️</span>
//             </div>
//             <div className="options">
//               <div>
//                 <input type="checkbox" id="rememberMe" />
//                 <label htmlFor="rememberMe"> Remember Me</label>
//               </div>
//               <a href="#forgot-password">Forgot Password?</a>
//             </div>
//             <button className="btn btn-orange">Submit</button>
//           </form>
//         </div>
//         {/* <div className="social-login">
//           <div className="divider"></div>
//           <h6 className="social-login-h6">Login with</h6>
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
