import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Membership.css';

export default function Membership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'Player',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Membership Application - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMembership Type: ${formData.membershipType}\n\nAdditional Message:\n${formData.message}`
    );

    window.location.href = `mailto:bostonethiopiansc@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <motion.section 
      className="membership-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="membership-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Join the Boston Ethiopians Sport Club
      </motion.h1>

      <motion.p 
        className="membership-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Become a part of our community! Fill out the form below to apply for membership.
      </motion.p>

      {!submitted ? (
        <motion.form 
          className="membership-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email Address</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="phone">Phone Number</label>
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />

          <label htmlFor="membershipType">Membership Type</label>
          <select name="membershipType" value={formData.membershipType} onChange={handleChange}>
            <option value="Player">Player</option>
            <option value="Coach">Coach</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Supporter">Supporter</option>
          </select>

          <label htmlFor="message">Additional Message</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} />

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Submit Application
          </motion.button>
        </motion.form>
      ) : (
        <motion.div 
          className="thank-you-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Thank you for your application!</h2>
          <p>We will get back to you soon.</p>
        </motion.div>
      )}
    </motion.section>
  );
}
