// C:\Users\Sauraav\Desktop\new_poe\GlobalTrust Bank\server\utils\initAdmin.js

const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');

const initializeAdmin = async () => {
    try {
        // Check if admin exists
        const adminExists = await User.findOne({ username: 'admin' });

        if (!adminExists) {
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash('Password01.', salt);

            await User.create({
                username: 'admin',
                fullName: 'admin',
                idNumber: '1234567890123',
                accountNumber: '12345678901',
                password: hashedPassword,
                role: 'admin'
            });

            console.log('Default admin account created successfully');
        } else {
            console.log('Admin account already exists');
        }
    } catch (error) {
        console.error('Error initializing admin account:', error);
    }
};

module.exports = initializeAdmin;