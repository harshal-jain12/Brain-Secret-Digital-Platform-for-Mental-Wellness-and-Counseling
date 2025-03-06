
import '../css/NewsLetter.css'; // Import the CSS file

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-header">
        <h1>Our 2024 Newsletter</h1>
        <p>We are looking into the future & we are taking you with us</p>
        <p>
        Discover exclusive updates, valuable insights, and expert advice delivered straight to your inbox. 
        <br></br>Don’t miss out—let’s grow together! 💬
          <br />
          Subscribe now and take the first step toward something amazing.
        </p>
        <a href="https://mentalwellnesscounseling.com/creating-our-new-normal-shifting-from-fear-to-strength-during-the-health-crisis/" className="newsletter-link">Read the newsletter here</a>
      </div>
      <div className="newsletter-subscribe">
        <h2>Subscribe Us:</h2>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email here*"
            className="email-input-newsletter"
          />
          <br></br>
          <button className="join-button-newsletter">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
