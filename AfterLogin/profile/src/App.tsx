import './App.css';
import React from "react";
import Navbar from './components/NavBar';
import Leaderboard from './components/Leaderboard';
import { Routes, Route } from 'react-router-dom';
import Discuss from './components/Discuss';
import Courses from './components/Courses';
import Profile from './components/Profile';
import EnhancedBlogPage from './components/BlogPage';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/blog" element={<EnhancedBlogPage />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
