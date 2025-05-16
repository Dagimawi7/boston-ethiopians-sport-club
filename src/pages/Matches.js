import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 🆕 Framer Motion
import './Matches.css';  // <-- updated path

const AccordionSection = ({ title, children, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-section">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '−' : '+'}</span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="accordion-content"
          >
            {image && (
              <motion.img
                src={image}
                alt={`${title} visual`}
                className="accordion-image"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Tournaments() {
  return (
    <div className="tournaments">
      <AccordionSection
        title="Adult Tournament"
        image="/images/summer-league.jpg"
      >
        <h3>Gesla Summer League</h3>
        <p>Every Sunday From March 30 to Winter 2026, 10:30am – 1:30pm at Russell Field</p>
        <button className="btn-directions" onClick={() => window.open('https://maps.google.com', '_blank')}>
          Get Directions
        </button>

        {/* Boston Team vs Boston Team images below Gesla Summer League */}
        <div className="team-vs-team-images">
          <div className="team-image">
            <img src="/images/boston-team1.jpg" alt="Boston Team 1" />
            <p>Boston Team 1</p>
          </div>
          <div className="vs-text">vs</div>
          <div className="team-image">
            <img src="/images/boston-team2.jpg" alt="Boston Team 2" />
            <p>Boston Team 2</p>
          </div>
        </div>

        <h3>Boston Ethiopians Mini Tournament</h3>
        <p>Summer 2025 — “Community, Culture, and Competition” – The Boston Ethiopians Mini Tournament returns this summer, bringing the community together through the love of soccer.</p>
        <div className="poster-grid">
          <img src="/images/poster1.jpg" alt="Mini Tournament Poster 1" />
          <img src="/images/poster2.jpg" alt="Mini Tournament Poster 2" />
          <img src="/images/poster3.jpg" alt="Mini Tournament Poster 3" />
        </div>

        <h3>ESFNA Championship</h3>
        <p>June 28 – July 5, 2025 — Seattle named host city for ESFNA’s 42nd Annual Soccer and Cultural Tournament.</p>
        <img src="/images/esfna.jpg" alt="ESFNA Poster" className="esfna-image" />

        {/* Team Groupings */}
        <h4>Team Groupings for ESFNA 2025</h4>
        <p>Details on teams competing this year.</p>
        <div className="team-groupings-images">
          <img src="/images/team-group1.jpg" alt="Team Grouping 1" />
          <img src="/images/team-group2.jpg" alt="Team Grouping 2" />
          <img src="/images/team-group3.jpg" alt="Team Grouping 3" />
        </div>

        {/* Game Schedule */}
        <h4>Game Schedule for ESFNA 2025</h4>
        <p>Check out the full schedule of games below.</p>
        <div className="game-schedule-images">
          <img src="/images/game-schedule1.jpg" alt="Game Schedule 1" />
          <img src="/images/game-schedule2.jpg" alt="Game Schedule 2" />
          <img src="/images/game-schedule3.jpg" alt="Game Schedule 3" />
        </div>
      </AccordionSection>

      <AccordionSection
        title="Events"
        image="/images/mini-tournament.jpg"
      >
        <p>Community events, cultural showcases, and social nights throughout the year. More info coming soon!</p>
      </AccordionSection>

      <AccordionSection
        title="Kids Section"
        image="/images/kids-program.jpg"
      >
        <p>We run mentorship programs and soccer clinics for kids. Our summer youth camp helps develop both soccer and leadership skills.</p>

        <div className="soccer-for-kids">
          <h3>SOCCER FOR KIDS</h3>
          <p className="powered-by">Powered by</p>
          <h4>BOSTON ETHIOPIAN<br />SPORT CLUB</h4>

          <img 
            src="/images/kids-poster.jpg" 
            alt="Soccer for Kids Poster" 
            className="kids-poster" 
          />

          <div className="kids-info">
            <p><strong>AGES 5–17</strong></p>
            <p>DANEHY PARK,<br />CAMBRIDGE</p>
            <p><strong>START DATE</strong></p>
            <p>JUNE 21, 2025</p>
            <p>10:00 AM – 12:00 PM</p>
            <p>Email us – <a href="mailto:bostonethiopiansc@gmail.com">bostonethiopiansc@gmail.com</a></p>
          </div>

          <div className="download-forms">
            <h4>Download Forms</h4>
            <p>Download the required forms, fill them out, and submit them via email.</p>
            <div className="form-buttons">
              <a href="/documents/waiver.pdf" download className="form-btn">
                📄 Download Waiver AND RELEASE OF LIABILITY AGREEMENT
              </a>
              <a href="/documents/player-contact-info.pdf" download className="form-btn">
                📄 Download PLAYER CONTACT INFORMATION FORM
              </a>
              <a href="mailto:bostonethiopiansc@gmail.com" className="form-btn email-btn">
                📧 Email Completed Forms
              </a>
            </div>
          </div>
        </div>
      </AccordionSection>
    </div>
  );
}
