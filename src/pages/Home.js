// src/pages/Home.js
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    </div>
  );
};

export default Home;
