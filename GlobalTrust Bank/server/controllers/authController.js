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
        const hashedPassword = await bcrypt.hash(req.body.password,12);
    
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
            message,
            token,
        });

    } catch (error) {
        next(error);
    }
};

//LOGGING USER
exports.login = async (req,res,next) => {};
