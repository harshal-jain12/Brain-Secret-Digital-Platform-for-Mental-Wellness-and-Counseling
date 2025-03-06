import React from 'react';
import "../css/Plans.css"

const Plans = () => {
  return (
    <div className="plans-container">
      <h1>Choose Your Plan</h1>
      <div className="plancards">
        <div className="plancard">
          <div className="plancard-header">Basic Plan</div>
          <div className="plancard-body">
            <img src="https://img.icons8.com/ios-filled/50/null/clipboard.png" alt="Basic Plan Icon" />
            <ul>
              <li><img src="https://img.icons8.com/ios-filled/20/checked.png" alt="Check"/>Access to 1 free test</li>
              <li><img src="https://img.icons8.com/ios-filled/20/checked.png" alt="Check"/>Results generated based on the test</li>
              <li><img src="https://img.icons8.com/ios-filled/20/checked.png" alt="Check"/>Suggested blogs based on your results</li>
            </ul>
            <a href="/Basicplan" className="plans-btn">
            Explore Basic Plan
          </a>
          </div>
        </div>
        <div className="plancard">
          <div className="plancard-header">Premium Plan</div>
          <div className="plancard-body">
            <img src="https://img.icons8.com/ios-filled/50/null/diamond.png" alt="Premium Plan Icon" />
            <ul>
              <li><img src="https://img.icons8.com/ios-filled/20/checked.png" alt="Check"/>Access to multiple free tests</li>
              <li><img src="https://img.icons8.com/ios-filled/20/checked.png" alt="Check"/>Results generated based on all tests</li>
              <li><img src="https://img.icons8.com/ios-filled/20/checked.png" alt="Check"/>One-on-one sessions with a counselor</li>
              <li><img src="https://img.icons8.com/ios-filled/20/checked.png" alt="Check"/>Personalized suggestions for improvement</li>
            </ul>
            
            <a href="/Premiumplan" className="plans-btn">
            Explore Premium Plan
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
