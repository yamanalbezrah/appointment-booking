import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';
      const response = await fetch(`${apiUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("✅ Server response:", result);
      setSubmitted(true);
    } catch (error) {
      console.error("❌ Error booking appointment:", error);
      alert("Something went wrong.");
    }
  };

  const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ color: 'green' }}>✅ Appointment booked!</h2>
        <button onClick={() => navigate('/view')}>View Bookings</button>
      </div>
    );
  }

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '500px',
      margin: '2rem auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ textAlign: 'center' }}>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Service:</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Choose a service</option>
          <option value="haircut">Haircut</option>
          <option value="consultation">Consultation</option>
        </select>

        <label>Date & Time:</label>
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <button type="submit" style={{ ...inputStyle, background: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
