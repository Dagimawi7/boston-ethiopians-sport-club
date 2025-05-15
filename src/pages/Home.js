// src/pages/Home.js
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const images = [
    '/homeposters/sgallery.jpg',
    '/images/pic2.jpg',
    '/images/pic3.jpg',
    '/images/pic4.jpg',
    '/images/pic5.jpg',
    '/images/pic6.jpg',
    '/images/pic7.jpg',
    '/images/pic8.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    // Class for club info 
    <div className="home-container">
      <h1 className="club-name">Boston Ethiopians Sport Club</h1>
      <p className="club-info">
        Uniting our community through sports and camaraderie<br />
        Welcome to the Boston Ethiopians Sport Club!
      </p>

      <div className="slider-wrapper">
        <Slider {...settings}>
          {images.map((imgSrc, idx) => (
            <div key={idx}>
              <img src={imgSrc} alt={`Slide ${idx + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      <section className="game-schedule">
        <h2 className="schedule-title">Boston Game Schedule - ESFNA 2025</h2>

        {[
          {
            opponent: 'Houston',
            logo: '/images/houston.png',
            date: 'Sunday, June 29 • 3:00 PM',
            field: 'Field 2',
          },
          {
            opponent: 'Maryland',
            logo: '/images/maryland.png',
            date: 'Tuesday, July 1 • 4:30 PM',
            field: 'Field 1',
          },
          {
            opponent: 'Saint Michael',
            logo: '/images/saint-michael.png',
            date: 'Wednesday, July 2 • 6:00 PM',
            field: 'Field 1',
          },
        ].map((match, i) => (
          <div
            key={i}
            className="match-card interactive"
            data-aos="fade-up"
            onClick={() => alert(`Match vs ${match.opponent}`)}
          >
            <div className="team">
              <img src="/logo.png" alt="Boston Logo" />
              <p>Boston</p>
            </div>
            <p className="vs">vs</p>
            <div className="team">
              <img src={match.logo} alt={`${match.opponent} Logo`} />
              <p>{match.opponent}</p>
            </div>
            <div className="match-info">
              <p>{match.date}</p>
              <p>{match.field}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="about-history">
            <h2>All About Boston Ethiopians Soccer Club</h2>
            <h3>Our History</h3>
            <p>
                The Boston Ethiopian Sports Club is a non-profit, tax-exempt organization founded in 1976 to promote amateur soccer and cultural events within the Ethiopian community in the Boston and surrounding area.
            </p>
            <p>
                Its goals include providing positive role models for the youth, promoting goodwill between the Ethiopian communities in Boston and creating a bridge where people from Ethiopia and North America can interact in a mutually beneficial manner.
            </p>
            <p>
                In addition to the sports event, the club also promotes cultural activities to provide opportunities for Americans to learn more about Ethiopia's culture and history.
            </p>
        </section>

        <section className="who-we-are">
            <h2>Who We Are</h2>
            <p>
                The Boston Ethiopians Sport Club (BESC) is a community-centered nonprofit that organizes sporting events, recreational activities, and fitness programs for all ages. Our mission is to unite Ethiopians in Boston through the power of sports and to create a platform for community engagement and personal growth.
            </p>

            <h3>Our Goals:</h3>
            <ul>
                <li>Promote a healthy lifestyle.</li>
                <li>Build a stronger Ethiopian community.</li>
                <li>Get both youth and adults involved in sports.</li>
            </ul>
        </section>

        <section className="what-we-offer">
            <h2>What We Offer</h2>
            <p>We organize and host various activities.</p>

            <ul>
                <li><strong>Soccer Leagues:</strong> Regular games and big tournaments.</li>
                <li><strong>Kids Soccer Programs:</strong> Camps and mentoring for young players.</li>
            </ul>
        </section>

        <section className="join-us">
            <h2>Join Us!</h2>
            <p>
                Whether you're an athlete, a volunteer, or a supporter, there's a place for you in the Boston Ethiopians Sport Club.
            </p>

            <h3>Ways to participate:</h3>
            <ul>
                <li>Play in games and tournaments.</li>
                <li>Help out by volunteering.</li>
                <li>
                Donate to support the club's goals.
                {/* Donation email */}
                <div className="donation-email">Email: bostonethiopiansc@gmail.com</div>

                {/* QR Codes container */}
                <div className="qr-codes">
                    <div className="qr-code tooltip">
                        <img src="/zelle-qr.png" alt="Zelle QR Code" />
                        <span className="tooltiptext">Scan to donate via Zelle</span>
                        <p>Zelle</p>
                    </div>

                    <div className="qr-code tooltip">
                        <img src="/cashapp-qr.png" alt="CashApp QR Code" />
                        <span className="tooltiptext">Scan to donate via CashApp</span>
                        <p>CashApp</p>
                    </div>
                </div>

                </li>
            </ul>

            <Link to="/membership" className="join-button">
                Sign Up Now
            </Link>
        </section>

        <section className="sponsors-section">
            <h2>Our Sponsors</h2>
            <p className="sponsor-thankyou">Special thanks to our sponsors for supporting us!</p>

            <div className="sponsor-grid">
                <div className="sponsor-card">
                <a href="https://www.habeshamalden.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/sponsors/habesha.png" alt="HABESHA Restaurant" />
                </a>
                <h3>HABESHA Ethiopian Restaurant</h3>
                <p>Located in Malden</p>
                </div>

                <div className="sponsor-card">
                <a href="https://southendfoodemporium.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/sponsors/southend.png" alt="South End Food Emporium" />
                </a>
                <h3>South End Food Emporium</h3>
                </div>
            </div>

            <div className="become-sponsor">
                <p>Interested in supporting the Boston Ethiopians Sport Club?</p>
                <a href="/contact" className="sponsor-button">Become a Sponsor</a>
            </div>
        </section>





    </div>
    
  );
};

export default Home;
