import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Contact Us
      </motion.h2>
      <p className="contact-subtitle">We’d love to hear from you!</p>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>📍 Location</h3>
          <p>Boston, MA</p>
          <h3>📧 Email</h3>
          <p><a href="mailto:bostonethiopiansc@gmail.com">bostonethiopiansc@gmail.com</a></p>
          <h3>📞 Phone</h3>
          <p><a href="tel:7816081880">(781)-608-1880</a></p>
          <h3>Follow Us</h3>
          <p>
            Facebook: <a href="https://www.facebook.com/BostonEthiopiansSC" target="_blank" rel="noreferrer">Boston Ethiopians SC</a><br />
            Instagram: <a href="https://www.instagram.com/BostonEthiopiansSC" target="_blank" rel="noreferrer">@BostonEthiopiansSC</a>
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          </div>
          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
          <textarea name="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </motion.form>
      </div>
    </motion.div>
  );
}
