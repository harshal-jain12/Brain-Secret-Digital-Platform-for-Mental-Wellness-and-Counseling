import React from "react";
import "../css/HowItWorks.css";

function HowItWorks() {
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
      <button className="get-started">Get Started</button>
    </div>
  );
}

export default HowItWorks;
