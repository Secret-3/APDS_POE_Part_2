import { useAuth } from "../contexts/AuthContext";
import { message } from 'antd';
import { useState } from 'react';

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerUser = async (values) => {
    if (values.password !== values.confirmPassword) {
      console.error('Passwords do not match');
      return setError('Passwords do not match');
    }

    try {
      setError(null);
      setLoading(true);
      console.log('Sending request to register user', values);

      const res = await fetch('https://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      });

      console.log('Response received', res);

      if (!res.ok) {
        console.error('Failed response', res.status, res.statusText);
        const errorData = await res.json();
        throw new Error(errorData.message || 'Registration Failed');
      }
      
      const data = await res.json();
      console.log('User registered successfully', data);

      message.success(data.message);
      login(data.token, data.user);

    } catch (error) {
      console.error('Error occurred during registration', error);
      setError(error.message || 'An error occurred');
      message.error(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser };
};

export default useSignup;