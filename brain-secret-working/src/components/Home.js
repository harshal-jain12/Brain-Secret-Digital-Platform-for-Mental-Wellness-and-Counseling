import React from "react";
import "../css/Home.css";
import ReviewCardSlider from "./ReviewCardSlider"; // Import the ReviewCardSlider component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Userplans") {
      const element = document.getElementById("Userplans");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const subscribeNewsletter = async () => {
      const emailInput = document.querySelector(".email-input-newsletter");
      const email = emailInput.value;

      try {
        const response = await fetch("http://localhost:8080/api/newsletter/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        alert(data.message); // Show the message returned from the backend
      } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        alert("Something went wrong. Please try again.");
      }
    };

    // Attach event listener after the component is rendered
    const button = document.querySelector(".join-button-newsletter");
    if (button) {
      button.addEventListener("click", subscribeNewsletter);
    }

    // Cleanup function to remove event listener to avoid memory leaks
    return () => {
      if (button) {
        button.removeEventListener("click", subscribeNewsletter);
      }
    };
  }, []);
  
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
    <div className="container-banner">
      {/* Banner */}
      <div className="card text-bg-dark banner">
        <img
          src={process.env.PUBLIC_URL + "./images/quotes-background.jpg"}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-titlee" style={{ color: "#FFFFFF" }}>
            Welcome to{" "}
            <span style={{ color: "#FFD700" }}>Brain-Secret. </span>
            <br />
            <br />
            <br />
            <br />
            <br />
            "Find your strength, heal your mind, and <br />
            <span style={{ color: "#FFA500" }}>rediscover the peace you deserve </span>"
          </h5>
          <p className="card-textt">
            <small>
              <i>
                "Your journey to peace begins with a single step toward
                understanding yourself."
              </i>
            </small>
          </p>
        </div>
      </div>

      {/* Book Now Section */}
      <div className="container bookNow">
        <div className="image-section">
          <img
            src={process.env.PUBLIC_URL + "./images/mental-home.jpg"}
            alt="Anxiety Relief Therapy"
          />
        </div>
        <div className="text-section">
          <div className="quote-section">
            "Anxiety gone after first session – This could be you after
            registration for our unique therapy session."
          </div>
          <h2>Our Approaches</h2>
          <p>
            Our distinctive therapy approach integrates the most effective
            principles and techniques from psychotherapy, counseling, mindfulness,
            Indian philosophy, and evidence-based assessments. This innovative
            combination is designed to empower individuals and their support
            networks, enabling them to achieve significant relief and improved
            focus in a relatively short duration through targeted testing and
            personalized sessions with a counselor.
          </p>
          <a href="/AppointmentForm" className="book-now-btn">
            Book Now
          </a>
        </div>
      </div>

      {/* Our Services */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Relationship Counseling</div>
              <div className="service-icon">❤️</div>
            </div>
            <div className="service-details">
              Helping couples and individuals improve communication and strengthen relationships.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Stress Management</div>
              <div className="service-icon">🧘</div>
            </div>
            <div className="service-details">
              Techniques and strategies to help you reduce stress and enhance your mental well-being.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Depression Support</div>
              <div className="service-icon">🌧️</div>
            </div>
            <div className="service-details">
              Compassionate care and guidance to help you navigate through difficult times.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Behavioral Therapy</div>
              <div className="service-icon">🧠</div>
            </div>
            <div className="service-details">
              Addressing behavioral issues and promoting positive changes in actions and thoughts.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Anger Management Solutions</div>
              <div className="service-icon">🔥</div>
            </div>
            <div className="service-details">
              Learn to control and manage anger in a healthy, constructive manner.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Financial Wellness Coaching</div>
              <div className="service-icon">💰</div>
            </div>
            <div className="service-details">
              Guidance to help reduce financial stress and build a healthier relationship with money.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Self-Confidence Building</div>
              <div className="service-icon">💪</div>
            </div>
            <div className="service-details">
              Boost your self-esteem and develop confidence in your personal and professional life.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Support for Suicidal Thoughts</div>
              <div className="service-icon">🛟</div>
            </div>
            <div className="service-details">
              Immediate support and resources to help individuals experiencing suicidal thoughts.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Parental Guidance</div>
              <div className="service-icon">👨‍👩‍👧</div>
            </div>
            <div className="service-details">
              Offering tools and strategies for parents to navigate the challenges of raising children.
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <div className="service-title">Parent-Child Relationships</div>
              <div className="service-icon">🤝</div>
            </div>
            <div className="service-details">
              Helping improve communication and build stronger bonds between parents and children.
            </div>
          </div>
        </div>
      </section>

      
      {/* Plans */}
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
              
              <a href="/signup" className="plans-btn">
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
              <button className="plans-btn" onClick={handlePayment}>Buy Premium Plan</button>
            </div>

          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="reviews-section">
          <ReviewCardSlider /> {/* Integrate the ReviewCardSlider component here */}
      </section>

      {/* Newsletter Section */}
      <div className="newsletter-container">
        <div className="newsletter-header">
          <h1>Our 2024 Newsletter</h1>
          <p>We are looking into the future & we are taking you with us</p>
          <p>
            Discover exclusive updates, valuable insights, and expert advice delivered straight to your inbox.
            <br />
            Don’t miss out—let’s grow together! 💬
            <br />
            Subscribe now and take the first step toward something amazing.
          </p>
          <a
            href="https://mentalwellnesscounseling.com/creating-our-new-normal-shifting-from-fear-to-strength-during-the-health-crisis/"
            className="newsletter-link"
          >
            Read the newsletter here
          </a>
        </div>
        <div className="newsletter-subscribe">
          <h2>Subscribe Us:</h2>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email here*"
              className="email-input-newsletter"
            />
            <br />
            <button className="join-button-newsletter" >Join</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
