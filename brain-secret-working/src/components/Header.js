import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if user is logged in
  const userRole = localStorage.getItem("role"); // Get user role (Admin or User)

  const handleLogout = async () => {
    if (!token) {
      alert("No token found!");
      return;
    }

    try {
      await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      // Clear local storage and navigate to login
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout.");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="./images/Logo.png" alt="Logo" style={{ width: "90px", height: "60px" }} />
          </Link>

          {/* Navbar toggle button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Userplans">Plans</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/MentalHealthPage">Tests</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contactus">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/AppointmentForm">Book Session</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/SleepChecker">SleepChecker</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>

              {/* Dashboard link only for logged-in Admin/User */}
              {token && userRole === "ADMIN" && (
                <li className="nav-item"><Link className="nav-link" to="/AdminDashboard">Admin Dashboard</Link></li>
              )}
              {token && userRole === "USER" && (
                <li className="nav-item"><Link className="nav-link" to="/dashboard">User Dashboard</Link></li>
              )}
            </ul>

            {/* Logout button only for logged-in users */}
            {token && (userRole === "ADMIN" || userRole === "USER") && (
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}





// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "../css/Header.css";

// export default function Header() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token"); // Check if user is logged in
//   const userRole = localStorage.getItem("role"); // Get user role (Admin or User)

//   const handleLogout = async () => {
//     if (!token) {
//       alert("No token found!");
//       return;
//     }

//     try {
//       await fetch("http://localhost:8080/api/auth/logout", {
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json"
//         }
//       });

//       // Clear local storage and navigate to login
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//       alert("An error occurred during logout.");
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           {/* Logo */}
//           <Link className="navbar-brand" to="/">
//             <img src="./images/Logo.png" alt="Logo" style={{ width: "90px", height: "60px" }} />
//           </Link>

//           {/* Navbar toggle button */}
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar links */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/Userplans">Plans</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/MentalHealthPage">Tests</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/contactus">Contact</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/AppointmentForm">Book Session</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/SleepChecker">SleepChecker</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
//             </ul>

//             {/* Show Logout button only if the user is logged in (Admin or User) */}
//             {token && (userRole === "ADMIN" || userRole === "USER") && (
//               <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }








// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import "../css/Header.css"

// export default function Header() {
//   const navigate = useNavigate(); // Hook for navigation
  
  

//   const handleLogout = async () => {
//     const token = localStorage.getItem('token'); // Fetch token from local storage
//     if (!token) {
//         alert("No token found!");
//         return;
//     }

//     try {
//         await fetch("http://localhost:8080/api/auth/logout", {
//             method: "POST",
//             headers: {
//                 "Authorization": `Bearer ${token}`, // Pass token in Authorization header
//                 "Content-Type": "application/json"
//             }
//         });

//         // Clear token from local storage
//         localStorage.removeItem('token');

//         // Navigate to login page
//         navigate('/login');
//     } catch (error) {
//         console.error("Logout failed:", error);
//         alert("An error occurred during logout.");
//     }
// };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           {/* Logo */}
//           <Link className="navbar-brand" to="/">
//             <img 
//               src="./images/Logo.png"
//               alt="Logo" 
//               style={{ width: "90px", height: "60px" }} 
//             />
//           </Link>
//           {/* Navbar toggle button */}
//           <button 
//             className="navbar-toggler" 
//             type="button" 
//             data-bs-toggle="collapse" 
//             data-bs-target="#navbarSupportedContent" 
//             aria-controls="navbarSupportedContent" 
//             aria-expanded="false" 
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           {/* Navbar content */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
              
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/pricingCard">PricingCard</Link>
//               </li> */}
             
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signup">Signup</Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/newsletter">Newsletter</Link>
//               </li> */}
//               <li className="nav-item dropdown">
//                 <Link 
//                   className="nav-link dropdown-toggle" 
//                   to="/planpage" 
//                   role="button" 
//                   data-bs-toggle="dropdown" 
//                   aria-expanded="false"
//                 >
//                   Plans
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li><Link className="dropdown-item" to="/Userplans">Basic Plan</Link></li>
//                   {/* <li><Link className="dropdown-item" to="/another-action">Premium Plan</Link></li> */}
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><Link className="dropdown-item" to="/Userplans">Premium Plan</Link></li>
//                 </ul>
//               </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/login">Login</Link>
//               </li> */}
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/howitworkpage">Workflow</Link>
//               </li> */}
//               <li className="nav-item">
//                 <Link className="nav-link" to="/MentalHealthPage">Tests</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contactus">Contact</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/AppointmentForm">Book Session</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/aboutus">About Us</Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/newsletter">NewsLetter</Link>
//               </li> */}
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/dashboard">UserDashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/AdminDashboard">AdminDashboard</Link>
//               </li> */}
//               <li className="nav-item">
//                 <Link className="nav-link" to="/blogs">Blogs</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/SleepChecker">SleepChecker</Link>
//               </li>
//             </ul>
//              {/* Logout button */}
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//         >
//           Logout
//         </button>
//             {/* Search bar
//             <form className="d-flex" role="search">
//               <input 
//                 className="form-control me-2" 
//                 type="search" 
//                 placeholder="Search" 
//                 aria-label="Search" 
//               />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form> */}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
