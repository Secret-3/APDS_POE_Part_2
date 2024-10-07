const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');

// Define regex patterns
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]).{8,}$/; // Password must have at least 8 characters, 1 upper, 1 lower, 1 digit, 1 special char

// REGISTER USER
exports.signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate email
        if (!emailRegex.test(email)) {
            return next(new createError('Invalid email format!', 400));
        }

        // Validate password
        if (!passwordRegex.test(password)) {
            return next(new createError('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.', 400));
        }

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return next(new createError('User already exists!', 400));
        }

        // Salt and Hash the password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        // JWT
        const token = jwt.sign({ id: newUser._id }, "secretkey123", {
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

// LOGGING USER
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate email
        if (!emailRegex.test(email)) {
            return next(new createError('Invalid email format!', 400));
        }

        // Validate password
        if (!passwordRegex.test(password)) {
            return next(new createError('Invalid password format!', 400));
        }

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
