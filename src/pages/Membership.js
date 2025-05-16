import React, { useState } from 'react';
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

    // Prepare mailto link
    const subject = encodeURIComponent(`Membership Application - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Membership Type: ${formData.membershipType}\n\n` +
      `Additional Message:\n${formData.message}`
    );

    // Open default email client
    window.location.href = `mailto: bostonethiopiansc@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    // Optionally clear the form or keep data
  };

  return (
    <section className="membership-container">
      <h1 className="membership-title">Join the Boston Ethiopians Sport Club</h1>
      <p className="membership-intro">
        Become a part of our community! Fill out the form below to apply for membership.
      </p>

      {!submitted ? (
        <form className="membership-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(Optional)"
          />

          <label htmlFor="membershipType">Membership Type</label>
          <select
            id="membershipType"
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
          >
            <option value="Player">Player</option>
            <option value="Coach">Coach</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Supporter">Supporter</option>
          </select>

          <label htmlFor="message">Additional Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about you..."
          />

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank you for your application!</h2>
          <p>We will get back to you soon.</p>
        </div>
      )}
    </section>
  );
}
