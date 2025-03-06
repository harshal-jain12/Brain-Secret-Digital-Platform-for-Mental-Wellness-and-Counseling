import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/DepressionInfo.css"; // Add appropriate CSS for styling

const DepressionInfo = () => {
  const navigate = useNavigate();
  const { testName } = useParams();

  const handleStartTest = () => {
    navigate("/DepressionTest");
  };

  return (
    <div className="depression-info">
      {/* Header Section */}
      <div className="header">
        <h1>FIND OUT IF YOU HAVE</h1>
        <h2>{testName.replace(/_/g, " ")}</h2>
        <p>
          Take this mental health test. It's quick, free, and you'll get your
          confidential results instantly.
        </p>
        <button className="start-test-btn" onClick={handleStartTest}>
          START TEST
        </button>
      </div>

      {/* Content Section */}
      <div className="content">
        {/* Signs & Symptoms Section */}
        <section>
          <h2>SIGNS & SYMPTOMS OF {testName.replace(/_/g, " ")}</h2>
          <p>
          {testName.replace(/_/g, " ")} is a common and serious mood disorder that affects how
            individuals feel, think, and handle daily activities. While
            occasional sadness is a natural part of life, depression involves
            persistent feelings of sadness and hopelessness that interfere with
            daily functioning. Recognizing the signs and symptoms of depression
            is essential for early intervention and effective treatment.
          </p>
          <ul>
            <li>Persistent Sadness: Prolonged feelings of sadness or emptiness.</li>
            <li>
              Lack of Interest: Loss of interest or pleasure in activities once
              enjoyed.
            </li>
            <li>
              Changes in Appetite: Significant weight loss or gain unrelated to
              dieting.
            </li>
            <li>
              Sleep Disturbances: Insomnia or sleeping too much.
            </li>
            <li>
              Fatigue: Persistent feelings of tiredness or lack of energy.
            </li>
            <li>
              Difficulty Concentrating: Trouble focusing, making decisions, or
              remembering details.
            </li>
            <li>
              Feelings of Worthlessness: Intense feelings of guilt or
              self-criticism.
            </li>
            <li>
              Physical Symptoms: Unexplained aches, pains, or gastrointestinal
              issues.
            </li>
            <li>Thoughts of Death: Recurrent thoughts of death or suicide.</li>
          </ul>
          <p>
          {testName.replace(/_/g, " ")} not only impacts emotions but also behaviors. Individuals
            with depression may withdraw socially, isolate themselves from
            friends and family, or avoid activities they once found fulfilling.
            Irritability, frustration, or angry outbursts can also become
            common, further straining relationships and daily interactions.
          </p>
        </section>

        {/* Diagnosis & Treatment Section */}
        <section>
          <h2>DIAGNOSIS & TREATMENT OF {testName.replace(/_/g, " ")}</h2>
          <p>
          {testName.replace(/_/g, " ")} is a complex mood disorder that requires careful
            diagnosis and a comprehensive treatment plan. Early detection and
            intervention can significantly improve outcomes and help individuals
            regain control of their lives. Understanding how depression is
            diagnosed and treated is key to effective management.
          </p>
          <h3>Diagnosis</h3>
          <p>
            Diagnosis is typically diagnosed through a thorough evaluation
            conducted by a healthcare professional. The diagnostic process often
            includes:
          </p>
          <ul>
            <li>
              Clinical Interviews: Discussing symptoms, their duration, and
              their impact on daily life.
            </li>
            <li>
              Diagnostic Criteria: Using established guidelines, such as those
              in the DSM-5, to identify the presence of depressive symptoms.
            </li>
            <li>
              Physical Examinations: Ruling out medical conditions that may
              mimic depressive symptoms, such as thyroid disorders or vitamin
              deficiencies.
            </li>
            <li>
              Assessment Tools: Utilizing questionnaires or scales to measure
              the severity of symptoms.
            </li>
          </ul>
          <h3>Treatment Approaches</h3>
          <p>
            Effective treatment for depression often involves a combination of
            therapy, lifestyle changes, and other interventions. Each treatment
            plan is tailored to the individual's unique needs and circumstances.
          </p>
          <ul>
            <li>
              Psychotherapy: Talk therapy, or psychotherapy, is one of the most
              effective treatments for depression. Common approaches include:
            </li>
            <li>
              Cognitive Behavioral Therapy (CBT): Helps individuals identify and
              change negative thought patterns and behaviors.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DepressionInfo;
