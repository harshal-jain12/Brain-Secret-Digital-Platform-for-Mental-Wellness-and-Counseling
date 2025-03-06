import React, { useState } from "react";
import "../css/MentalHealthPage.css"
const Premiumplan = () => {
  const [showMoreTests, setShowMoreTests] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const tests = [
    "Depression", "Parental Guidance", 
     "Gambling Addiction", "Mania", 
    "Postpartum Depression",  
     "Social Anxiety Disorder",
   "Stress",  "Separation Anxiety", "Repetitive Thoughts and Behaviors", 
     "Relationship Health", 
  ];

  const faqs = [
    { question: "Do I need to create an account to take a test?", answer: "No, you can take tests without creating an account." },
    { question: "How long does it take to complete a test?", answer: "Tests usually take around 5–10 minutes to complete." },
    { question: "Are my test results confidential and private?", answer: "Yes, your results are fully confidential." },
  ];

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  }

  return (
    
    <div className="mental-health-page">
      {/* Header */}
      <header>
        <h1>Premium Plans</h1>
        <br/>
        <br/>
        <h1>Make Sense of Your Mental Health Symptoms</h1>
        <p>Taking an online mental health test is one of the quickest ways to find out if you have a mental health condition.</p>
      </header>

      {/* Test Circles */}
      <section className="tests-section">
        <h2>Tap Any Test Below</h2>
        <div className="test-grid">
          {tests.slice(0, showMoreTests ? tests.length : 4).map((test, index) => (
            <div
              key={index}
              className="test-circle"
              // onClick={() => window.open(`/components/${test.toLowerCase().replace(/ /g, "-")}/DepressionTest`, "_blank")}


              onClick={() => window.open(`https://www.mind-diagnostics.org/depression-test${test.toLowerCase().replace(/ /g, "_")}`, "_blank")}
            >
              {test}
            </div>
          ))}
        </div>
        <button
          className="toggle-tests"
          onClick={() => setShowMoreTests(!showMoreTests)}
        >
          {showMoreTests ? "View Fewer Tests" : "View More Tests"}
        </button>
      </section>
        
    {/* Paragraph Section */}
    <section className="paragraph-section">
      <div className="mental-health-container">
      <h1>What is Mental Health?</h1>
      <div className="content">
        <div className="column">
          <p>
            Mental health is a combination of our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life from childhood and adolescence through adulthood.
          </p>
          <p>
            Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:
            <ul>
              <li>Biological factors, such as genes or brain chemistry</li>
              <li>Life experiences, such as trauma or abuse</li>
              <li>Family history of mental health problems</li>
            </ul>
          </p>
        </div>
        <div className="column">
          <p>
            Most people believe that mental illness, sometimes known as mental disorder, is rare and "happens to someone else." In fact, mental illness is common and widespread. An estimated 54 million Americans suffer from some form of mental illness in a given year.
          </p>
          <p>
            Most families are not prepared to cope with learning their loved one has a mental illness. It can be physically and emotionally trying and can make us feel vulnerable to the opinions and judgments of others.
          </p>
        </div>
      </div>
      
      <h1>When to See a Mental Health Professional</h1>
      <div className="content">
        <div className="column">
          <p>
            Mental health issues are real, common, and treatable. According to the National Alliance on Mental Illness (NAMI), 1 in 5 adults experience mental illness and 20% of those are considered serious. 17% of 6–17 year olds experience a mental health disorder. So the first thing to remember is this: You are not alone.
          </p>
          <p>
            If you feel that you are suffering from a mental illness, and particularly if these issues are preventing you from living life to the full or feeling yourself, you may want to consider professional help which can make an enormous difference.
          </p>
        </div>
        <div className="column">
          <p>
            And to be clear, you don’t need to be going through a crisis in order to justify getting help. In fact, it can be advantageous from a treatment perspective to identify and deal with issues early and before they have a major impact on your life. Either way you should feel encouraged and able to seek help however you are feeling.
          </p>
          <p>
            Mental health professionals such as licensed therapist can help in a range of ways including:
            <ul>
              <li>Help you identify where, when, and how issues arise</li>
              <li>Develop coping strategies for specific symptoms and issues</li>
              <li>Encourage resilience and self-management</li>
              <li>Identify and change negative behaviors</li>
              <li>Identify and encourage positive behaviors</li>
            </ul>
          </p>
        </div>
      </div>
      
      <h1>What is Mental Illness?</h1>
      <div className="content">
        <p>
          A mental illness is a disease that causes mild to severe disturbances in thought and/or behavior, resulting in an inability to cope with life’s ordinary demands and routines.
        </p>
        <p>
          There are more than 200 identified forms of mental illness. Some of the more common disorders are depressive disorders, anxiety disorders, bipolar disorder, and PTSD. Symptoms may include changes in mood, personality, personal habits or social withdrawal.
        </p>
      </div>

      <h1>Early Warning Signs</h1>
      <div className="content">
        <div className="column">
          <p>Not sure if you or someone you know is living with mental health problems? Experiencing one or more of the following feelings or behaviors can be an early warning sign of a problem:</p>
          <ul>
            <li>Eating or sleeping too much or too little</li>
            <li>Pulling away from people and usual activities</li>
            <li>Having low or no energy</li>
            <li>Feeling numb or like nothing matters</li>
            <li>Having unexplained aches and pains</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>Feeling helpless or hopeless</li>
            <li>Feeling unusually confused, forgetful, on edge, angry, upset, worried, or scared</li>
            <li>Yelling or fighting with family and friends</li>
            <li>Experiencing severe mood swings that cause problems in relationships</li>
            <li>Having persistent thoughts and memories you can’t get out of your head</li>
          </ul>
        </div>
      </div>
    </div>
    </section>


      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </div>
              {faqOpen === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>

  )
}

export default Premiumplan;


