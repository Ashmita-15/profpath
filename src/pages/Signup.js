// src/pages/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file for styling

const Signup = ({ userRole }) => {
  const [isLoginMode, setIsLoginMode] = useState(false); // State to toggle between login and signup forms
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoginMode) {
      // Handle login logic
      if (userRole === 'teacher') {
        navigate('/teacher-dashboard');
      } else if (userRole === 'admin') {
        navigate('/admin-dashboard');
      }
    } else {
      // Handle signup logic
      if (userRole === 'teacher') {
        navigate('/teacher-dashboard');
      } else if (userRole === 'admin') {
        navigate('/admin-dashboard');
      }
    }
  };

  const toggleAuthMode = () => {
    setIsLoginMode(!isLoginMode); // Toggle between login and signup modes
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="/sign.jpg" alt="Signup" />
      </div>
      <div className="signup-form">
        <h1>{isLoginMode ? 'Login' : 'Signup'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Username:</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-group2">
                <label>Email:</label>
                <input type="email" required />
              </div>
            </>
          )}
          {isLoginMode && (
            <div className="form-group2">
              <label>Username:</label>
              <input type="text" required />
            </div>
          )}
          <div className="form-group2">
            <label>Password:</label>
            <input type="password" required />
          </div>
          
          <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
        </form>
        {isLoginMode ? (
          <div className="auth-toggle">
            Don't have an account? <span onClick={toggleAuthMode}>Signup</span>
          </div>
        ) : (
          <>
            <div className="forgot-password">Forgot Password?</div>
            <div className="auth-toggle">
              Already a user? <span onClick={toggleAuthMode}>Login</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
