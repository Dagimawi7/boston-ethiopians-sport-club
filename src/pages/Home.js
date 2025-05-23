
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

//  Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className="slick-arrow next" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </div>
);


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const images = [
    '/homeposters/sgallery.jpg',
    '/homeposters/image0.jpeg',
    '/homeposters/image1.jpeg',
    '/homeposters/image2.jpeg',
    '/homeposters/image3.jpeg',
    '/homeposters/image4.jpeg',
    '/homeposters/image5.jpeg',
    '/Matchpost/Junetournament.jpg',
    '/Matchpost/kidsposter.jpeg',
    '/Matchpost/sendoff.jpeg',
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="club-name"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Boston Ethiopians Sport Club
      </motion.h1>

      <motion.p
        className="club-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Uniting our community through sports and camaraderie<br />
        Welcome to the Boston Ethiopians Sport Club!
      </motion.p>

      <motion.div
        className="slider-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Slider {...settings}>
          {images.map((imgSrc, idx) => (
            <div key={idx}>
              <img src={imgSrc} alt={`Slide ${idx + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Game Schedule */}
      <motion.section
        className="game-schedule"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="schedule-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Boston Game Schedule - ESFNA 2025
        </motion.h2>

        {[
          {
            opponent: 'Houston',
            logo: 'teamlogo/houston.webp',
            date: 'Sunday, June 29 • 3:00 PM',
            field: 'Field 2',
          },
          {
            opponent: 'Maryland',
            logo: 'teamlogo/maryland.jpeg',
            date: 'Tuesday, July 1 • 4:30 PM',
            field: 'Field 1',
          },
          {
            opponent: 'Saint Michael',
            logo: 'teamlogo/saint.jpg',
            date: 'Wednesday, July 2 • 6:00 PM',
            field: 'Field 1',
          },
        ].map((match, i) => (
          <motion.div
            key={i}
            className="match-card interactive"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            onClick={() => {}}
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
          </motion.div>
        ))}
      </motion.section>

      {/* Content Sections */}
      {[
        {
          className: 'about-history',
          title: 'All About Boston Ethiopians Soccer Club',
          subTitle: 'Our History',
          content: [
            'The Boston Ethiopian Sports Club is a non-profit, tax-exempt organization founded in 1976 to promote amateur soccer and cultural events within the Ethiopian community in the Boston and surrounding area.',
            'Its goals include providing positive role models for the youth, promoting goodwill between the Ethiopian communities in Boston and creating a bridge where people from Ethiopia and North America can interact in a mutually beneficial manner.',
            'In addition to the sports event, the club also promotes cultural activities to provide opportunities for Americans to learn more about Ethiopia\'s culture and history.',
          ],          
        },
        {
          className: 'who-we-are',
          title: 'Who We Are',
          content: [
            'Who We Are',
            'The Boston Ethiopians Sport Club (BESC) is a community-centered nonprofit that organizes sporting events, recreational activities, and fitness programs for all ages. Our mission is to unite Ethiopians in Boston through the power of sports and to create a platform for community engagement and personal growth.',
            'Our Goals:',
          ],
          list: [
            'Promote a healthy lifestyle.',
            'Build a stronger Ethiopian community.',
            'Get both youth and adults involved in sports.',
          ],          
        },
        {
          className: 'what-we-offer',
          title: 'What We Offer',
          content: ['We organize and host various activities.'],
          list: [
            'Soccer Leagues: Regular games and big tournaments.',
            'Kids Soccer Programs: Camps and mentoring for young players.',
          ],
        },
      ].map((section, idx) => (
        <motion.section
          key={idx}
          className={section.className}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
        >
          <h2>{section.title}</h2>
          {section.subTitle && <h3>{section.subTitle}</h3>}
          {section.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, i) => (
                <li key={i}>
                  <strong>{item.split(':')[0]}</strong>
                  {item.includes(':') ? `: ${item.split(':')[1]}` : ''}
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      ))}

      {/* Join Us */}
      <motion.section
  className="join-us"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  <h2>Join Us!</h2>
  <p>
    Whether you're an athlete, a volunteer, or a supporter, there's a place for you in the Boston Ethiopians Sport Club.
  </p>

  <h3>Ways to participate:</h3>
  <ul>
    <li>Play in games and tournaments.</li>
    <li>Help out by volunteering.</li>
    <li>
      Join our membership and pay your dues here:
      <div className="donation-email">Email: bostonethiopiansc@gmail.com</div>
      <motion.div whileHover={{ scale: 1.05 }} className="membership-link">
        <a
          href="https://www.zeffy.com/en-US/ticketing/812cffd3-ac45-4dcb-9322-7ad5cc225093"
          className="join-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pay Membership
        </a>
      </motion.div>
    </li>
  </ul>
</motion.section>


    {/* Sponsors */}
      <motion.section
        className="sponsors-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Sponsors</h2>
        <p className="sponsor-thankyou">Special thanks to our sponsors for supporting us!</p>

        <div className="sponsor-grid">
          {[
            {
              name: 'HABESHA Ethiopian Restaurant',
              link: 'https://habeshama.com/',
              img: '/sponsors/sponsor1.png',
              location: 'Located in Malden',
            },
            {
              name: 'South End Food Emporium',
              link: 'https://thesouthendfoodemporium.com/',
              img: '/sponsors/sponsor2.png',
              location: 'Located in WEBSTUDIO BOSTON',
            },
          ].map((sponsor, i) => (
            <motion.div
              key={i}
              className="sponsor-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.img} alt={sponsor.name} />
              </a>
              <h3>{sponsor.name}</h3>
              {sponsor.location && <p>{sponsor.location}</p>}
            </motion.div>
          ))}
        </div>

        <div className="become-sponsor">
          <p>Interested in supporting the Boston Ethiopians Sport Club?</p>
          <Link to="/contact" className="sponsor-button">
            Become a Sponsor
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
