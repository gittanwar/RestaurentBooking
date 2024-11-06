// app.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Superuser = require('./models/Superuser'); // Import the superuser model

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB (already configured in your previous setup)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Endpoint to create a superuser (run this only once)
app.post('/api/create-superuser', async (req, res) => {
  const { username, password } = req.body;

  // Check if superuser already exists
  const existingSuperuser = await Superuser.findOne({ username });
  if (existingSuperuser) {
    return res.status(400).json({ message: 'Superuser already exists' });
  }

  // Create and save new superuser
  const superuser = new Superuser({ username, password });
  await superuser.save();

  res.status(201).json({ message: 'Superuser created successfully' });
});

// Endpoint to login superuser
app.post('/api/superuser-login', async (req, res) => {
  const { username, password } = req.body;
  const superuser = await Superuser.findOne({ username });

  if (!superuser || !(await bcrypt.compare(password, superuser.password))) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: superuser._id, role: superuser.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ message: 'Login successful', token });
});

// Middleware to authenticate superuser
const authenticateSuperuser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Example of a protected route
app.get('/api/admin-data', authenticateSuperuser, (req, res) => {
  if (req.user.role === 'admin') {
    res.json({ message: 'Welcome, superuser!', data: { /* secure data here */ } });
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
