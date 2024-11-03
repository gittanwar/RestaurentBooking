const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Booking = require('./Booking'); // Import the Booking model

app.post('/book-table', async (req, res) => {
  const { location, personType, seats } = req.body;

  // Create a new booking instance
  const newBooking = new Booking({
    location,
    personType,
    seats,
  });

  try {
    await newBooking.save(); // Save the booking to the database
    res.status(201).json({ success: true, message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ success: false, message: 'Failed to create booking' });
  }
});

app.use(cors());
app.use(bodyParser.json());

let superuser = null;

// Function to create a superuser if not already created
const initializeSuperuser = async () => {
  const username = process.env.ADMIN_USERNAME;
  const plainPassword = process.env.ADMIN_PASSWORD;

  // Hash the password and store it
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  superuser = { username, password: hashedPassword };
};

// Call this function to initialize superuser when server starts
initializeSuperuser().then(() => console.log("Superuser initialized."));

// Admin login route
app.post("/admin-login", async (req, res) => {
  const { username, password } = req.body;

  if (superuser && username === superuser.username) {
    const isMatch = await bcrypt.compare(password, superuser.password);
    if (isMatch) {
      return res.json({ success: true });
    }
  }
  res.status(401).json({ success: false, message: "Invalid credentials" });
});

// POST route for sending emails
app.post("/send-email", (req, res) => {
  const { location, personType, seats } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email from .env
      pass: process.env.EMAIL_PASS, // Your email password or app password from .env
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: process.env.EMAIL_USER, // Admin email
    subject: "New Table Booking Request",
    text: `Location: ${location}\nPerson Type: ${personType}\nSeats: ${seats}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email: " + error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

// Route to retrieve bookings (dummy data)
app.get("/bookings", (req, res) => {
  const bookings = [
    { location: "Indoor", personType: "Family", seats: 4, date: Date.now() },
    { location: "Outdoor", personType: "Couple", seats: 2, date: Date.now() },
  ];
  res.json(bookings);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
