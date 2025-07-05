import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBookings = () => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';
    fetch(`${apiUrl}/api/bookings`)
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error("Error fetching bookings:", err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDeleteAll = () => {
    if (window.confirm('Are you sure you want to delete ALL bookings? This action cannot be undone.')) {
      setLoading(true);
      const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';
      fetch(`${apiUrl}/api/bookings`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          alert(data.message);
          fetchBookings(); // Refresh the list
        })
        .catch(err => {
          console.error("Error deleting bookings:", err);
          alert('Failed to delete bookings');
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>📋 Bookings</h1>
        <button 
          onClick={handleDeleteAll}
          disabled={loading || bookings.length === 0}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: loading || bookings.length === 0 ? 'not-allowed' : 'pointer',
            opacity: loading || bookings.length === 0 ? 0.6 : 1
          }}
        >
          {loading ? 'Deleting...' : '🗑️ Delete All Bookings'}
        </button>
      </div>
      
      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '18px' }}>No bookings found</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.service}</td>
                <td>{b.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;
