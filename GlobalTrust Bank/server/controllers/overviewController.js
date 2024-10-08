const Overview = require('../Models/overviewModel');
const createError = require('../utils/appError');

exports.submitOverview = async (req, res, next) => {
    try {
      const newOverview = await Overview.create(req.body);
      
      res.status(201).json({
        status: 'success',
        message: 'Overview data submitted successfully!',
        data: newOverview,
      });
    } catch (error) {
      console.error('Error in submitOverview:', error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };