import React, { useEffect, useState } from 'react';

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

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
              <strong>{b.name}</strong> — {b.email} — {b.service} — {b.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewBookings;
