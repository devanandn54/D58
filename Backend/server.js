const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const statsRoutes = require('./routes/stats');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stats', statsRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`D58 Server running on ${PORT}`);
});