// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setUserRole }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setUserRole(role); // Set the role (teacher/admin)
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="home-container">
    <div className="text">
      <h1>WELCOME TO</h1>
      <h1> PROFPATH!</h1>
      <p>Please select your role:</p>
      <button onClick={() => handleRoleSelection('teacher')}>Teacher</button>
    
      <button onClick={() => handleRoleSelection('admin')}>Admin</button>
      </div>
    </div>
  );
};

export default Home;
