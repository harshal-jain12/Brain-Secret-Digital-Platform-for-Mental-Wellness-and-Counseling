import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
// import PaymentUI from './PaymentUI';
// import DepressionResult from './DepressionResult';
// import Community from './Community';
// import DepressionTest from './DepressionTest';
// import CounselorDashboard from '../pages/CounselorDashboard';




export default function App() {
  return (
    <>
        <Header />
        {/* <CounselorDashboard/> */}
        {/* <PaymentUI/>
        <DepressionResult/>
        <Community/>
        <DepressionTest/> */}
        <Outlet />
        <Footer/>
    
    </>
  );
}
