// components/Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:3000/bookings");
      const data = await response.json();
      setBookings(data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booked Tables</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Person Type</th>
            <th>Seats</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.location}</td>
              <td>{booking.personType}</td>
              <td>{booking.seats}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
