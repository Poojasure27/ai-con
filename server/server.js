// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for user data (replace with a database in a real-world scenario)
let users = [];

// Route to handle login requests
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Check if the email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Simulate saving user data (replace with database logic)
  users.push({ email, password });
  
  // Return a success message
  res.json({ message: 'User logged in successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
