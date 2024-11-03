import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="row">
            {/* About Section */}
            <div className="col-md-4 col-12">
              <h4>About Us</h4>
              <p>
                We are dedicated to providing the best service and support to our customers. 
                Our mission is to offer quality products and services that meet your needs.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 col-12">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/faq">FAQs</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-md-4 col-12">
              <h4>Contact Us</h4>
              <p><strong>Address:</strong> 123 Main Street, Cityville, Country</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> support@ourcompany.com</p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
