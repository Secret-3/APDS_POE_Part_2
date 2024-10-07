import { useAuth } from "../contexts/AuthContext";
import { message } from 'antd';
import { useState } from 'react';

const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      console.log('Sending request to login user', values);

      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      console.log('Response received', res);

      if (!res.ok) {
        console.error('Failed response', res.status, res.statusText);
        const errorData = await res.json();
        throw new Error(errorData.message || 'Login Failed');
      }

      const data = await res.json();
      console.log('User logged in successfully', data);

      message.success(data.message);
      login(data.token, data.user);

    } catch (error) {
      console.error('Error occurred during login', error);
      setError(error.message || 'An error occurred');
      message.error(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;