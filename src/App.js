// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar component

import Home from './pages/Home';
import Matches from './pages/Matches';
import Roster from './pages/Roster';
import Membership from './pages/Membership';
import Contact from './pages/Contact.js ';

function App() {
  return (
    <Router>
      <Navbar />  {/* Use Navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
