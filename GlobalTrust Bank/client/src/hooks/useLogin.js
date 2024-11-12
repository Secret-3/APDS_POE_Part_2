// C:\Users\Sauraav\Desktop\new_poe\GlobalTrust Bank\client\src\hooks\useLogin.js

import { useAuth } from "../contexts/AuthContext";
import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginUser = async (values) => {
        try {
            setError(null);
            setLoading(true);
            console.log('Attempting login...', values);

            const res = await fetch('https://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login Failed');
            }

            console.log('Login successful:', data);
            message.success('Login successful!');
            login(data.token, data.user);

            // Navigate based on role
            if (data.user.role === 'admin') {
                console.log('Admin user detected, redirecting to admin dashboard...');
                navigate('/admin-dashboard');
            } else {
                console.log('Regular user detected, redirecting to user dashboard...');
                navigate('/user-dashboard');
            }

            return data;

        } catch (error) {
            console.error('Login error:', error);
            setError(error.message || 'An error occurred');
            message.error(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, loginUser };
};

export default useLogin;