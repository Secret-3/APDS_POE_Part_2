// C:\Users\Sauraav\Desktop\new_poe\GlobalTrust Bank\server\index.js

const https = require('https');
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const overviewRouter = require('./routes/overviewRoutes');
const authRouter = require('./routes/authRoutes');
const initializeAdmin = require('./utils/initAdmin');

const PORT = 3000;
const app = express();

// Create HTTPS server
const server = https.createServer({
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
}, app);

// CORS Configuration
app.use(cors({ 
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'X-Requested-With', 
        'Accept', 
        'Origin'
    ]
}));   

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security headers middleware
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});

// API Routes
app.use('/api/overview', overviewRouter);
app.use('/api/auth', authRouter);

// Remove the duplicate CORS headers since we're using the cors middleware
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     res.setHeader("Access-Control-Allow-Methods", "*");
//     next();
// });

// MongoDB Connection and Admin Initialization
mongoose
    .connect('mongodb://127.0.0.1:27017/authentication', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    })
    .then(async () => {
        console.log('Connected to MongoDB');
        await initializeAdmin(); // Initialize admin account after connection
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit process with failure
    });

// Handle MongoDB connection errors after initial connection
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Process handling
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    } catch (err) {
        console.error('Error during app termination:', err);
        process.exit(1);
    }
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err);

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// Handle 404 routes
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

// Server
server.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});