const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');
//REGISTER USER
exports.signup = async (req,res,next) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(user){
            return next(new createError('User already exists!',400))
        }

        //Salt and Hash the password (by default, it's 10 rounds!!)
        const salt = await bcrypt.genSalt(12); //You can adjust the number to control the salt rounds
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        //JWT (json web token)
        const token = jwt.sign({id: newUser._id}, "secretkey123",{
            expiresIn: '900',
        });

        res.status(201).json({
          status: 'success',
          message: 'User registered successfully!',
          token,
          user: {
              _id: newUser._id,
              name: newUser.name,
              email: newUser.email,
              role: newUser.role,
          }
      });

    } catch (error) {
        next(error);
    }
};

//LOGGING USER
    exports.login = async (req, res, next) => {
        try {
          const { email, password } = req.body;
      
          const user = await User.findOne({ email });
      
          if (!user) return next(new createError('User not found!', 404));
      
          const isPasswordValid = await bcrypt.compare(password, user.password);
      
          if (!isPasswordValid) {
            return next(new createError('Invalid email or password', 401));
          }
          const token = jwt.sign({ id: user._id }, 'secretkey123', {
            expiresIn: '90d',
          });
          
          res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in successfully',
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
          });

        } catch (error) {
            next(error);
        }
      };
