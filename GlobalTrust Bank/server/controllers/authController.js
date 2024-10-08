const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');

// Defined egex patterns
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]).{8,}$/; // Password must have at least 8 characters, 1 upper, 1 lower, 1 digit, 1 special char
const idNumberRegex = /^\d{13}$/; //The id number should contain exactly 13 digits
const accountNumberRegex = /^\d{11}$/; //The account number should contain exactly 11 digits


//Implementing input sanitization---> ensuring protection against NoSQL injection attacks
const sanitizeInput = (obj) => {
    const sanitized = {};
    for(let[key, value] of Object.entries(obj)){
        //Convert the value to string and then trim it.
        if(typeof value ==='string'){
            value = value.trim();
        }

        //This is for ID and Account numbers, removing any non-digit characters
        if(key ==='idNumber' || key ==='accountNumber'){
            value = value.replace(/\D/g,'');
        }

        //Escape special characters and prevent MongoDB operator injection
        if(typeof value ==='string' && value.includes('$')){
            value = value.replace(/\$/g,'');
        }
        if(typeof value ==='string' && value.includes('{')){
            value = value.replace(/{/g,'');
        }

        sanitized[key] = value;
    }
    return sanitized;
}

//Helper function to validate the password
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
        // Sanitize input
        const sanitizedInput = sanitizeInput(req.body);
        const { fullName, username, idNumber, accountNumber, password } = sanitizedInput;

        // Validate all inputs
        if (!nameRegex.test(fullName)) {
            return next(new createError('Invalid full name format!', 400));
        }
        if (!usernameRegex.test(username)) {
            return next(new createError('Invalid username format!', 400));
        }
        if (!idNumberRegex.test(idNumber)) {
            return next(new createError('ID Number must be exactly 13 digits!', 400));
        }
        if (!accountNumberRegex.test(accountNumber)) {
            return next(new createError('Account Number must be exactly 11 digits!', 400));
        }

        // Detailed password validation
        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            return next(new createError(`Password must ${passwordErrors.join(", ")}`, 400));
        }

        // Use strict equality checking for existing user
        const existingUser = await User.findOne({
            $or: [
                { idNumber: idNumber },
                { accountNumber: accountNumber }
            ],
            _id: { $exists: true }
        }).lean();
        
        if (existingUser) {
            const field = existingUser.idNumber === idNumber ? 'ID Number' : 'Account Number';
            return next(new createError(`User with this ${field} already exists!`, 400));
        }

        // Salt and Hash the password with a cost factor of 12
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user with sanitized and validated input
        const newUser = await User.create({
            fullName: fullName,
            username: username,
            idNumber: idNumber,
            accountNumber: accountNumber,
            password: hashedPassword
        });

        // Generate JWT with appropriate expiration
        const token = jwt.sign(
            { 
                id: newUser._id.toString(),
                version: 1  // For token versioning
            }, 
            process.env.JWT_SECRET || "secretkey123", // Better to use environment variable
            {
                expiresIn: '15m',  // 15 minutes
                algorithm: 'HS256'  // Specify the algorithm
            }
        );

        // Send response with minimal user data
        res.status(201).json({
            status: 'success',
            message: 'User registered successfully!',
            token,
            user: {
                _id: newUser._id,
                name: newUser.fullName,
                idNumber: newUser.idNumber,
                role: newUser.role,
            }
        });

    } catch (error) {
        // Log error securely (implement proper logging)
        console.error('Signup error:', error.message);
        
        // Don't expose internal error details to client
        next(new createError('Registration failed. Please try again.', 500));
    }
};

// LOGGING USER
exports.login = async (req, res, next) => {
    try {
            //First sanitize user input
            const sanitizedInput = sanitizeInput(req.body);
            const {username,accountNumber,password} = sanitizedInput

        // Validate password
        if (!passwordRegex.test(password)) {
            return next(new createError('Invalid password format!', 400));
        }
        
        const user = await User.findOne({ username, accountNumber });

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
                name: user.fullName,
                idNumber: user.idNumber,
                role: user.role,
            },
        });

    } catch (error) {
        next(error);
    }
};
