// src/pages/Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';  // We'll create styles here

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

function Home() {
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
    </div>
  );
}

export default Home;
