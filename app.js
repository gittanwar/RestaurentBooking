// app.js
const express = require('express');
const connectDB = require('./backend/config/db'); // Import database connection (create config/db.js separately)

const app = express();

// Connect to database
connectDB();

// Define a test route
app.get('/', (req, res) => res.send('API Running'));

// Set the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
