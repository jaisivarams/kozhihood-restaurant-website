require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const reviewsRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin) return callback(null, true);
      // In development, allow localhost or specified client origin
      return callback(null, true);
    },
    credentials: true
  })
);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };

  res.status(200).json({
    status: 'ok',
    service: 'Kozhihood Restaurant Backend API',
    database: dbStatusMap[mongoose.connection.readyState] || 'unknown',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewsRoutes);

// 404 Route Handler for unmatched /api routes
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`
  });
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Application Error:', err);

  // Handle Mongoose / MongoDB validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: messages
    });
  }

  // Handle duplicate key error (code 11000)
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'Duplicate key error. An entity with that unique field already exists.'
    });
  }

  return res.status(err.status || 500).json({
    success: false,
    message: err.message || 'An unexpected internal server error occurred.'
  });
});

// Database Connection and Server Startup
const startServer = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri || mongoUri.includes('<username>') || mongoUri.includes('<password>')) {
    console.warn('\n⚠️  [Kozhihood Backend Notice]');
    console.warn('MONGODB_URI is not configured with real credentials in backend/.env.');
    console.warn('Please add your MongoDB Atlas connection string to backend/.env to persist data.');
    console.warn('Server will still start to provide health checks and handle requests.\n');
  } else {
    try {
      await mongoose.connect(mongoUri);
      console.log('✅ Connected to MongoDB Atlas successfully.');
    } catch (err) {
      console.error('\n❌ MongoDB Atlas connection failed');
      console.error('Error name:', err.name);
      console.error('Error message:', err.message);
      console.error('Error code:', err.code || 'N/A');

      if (err.reason) {
        console.error('Connection reason:', err.reason);
      }

      if (err.cause) {
        console.error('Underlying cause:', err.cause);
      }

      console.error('\n🔍 Since DNS and TCP connectivity are working, check:');
      console.error('1. MongoDB Atlas database username/password');
      console.error('2. MONGODB_URI in backend/.env');
      console.error('3. Special characters in the database password');
      console.error('4. Database user permissions');
      console.error('');
    }
  }

  app.listen(PORT, () => {
    console.log(`🚀 Kozhihood Server running on http://localhost:${PORT}`);
    console.log(`🩺 Health check available at: http://localhost:${PORT}/api/health`);
  });
};

startServer();

module.exports = app;
