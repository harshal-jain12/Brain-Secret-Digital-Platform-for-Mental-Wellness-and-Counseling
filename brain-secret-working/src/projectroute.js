import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HowItWorks from './components/HowItWork';
import NewLetter from './components/NewLetter';
import ContactUs from './components/ContactUs';
import MentalHealthPage from './components/MentalHealthPage';
import SleepChecker from './components/SleepChecker';
import AppointmentForm from './components/AppointmentForm';
import DepressionTest from './components/DepressionTest';
import Basicplan from './components/Basicplan';
import Premiumplan from './components/Premiumplan';
import Plans from './components/Plans';
import AboutUs from './components/AboutUs';
import PaymentUI from './components/PaymentUI';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import DepressionResult from './components/DepressionResult';
import CounselingManagement from './components/CounselingManagement';
import AdminDashboard from './components/AdminDashboard';
import DashboardList from './components/DashboardList';
import Appointments from './components/Appointments';
import Blogs from './components/Blogs';
import DepressionInfo from './components/DepressionInfo';

// Protected Route Wrapper
const ProtectedRoute = ({ element, allowedRoles }) => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return element;
};

// Define Routes
const projectroute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // ✅ Public Routes
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/howitworks", element: <HowItWorks /> },
            { path: "/newsletter", element: <NewLetter /> },
            { path: "/contactus", element: <ContactUs /> },
            { path: "/MentalHealthPage", element: <MentalHealthPage /> },
            { path: "/sleepchecker", element: <SleepChecker /> },
            { path: "/basicplan", element: <Basicplan /> },
            { path: "/premiumplan", element: <Premiumplan /> },
            //{ path: "/plans", element: <Plans /> },
           // { path: "/Userplans", element: <Plans /> },
            { path: "/Userplans", element: <Home/>, },
            { path: "/aboutus", element: <AboutUs /> },
            { path: "/faq", element: <MentalHealthPage/>, },
            { path: "/", element: <MentalHealthPage/>, },


            // ✅ User Protected Routes
            {
                path: "/AppointmentForm",
                element: <ProtectedRoute element={<AppointmentForm />} allowedRoles={["USER"]} />,
            },
            {
                path: "/depressiontest",
                element: <ProtectedRoute element={<DepressionTest />} allowedRoles={["USER"]} />,
            },
            {
                path: "/payment",
                element: <ProtectedRoute element={<PaymentUI />} allowedRoles={["USER"]} />,
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute element={<Dashboard />} allowedRoles={["USER"]} />,
            },
            {
                path: "/community",
                element: <ProtectedRoute element={<Community />} allowedRoles={["USER"]} />,
            },
            {
                path: "/depressionresult",
                element: <ProtectedRoute element={<DepressionResult />} allowedRoles={["USER"]} />,
            },
            {
                path: "/blogs",
                element: <ProtectedRoute element={<Blogs />} allowedRoles={["USER"]} />,
            },
            {
                path: "/depression-info/:testName",
                element: <ProtectedRoute element={<DepressionInfo />} allowedRoles={["USER"]} />,
            },
            {
                path: "/counselingmanagement",
                element: <ProtectedRoute element={<CounselingManagement />} allowedRoles={["USER"]} />,
            },

            // ✅ Admin Protected Routes
            {
                path: "/AdminDashboard",
                element: <ProtectedRoute element={<AdminDashboard />} allowedRoles={["ADMIN"]} />,
            },
            {
                path: "/dashboardlist",
                element: <ProtectedRoute element={<DashboardList />} allowedRoles={["ADMIN"]} />,
            },
            {
                path: "/appointments",
                element: <ProtectedRoute element={<Appointments />} allowedRoles={["ADMIN"]} />,
            },
            {
                path: "/admin-depressionresult",
                element: <ProtectedRoute element={<DepressionResult />} allowedRoles={["ADMIN"]} />,
            },
            {
                path: "/counselingmanagement",
                element: <ProtectedRoute element={<CounselingManagement />} allowedRoles={["ADMIN"]} />,
            },
            {
                path: "/admin-community",
                element: <ProtectedRoute element={<Community />} allowedRoles={["ADMIN"]} />,
            },

            // 404 Not Found Route
            { path: "*", element: <h1>404 Not Found</h1> },
        ],
    },
]);

export default projectroute;









// import React from 'react';
// import { createBrowserRouter } from "react-router-dom";
// import App from "./components/App";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import HowItWorks from './components/HowItWork';
// import NewLetter from './components/NewLetter';
// import ContactUs from './components/ContactUs';
// import MentalHealthPage from './components/MentalHealthPage';
// import AppointmentForm from './components/AppointmentForm';
// import DepressionTest from './components/DepressionTest';
// import Basicplan from './components/Basicplan';
// import Premiumplan from './components/Premiumplan';
// import Plans from './components/Plans';
// import AboutUs from './components/AboutUs';
// import PaymentUI from './components/PaymentUI';
// import Dashboard from './components/Dashboard';
// import Community from './components/Community';
// import DepressionResult from './components/DepressionResult';
// import CounselingManagement from './components/CounselingManagement';
// import AdminDashboard from './components/AdminDashboard';
// import DashboardList from './components/DashboardList';
// import Appointments from './components/Appointments';
// import Blogs from './components/Blogs';
// import DepressionInfo from './components/DepressionInfo';
// import SleepChecker from './components/SleepChecker';
// //import ProtectedRoute from './components/ProtectedRoute';




// const projectroute = createBrowserRouter([
//     {
//     path: "/",
//     element: <App/>,
//     children: [
//         {
//             path: "/",
//             element: <Home/>,
//         },
//         {
//             path: "/Userplans",
//             element: <Home/>,
//         },
//         {
//             path: "MentalHealthPage",
//             element: <MentalHealthPage/>,
//         },
//         {
//             path: "/faq",
//             element: <MentalHealthPage/>,
//         },
//         {
//             path: "/",
//             element: <MentalHealthPage/>,
//         },
//         {
//             path: "/depression-info/:testName",
//             element: <DepressionInfo/>,
//         },
//         {
//             path: "Basicplan",
//             element: <Basicplan/>,

//         },

//         {
//             path: "Premiumplan",
//             element: <Premiumplan/>,

//         },
     
     
//         {
//             path: "login",
//             element: <Login/>,
//         },
//         {
//             path: "signup",
//             element: <Signup/>,
//         },
//         {
//             path: "howitworkpage",
//             element: <HowItWorks/>,
//         },
//         {
//             path: "newsletter",
//             element: <NewLetter/>,
//         },
       
//         {
//             path: "contactus",
//             element: <ContactUs/>,
//         },
//         {
//             path: "AppointmentForm",
//             element: <AppointmentForm/>,

//         },
//         {
//             path: "DepressionTest",
//             element: <DepressionTest/>,
//         },
//         {
//             path: "plans",
//             element: <Plans/>,
//         },
//         {
//             path: "aboutus",
//             element: <AboutUs/>,
//         },
//         {
//             path:"payment",
//             element: <PaymentUI/>
//         },
//         {
//             path:"newsletter",
//             element: <NewLetter/>
//         },
//         {
//             path:"userDashboard",
//             element: <Dashboard/>
//         },
//         {
//             path:"community",
//             element: <Community/>
//         },
//         {
//             path:"DepressionResult",
//             element: <DepressionResult/>
//         },
//         {
//             path:"CounselingManagement",
//             element: <CounselingManagement/>
//         },
//         {
//             path:"AdminDashboard",
//             element: <AdminDashboard/>
//         },
//         {
//             path:"Dashboardlist",
//             element: <DashboardList/>
//         },
//         {
//             path:"Appointments",
//             element: <Appointments/>
//         },
//         {
//             path:"blogs",
//             element: <Blogs/>
//         },
//         {
//             path:"DepressionInfo",
//             element: <DepressionInfo/>
//         },
//         {
//             path: "SleepChecker",
//             element: <SleepChecker/>
//         },
//         {
//             path: "*",
//             element: <h1>404 Not Found</h1>,
//             // element: <Navigate to="/login" />,
//         },
//         // {
//         //     path: "admin-dashboard",
//         //     element: <ProtectedRoute role="ADMIN" component={AdminDashboard} />,
//         // },
//         // {
//         //     path: "user-dashboard",
//         //     element: <ProtectedRoute role="USER" component={Dashboard} />,
//         // },
        
        

        
      

        
//     ],
// },
// ]);

// export default projectroute;