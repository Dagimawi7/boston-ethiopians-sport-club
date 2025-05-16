import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="logo-section">
        <Link to="/" aria-label="Home">
          <img src="/logo.png" alt="Team Logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger"></span>
      </button>

      <div
        id="primary-navigation"
        className={`nav-links ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)} // close menu when clicking a link
      >
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/roster">Roster</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
