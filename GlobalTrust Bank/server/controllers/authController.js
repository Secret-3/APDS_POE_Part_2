const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');

// Regex patterns
const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const idNumberRegex = /^\d{13}$/;
const accountNumberRegex = /^\d{11}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]).{8,}$/;

const sanitizeInput = (obj) => {
    const sanitized = {};
    for(let[key, value] of Object.entries(obj)){
        if(typeof value === 'string'){
            value = value.trim();
        }
        if(key === 'idNumber' || key === 'accountNumber'){
            value = value.replace(/\D/g, '');
        }
        if(typeof value === 'string' && value.includes('$')){
            value = value.replace(/\$/g, '');
        }
        if(typeof value === 'string' && value.includes('{')){
            value = value.replace(/{/g, '');
        }
        sanitized[key] = value;
    }
    return sanitized;
}

const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
        errors.push("be at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("include at least one uppercase letter");
    }
    if (!/[!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]/.test(password)) {
        errors.push("include at least one special character");
    }
    return errors;
};

// REGISTER USER
exports.signup = async (req, res, next) => {
    try {
        console.log('Received registration request:', req.body);
        
        const sanitizedInput = sanitizeInput(req.body);
        console.log('Sanitized input:', sanitizedInput);
        
        const { fullName, username, idNumber, accountNumber, password } = sanitizedInput;

        // Prevent admin registration through API
        if (req.body.role === 'admin') {
            return next(new createError('Cannot create admin accounts', 403));
        }

        if (!nameRegex.test(fullName)) {
            console.error('Invalid full name format!');
            return next(new createError('Invalid full name format!', 400));
        }
        if (!usernameRegex.test(username)) {
            console.error('Invalid username format!');
            return next(new createError('Invalid username format!', 400));
        }
        if (!idNumberRegex.test(idNumber)) {
            console.error('ID Number must be exactly 13 digits!');
            return next(new createError('ID Number must be exactly 13 digits!', 400));
        }
        if (!accountNumberRegex.test(accountNumber)) {
            console.error('Account Number must be exactly 11 digits!');
            return next(new createError('Account Number must be exactly 11 digits!', 400));
        }

        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            console.error('Password errors:', passwordErrors);
            return next(new createError(`Password must ${passwordErrors.join(", ")}`, 400));
        }

        const existingUser = await User.findOne({
            $or: [
                { username: username },
                { accountNumber: accountNumber }
            ]
        }).lean();
        
        console.log('Existing user check result:', existingUser);

        if (existingUser) {
            const field = existingUser.username === username ? 'Username' : 'Account Number';
            console.error(`User with this ${field} already exists!`);
            return next(new createError(`User with this ${field} already exists!`, 400));
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('Hashed password:', hashedPassword);

        const newUser = await User.create({
            fullName: fullName,
            username: username,
            idNumber: idNumber,
            accountNumber: accountNumber,
            password: hashedPassword,
            role: 'user'
        });

        console.log('New user created:', newUser);

        const token = jwt.sign(
            { 
                id: newUser._id.toString(),
                role: newUser.role
            }, 
            process.env.JWT_SECRET || "secretkey123", 
            {
                expiresIn: '15m',
                algorithm: 'HS256'
            }
        );

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully!',
            token,
            user: {
                _id: newUser._id,
                username: newUser.username,
                fullName: newUser.fullName,
                role: newUser.role,
            }
        });

    } catch (error) {
        console.error('Signup error:', error.message);
        next(new createError('Registration failed. Please try again.', 500));
    }
};

// LOGIN USER
exports.login = async (req, res, next) => {
    try {
        console.log('Login attempt received:', req.body);
        
        const sanitizedInput = sanitizeInput(req.body);
        console.log('Sanitized input:', sanitizedInput);

        const { username, accountNumber, password } = sanitizedInput;

        // Find user
        const user = await User.findOne({ username, accountNumber });
        console.log('User lookup result:', user ? 'User found' : 'User not found');
        
        if (!user) {
            console.log('Invalid credentials - user not found');
            return next(new createError('Invalid credentials', 401));
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password validation result:', isPasswordValid);
        
        if (!isPasswordValid) {
            console.log('Invalid credentials - password incorrect');
            return next(new createError('Invalid credentials', 401));
        }

        // Create JWT token
        const token = jwt.sign(
            { 
                id: user._id,
                role: user.role 
            },
            process.env.JWT_SECRET || 'secretkey123',
            { expiresIn: '1d' }
        );

        console.log(`User ${user.username} logged in successfully. Role: ${user.role}`);

        // Determine redirect URL based on role
        const redirectUrl = user.role === 'admin' ? '/admin-dashboard' : '/user-dashboard';

        // Send response
        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in successfully',
            user: {
                _id: user._id,
                username: user.username,
                fullName: user.fullName,
                role: user.role
            },
            redirect: redirectUrl
        });

    } catch (error) {
        console.error('Login error:', error);
        next(new createError('Login failed. Please try again.', 500));
    }
};