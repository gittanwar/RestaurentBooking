// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import FAQ from './FAQ';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  // State to track admin authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* Header, which will appear on all pages */}
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bookingform" element={<BookingForm />} />
        
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/admin" />
          }
        />
      </Routes>
      {/* Footer, which will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
