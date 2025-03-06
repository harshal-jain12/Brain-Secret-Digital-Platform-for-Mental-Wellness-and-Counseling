import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HowItWorks from './components/HowItWork';
import NewLetter from './components/NewLetter';
import ContactUs from './components/ContactUs';
import MentalHealthPage from './components/MentalHealthPage';
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
import SleepChecker from './components/SleepChecker';
//import ProtectedRoute from './components/ProtectedRoute';




const projectroute = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/Userplans",
            element: <Home/>,
        },
        {
            path: "MentalHealthPage",
            element: <MentalHealthPage/>,
        },
        {
            path: "/faq",
            element: <MentalHealthPage/>,
        },
        {
            path: "/",
            element: <MentalHealthPage/>,
        },
        {
            path: "/depression-info/:testName",
            element: <DepressionInfo/>,
        },
        {
            path: "Basicplan",
            element: <Basicplan/>,

        },

        {
            path: "Premiumplan",
            element: <Premiumplan/>,

        },
     
     
        {
            path: "login",
            element: <Login/>,
        },
        {
            path: "signup",
            element: <Signup/>,
        },
        {
            path: "howitworkpage",
            element: <HowItWorks/>,
        },
        {
            path: "newsletter",
            element: <NewLetter/>,
        },
       
        {
            path: "contactus",
            element: <ContactUs/>,
        },
        {
            path: "AppointmentForm",
            element: <AppointmentForm/>,

        },
        {
            path: "DepressionTest",
            element: <DepressionTest/>,
        },
        {
            path: "plans",
            element: <Plans/>,
        },
        {
            path: "aboutus",
            element: <AboutUs/>,
        },
        {
            path:"payment",
            element: <PaymentUI/>
        },
        {
            path:"newsletter",
            element: <NewLetter/>
        },
        {
            path:"userDashboard",
            element: <Dashboard/>
        },
        {
            path:"community",
            element: <Community/>
        },
        {
            path:"DepressionResult",
            element: <DepressionResult/>
        },
        {
            path:"CounselingManagement",
            element: <CounselingManagement/>
        },
        {
            path:"AdminDashboard",
            element: <AdminDashboard/>
        },
        {
            path:"Dashboardlist",
            element: <DashboardList/>
        },
        {
            path:"Appointments",
            element: <Appointments/>
        },
        {
            path:"blogs",
            element: <Blogs/>
        },
        {
            path:"DepressionInfo",
            element: <DepressionInfo/>
        },
        {
            path: "SleepChecker",
            element: <SleepChecker/>
        },
        {
            path: "*",
            element: <h1>404 Not Found</h1>,
            // element: <Navigate to="/login" />,
        },
        // {
        //     path: "admin-dashboard",
        //     element: <ProtectedRoute role="ADMIN" component={AdminDashboard} />,
        // },
        // {
        //     path: "user-dashboard",
        //     element: <ProtectedRoute role="USER" component={Dashboard} />,
        // },
        
        

        
      

        
    ],
},
]);

export default projectroute;