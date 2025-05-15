import { Link } from 'react-router-dom';
import './Navbar.css'; // Styling for navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        {/* Logo that links back to home page */}
        <Link to="/">
          <img src="/logo.png" alt="Team Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-links">
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
