import React, { useState } from 'react'; // Import useState here
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Send the email using EmailJS
    emailjs.send(
      'service_ss3wqfi',     // Replace with your EmailJS service ID
      'template_qnfnv0d',    // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'PdTSlGJ0LI-RSMg4K'         // Replace with your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error("There was an error sending the email:", error);
      alert('Failed to send the message. Please try again later.');
    });
  };

  return (
    <div>
      {/* Contact Banner Section */}
      <section className="contact">
        <div className="banner-content">
          <h1>Welcome to Our Service</h1>
          <p>Your journey to excellence starts here.</p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <div className="container">
          <h2>Send Query</h2>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="contact-details">
                <h2>Contact Us</h2>
                <p><strong>Address:</strong> 123 Main Street, Cityville, Country</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> contact@ourcompany.com</p>
                <p><strong>Working Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="contact-form-container">
              <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
              </div>
            </div>

          </div>
        <div className="row">
        <h2>Our Location</h2>
          <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.056722541526!2d144.9630583157488!3d-37.81410797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cee17!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1614530942904!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactForm;
