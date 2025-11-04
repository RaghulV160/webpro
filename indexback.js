// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routers
const userRouter = require('./routes/userRouter');
const subscriptionRouter = require('./routes/subscriptionRouter');

// Express app instance
const app = express();
app.use(express.json());

// Enable CORS
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'auth-token', 'x-auth-token'],
};
app.use(cors(corsOptions));

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/subscriptiondb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Use Routers
app.use('/user', userRouter);
app.use('/subscription', subscriptionRouter);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
