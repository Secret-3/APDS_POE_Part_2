const https = require('http');
const fs = require('fs');
const overviewRouter = require('./routes/overviewRoutes');
    
    const express = require('express');
   const mongoose = require('mongoose');


   const PORT = 3000;
   const cors = require('cors');
   const app = express();
   const authRouter = require('./routes/authRoutes');

const server = https.createServer({
  key: fs.readFileSync('keys/privatekey.pem') ,
  cert: fs.readFileSync('keys/certificate.pem')
},app);


   // 1) MIDDLEWARES
   app.use(cors({ origin: 'http://localhost:5173' }));   
   app.use(express.json());
   app.use('/api/overview', overviewRouter);


   // 2) ROUTES
   app.use('/api/auth', authRouter);

   // 3) MONGODB CONNECTION
   mongoose
     .connect('mongodb://127.0.0.1:27017/authentication')
     .then(() => console.log('Connected to MongoDB'))
     .catch((error) => console.error('Failed to connect to MongoDB:', error));

     app.use((req,res,next)=>
     {
         res.setHeader("Access-Control-Allow-Origin","*");
         res.setHeader("Access-Control-Allow-Headers","*");
         res.setHeader("Access-Control-Allow-Methods","*");
         next();
     })


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
   server.listen(PORT, () => {
     console.log(`App running on port ${PORT}`);
   });