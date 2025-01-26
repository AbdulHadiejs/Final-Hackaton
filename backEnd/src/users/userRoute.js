import express from 'express';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import User from './userSchema.js';

export const userRoute = express.Router();

// Function to generate a random password
function generatePassword() {
    return crypto.randomBytes(8).toString('hex');
}

// Function to send an email with the password
async function sendEmail(email, password) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Account Password',
        text: `Hello, your account has been created. Your password is: ${password}`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

userRoute.get('/', async (request, response)=>{
    try {
        const users = await User.find()
        response.json(users);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

// Create a new user
userRoute.post('/create-user', async (request, response) => {
    const { cnic, name, email } = request.body;

    // Step 1: Generate a random password
    const rawPassword = generatePassword();

    // Step 2: Hash the password
    const hashedPassword = await bcrypt.hash(rawPassword, 10); // 10 is the salt rounds

    // Step 3: Create a new user with the hashed password
    const newUser = new User({
        cnic,
        name,
        email,
        password: hashedPassword
    });

    try {
        // Step 4: Save the user to the database
        const savedUser = await newUser.save();

        // Step 5: Send the raw password to the user's email
        await sendEmail(email, rawPassword);

        // Return the saved user data
        response.status(201).json(savedUser);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

// Update a user by ID
userRoute.put('/update-user/:id', async (request, response) => {
    const { id } = request.params;
    const updatedUser = request.body;
    try {
        const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.send(user);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

// Delete a user by ID
userRoute.delete('/delete-user/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.send({ message: 'User deleted successfully', user });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

// Get a specific user by ID
userRoute.get('/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.send(user);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});
