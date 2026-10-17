import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${menuOpen ? 'menu-open' : ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Logo stays at the top-left */}
      <div className="logo-section">
        <Link to="/" aria-label="Home" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Team Logo"
            className="logo"
          />
        </Link>
      </div>

      {/* Hamburger becomes an X when the menu is open */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className="hamburger" />
      </button>

      {/* Navigation links */}
      <div
        id="primary-navigation"
        className={`nav-links ${menuOpen ? 'active' : ''}`}
      >
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/matches" onClick={closeMenu}>Matches/Events</Link>
        <Link to="/roster" onClick={closeMenu}>Roster</Link>
        <Link to="/membership" onClick={closeMenu}>Membership</Link>
        <Link to="/Gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;