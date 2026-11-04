require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const reviewsRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true
  })
);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- Database connection (cached so it works on Vercel) ----
let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error('MONGODB_URI is not set');
  }
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 10000,
        maxPoolSize: 5
      })
      .then((m) => m);
  }
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    cached.conn = null;
    throw err;
  }
  return cached.conn;
}

// Health Check Endpoint (tries to connect and shows the real error if it fails)
app.get('/api/health', async (req, res) => {
  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  try {
    await connectDB();
    res.status(200).json({
      status: 'ok',
      service: 'Kozhihood Restaurant Backend API',
      database: dbStatusMap[mongoose.connection.readyState] || 'unknown',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('DB connection failed:', err.name, err.message);
    res.status(500).json({
      status: 'error',
      database: 'failed',
      errorName: err.name,
      errorMessage: err.message
    });
  }
});

// Make sure the database is connected before any other API route runs
app.use('/api', async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('DB connection failed:', err.name, err.message);
    res.status(503).json({
      success: false,
      message: 'Database connection failed. Please try again.'
    });
  }
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

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: messages
    });
  }

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

// Only start a listening server on your laptop, not on Vercel
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Kozhihood Server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

module.exports = app;