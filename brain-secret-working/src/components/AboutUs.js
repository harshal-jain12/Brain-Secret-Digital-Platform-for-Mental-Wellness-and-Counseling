import React, { useEffect } from "react";
import "../css/AboutUs.css" // Import the CSS file

const AboutUs = () => {
  // Add click event listeners using useEffect
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("open");
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      serviceCards.forEach((card) => {
        card.removeEventListener("click", () => {
          card.classList.toggle("open");
        });
      });
    };
  }, []);

  const steps = [
    {
      title: "Choose The Right Plan",
      description: "Decide on the number of sessions you would like to opt for.",
      image: "./images/htw1.svg", // Replace with the path to your image
    },
    {
      title: "Know Your Needs",
      description: "Answer a few quick questions and get a therapist recommendation right away.",
      image: "./images/htw2.svg", // Replace with the path to your image
    },
    // {
    //   title: "Get Matched",
    //   description: "Choose the recommended therapist or talk to a matching expert who will connect you with the right therapist based on your needs.",
    //   image: "./images/htw3.svg", // Replace with the path to your image
    // },
    {
      title: "Schedule A Session",
      description: "Choose a convenient time slot and get an appointment with your therapist.",
      image: "./images/htw4.svg", // Replace with the path to your image
    },
    {
      title: "Get Therapy",
      description: "At the scheduled time, join the session with your therapist using the mobile application or web browser.",
      image: "./images/htw5.svg", // Replace with the path to your image
    },
    {
      title: "Regular Messages",
      description: "In addition to the scheduled video sessions, you can reach out to your therapist via voice messages or chat. The therapist will respond 1-2 times a day, based on availability.",
      image: "./images/htw6.svg", // Replace with the path to your image
    },
    {
      title: "Continuous Support",
      description: "You have the flexibility to reschedule sessions or change the counselor at any point. For any issues or support, Felicity helpdesk has you covered.",
      image: "./images/htw7.svg", // Replace with the path to your image
    },
  ];


  return (
    <>
      <section className="about-section">
        <div className="text-content">
          <h1>WELCOME TO BRAIN SECRET</h1><br/>
          <h2>We Hope To Help You Achieve Your Calm!</h2>
          <p>
            In our most fragile moments, we need our healthcare system to be at
            its most accessible and welcoming. Individuals shouldn’t have to
            jump through hoops to find the right therapist who can help.
          </p>
          <p>
            Acknowledging this need, Brainsecret was established to provide
            psychosocial counseling and therapy both virtually & face-to-face.
            Today, it is one of the top organizations for mental health support
            in the country.
          </p>
        </div>
        <div className="profile">
          <img src="./images/counselor-image.jpg" alt="Co-Founder" />
          <h3>Dr. Parmeela Pawar</h3>
          <h5>Co-Founder, Brain Secret</h5>
          {/* <a href="#">📷</a>
          <a href="#">🔗</a> */}
        </div>
      </section>

      

      <section className="values-section">
        <h2>
          We Are <span style={{ color: "#f47c20" }}>#StrongerTogether</span>
        </h2>
        <p>Our Values</p>
        <div className="values-container">
          <div className="value-box">
            <img src="./images/mission.png" alt="Mission Icon" />
            <h3>Mission</h3>
            <p>
              Our primary mission is to assist you in
              <strong> discovering your center.</strong> This refers to
              achieving a balanced state of health, happiness, and mental
              well-being. We are here to guide and support you in attaining all
              of this and more.
            </p>
          </div>
          <div className="value-box">
            <img src="./images/search.png" alt="Vision Icon" />
            <h3>Vision</h3>
            <p>
              At Brainsecret, we are dedicated to creating a
              <strong> quality-driven</strong> organization that earns the
              trust of every individual. "From your very first interaction to
              the last, we strive to make you happier than your past."
            </p>
          </div>
          <div className="value-box">
            <img src="./images/hand.png" alt="Values Icon" />
            <h3>Values</h3>
            <p>
              At the core of our work lies a commitment to
              <strong> care and healing.</strong> For us, being
              <span style={{ color: "#f47c20" }}> #StrongerTogether</span>
              signifies fostering a supportive culture where we can rely on one
              another.
            </p>
          </div>
        </div>
      </section>

{/* How it works */}
      <div className="how-it-works">
      <h2>How It Works</h2>
      <p>
        The most simple & convenient way to access talk therapy - anytime,
        anywhere, any device.
      </p>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <img src={step.image} alt={step.title} />
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
    </>
  );
};

export default AboutUs;
