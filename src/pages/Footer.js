import React from 'react';
import './Footer.css';  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-name">Dagimawi Tamrat</h2>
      <p className="footer-text">Feel free to reach out to me on LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/dagimawi-tamrat/?profileId=ACoAADcxzYkB8S2c-lgandXW1TCOEctic8VoK0I"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Connect on LinkedIn
      </a>
      <p className="footer-copy">&copy; 2025 Dagimawi Tamrat. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
