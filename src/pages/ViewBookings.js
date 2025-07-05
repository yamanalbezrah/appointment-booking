import React, { useEffect, useState } from 'react';

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  const formatDateTime = (dateTimeString) => {
    try {
      const date = new Date(dateTimeString);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      return dateTimeString; // fallback to original if parsing fails
    }
  };

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';
    fetch(`${apiUrl}/api/bookings`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📋 All Appointments</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((b, index) => (
            <li key={index}>
              <strong>{b.name}</strong> — {b.email} — {b.service} — {formatDateTime(b.time)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewBookings;
