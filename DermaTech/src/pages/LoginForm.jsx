import React, { useState } from 'react';
import '../components/login.css';

const FlipCard = ({ onLogin, onRegister }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className="background">
      <div className={`card-container ${flipped ? 'flipped' : ''}`}>
        {/* Front - Login */}
        <div className="card-side front">
          <div className="login-box">
            <h2>Login</h2>
            <form id="login-form" onSubmit={onLogin}>
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                required
              />
              <a href="#" className="forgot" id="forgot-password">Forgot password?</a>
              <button type="submit">Login</button>
              <p className="register">
                Not registered yet? <a href="#" onClick={handleFlip} id="create-account">Sign up</a>
              </p>
            </form>
          </div>
        </div>

        {/* Back - Register */}
        <div className="card-side back">
          <div className="login-box">
            <h2>Sign Up</h2>
            <form id="register-form" onSubmit={onRegister}>
              <label htmlFor="register-fullname">Full Name</label>
              <input
                type="text"
                id="register-fullname"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="register-email">Email</label>
              <input
                type="email"
                id="register-email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                id="register-password"
                placeholder="Create a password"
                required
              />
              <button type="submit">Sign Up</button>
              <p className="register">
                Already have an account? <a href="#" onClick={handleFlip} id="back-to-login">Back to login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
