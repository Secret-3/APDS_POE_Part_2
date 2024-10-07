const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors'); // Import CORS
   const app = express();
   const authRouter = require('./routes/authRoutes');

   // 1) MIDDLEWARES
   app.use(cors({ origin: 'http://localhost:5173' })); // Match this with your frontend's origin
   app.use(express.json());

   // 2) ROUTES
   app.use('/api/auth', authRouter);

   // 3) MONGODB CONNECTION
   mongoose
     .connect('mongodb://127.0.0.1:27017/authentication')
     .then(() => console.log('Connected to MongoDB'))
     .catch((error) => console.error('Failed to connect to MongoDB:', error));

   // 4) GLOBAL ERROR HANDLER
   app.use((err, req, res, next) => {
     err.statusCode = err.statusCode || 500;
     err.status = err.status || 'error';

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