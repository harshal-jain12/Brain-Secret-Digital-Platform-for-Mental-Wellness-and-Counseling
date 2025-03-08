import React from 'react';
import "../css/Plans.css"

const Plans = () => {

  const handlePayment = async () => {
    try {
      // Step 1: Create Order via Backend
      const response = await fetch("http://localhost:8080/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5999 }), // Amount in INR
      });

      const orderData = await response.json();
      if (!orderData.orderId) {
        alert("❌ Failed to create order. Try again!");
        return;
      }

      // Step 2: Initialize Razorpay
      const options = {
        key: "rzp_test_cbAsi6AWaHNdfE", // Replace with your Razorpay Key
        amount: orderData.amount, // Amount in paisa
        currency: "INR",
        name: "BrainSecret",
        description: "Premium Plan Payment",
        order_id: orderData.orderId,
        handler: async function (response) {
          // Step 3: Verify Payment
          const verifyRes = await fetch("http://localhost:8080/api/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: orderData.orderId,
              paymentId: response.razorpay_payment_id,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.status === "success") {
            alert("✅ Payment Successful! 🎉");
          } else {
            alert("❌ Payment Verification Failed!");
          }
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("❌ Something went wrong!");
    }
  };

  return (
    
    <div className="plans-container" id="Userplans">
    <h1>Choose Your Plan</h1>
    <div className="plancards">
      <div className="plancard">
        <div className="plancard-header">Free Services</div>
        <div className="plancard-body">
          <img
            src="https://img.icons8.com/ios-filled/50/null/clipboard.png"
            alt="Basic Plan Icon"
          />
          <ul>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/20/checked.png"
                alt="Check"
              />
              Access to 1 free test
            </li>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/20/checked.png"
                alt="Check"
              />
              Results generated based on the test
            </li>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/20/checked.png"
                alt="Check"
              />
              Suggested blogs based on your results
            </li>
            
          </ul>
          {/* <h5 style={{fontWeight: "bold", textAlign: "center", fontSize:"26px", paddingBottom: "25px",  }}>Rs. 3999 </h5> */}
          
          <a href="/login" className="plans-btn">
            Get Free Service
          </a>
        </div>
      </div>
      <div className="plancard">
        <div className="plancard-header">Premium Plan</div>
        <div className="plancard-body">
          <img
            src="https://img.icons8.com/ios-filled/50/null/diamond.png"
            alt="Premium Plan Icon"
          />
          <ul>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/20/checked.png"
                alt="Check"
              />
              Access to multiple free tests
            </li>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/20/checked.png"
                alt="Check"
              />
              Results generated based on all tests
            </li>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/20/checked.png"
                alt="Check"
              />
              One-on-one sessions with a counselor
            </li>
            <li>
              <img
                src="https://img.icons8.com/ios-filled/20/checked.png"
                alt="Check"
              />
              Personalized suggestions for improvement
            </li>
            
          </ul>
          <h5 style={{fontWeight: "bold", textAlign: "center", fontSize:"26px", paddingBottom: "25px"  }}>Rs. 5999 </h5>

          {/* <a href="/payment" className="plans-btn">
            Buy Premium plan
          </a> */}
          <button className="plans-btn" onClick={handlePayment}> <a href="/login" className="plans-btn">
          Buy Premium Plan
          </a></button>
        </div>

      </div>
    </div>
  </div>
  );
}

export default Plans;
