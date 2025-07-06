import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import ViewBookings from './pages/ViewBookings';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Book Appointment</Link>
        <Link to="/view" style={{ marginRight: '1rem' }}>View Bookings</Link>
        <Link to="/admin" style={{ marginRight: '1rem' }}>Admin Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/view" element={<ViewBookings />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
