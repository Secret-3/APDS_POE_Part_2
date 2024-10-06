const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// 1) MIDDLEWARES
app.use(cors()); // cors needs to be invoked as a function
app.use(express.json());

// 2) ROUTES
// Add your routes here

// 3) MONGODB CONNECTION
mongoose
  .connect('mongodb://127.0.0.1:27017/authentication')
  .then(() => console.log('Connected to MongoDB')) // Removed the error reference
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// 4) GLOBAL ERROR HANDLER
// Add your error handler here
app.use((err,res,req,next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || error;

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// 5) SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});