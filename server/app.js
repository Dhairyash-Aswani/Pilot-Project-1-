const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import the new user management routes
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Existing auth routes
app.use('/api/auth', require('./routes/authRoutes'));

// ✅ FIX: Change the base route to '/api/users' 
// The routes inside userRoutes.js (which currently has '/users' and '/users') 
// will now become /api/users/users. This is confusing.

// Let's stick to the cleanest path structure (Option B is better)

// We will use Option B below. No change here.
app.use('/api', userRoutes); 

module.exports = app;
