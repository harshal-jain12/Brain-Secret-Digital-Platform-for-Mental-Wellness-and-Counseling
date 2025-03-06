import React from "react";
import "../css/DepressionResult.css";

const DepressionResult = () => {
  return (
    <div className="depression-result-container">
      {/* Result Section */}
      <div className="result-header">
        <div className="score">
          <div className="score-circle">
            <span>45</span>
            <p>OUT OF 100</p>
          </div> 
          <div className="result-description">
            <h2>Your Depression Test Result</h2>
            <h3>Moderate Depression</h3>
            <p>
              Your responses indicate moderate depression. Based on your answers, living with these symptoms could be
              difficult, managing relationships and even the tasks of everyday life.
            </p>
          </div>
        </div>
        <div className="online-counseling">
          <h3>Chat online with a therapist who specializes in Depression</h3>
          <button className="get-started-btn"><a href="/AppointmentForm">GET STARTED</a></button>
          <div className="options">
            <span>Messaging</span> | <span>Chat</span> | <span>Phone</span> | <span>Video</span>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="section">
        <h3>WHAT THIS RESULT MEANS</h3>
        <p>
          Scores in this range are clinically significant for depression and it may be time to start a conversation
          with a mental health professional. Finding the right treatment plan and working with a healthcare provider or
          support person can help you feel more like you again.
        </p>
        <p>
          The depression symptoms you are experiencing may also indicate other mental health issues. We recommend you
          also take the tests for anxiety, substance abuse & addiction, and PTSD. These other issues are very common
          with people also suffering from depression.
        </p>
        <p>
          This test is not meant to be a diagnosis. Diagnosis and care of mental health conditions can be difficult.
          Having symptoms of depression is different than having depression. In addition, symptoms of depression can be
          caused by other mental health conditions or other health problems, like a thyroid disorder. Only a trained
          professional, such as a doctor or a mental health provider, can make this determination. However, by printing
          the results and bringing it to a mental health professional, you can open up the conversation.
        </p>
      </div>
      <hr />

      {/* Next Steps Section */}
      <div className="section">
        <h3>WHAT NEXT?</h3>
        <p>
          We recommend <strong>online counseling</strong> which can be very effective at treating depression.
        </p>
        <p>
          Online counseling allows you to receive care from a therapist via phone, video chat, or instant messaging. It
          can help address self-destructive behaviors, limiting beliefs, painful feelings, relationship issues, and
          more.
        </p>
        <p>
          It is convenient for those who either cannot travel or would prefer not to meet with a therapist in-person.
          Starting at $65 per week, it can also be more affordable than in-person counseling and is available worldwide.
        </p>
        <p>Depression is real, common, and treatable with online counseling.</p>
      </div>
    </div>
  );
};

export default DepressionResult;
