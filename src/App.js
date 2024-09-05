// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css'; // Import your global CSS

const App = () => {
  const [userRole, setUserRole] = useState(''); // State to store the selected role

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setUserRole={setUserRole} />} />
          <Route path="/signup" element={<Signup userRole={userRole} />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
