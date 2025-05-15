import React from 'react';
// Importing React Router components to handle page navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing different page components for each route
import Home from './pages/Home';
import Matches from './pages/Matches';
import Roster from './pages/Roster';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

// Importing the Navbar component which will be shown on all pages
import Navbar from './components/Navbar';

function App() {
  return (
    // Using Router to enable routing across pages
    <Router>
      {/* Navbar will be displayed on all pages */}
      <Navbar />
      
      {/* Defining routes for different pages */}
      <Routes>
        {/* When path is "/", show the Home page */}
        <Route path="/" element={<Home />} />
        {/* When path is "/matches", show the Matches page */}
        <Route path="/matches" element={<Matches />} />
        {/* When path is "/roster", show the Roster page */}
        <Route path="/roster" element={<Roster />} />
        {/* When path is "/membership", show the Membership page */}
        <Route path="/membership" element={<Membership />} />
        {/* When path is "/contact", show the Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

// Exporting the App component so it can be used in index.js
export default App;
