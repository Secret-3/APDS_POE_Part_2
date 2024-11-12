// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import useLogin from '../../hooks/useLogin';

// Import assets
import image from '../../LoginAssets/GTBmain.jpg';
import logo from '../../LoginAssets/gbtlogo.jpg';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser, loading } = useLogin();

    const [formValues, setFormValues] = useState({
        username: '',
        accountNumber: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await loginUser(formValues);
            if (response?.status === 'success') {
                console.log('Login successful');
            }
        } catch (err) {
            setError(err.message);
            console.error('Login error:', err);
        }
    };

    return (
        <div className='loginPage'>
            <div className='container'>
            <div className="imageDiv">
    <img src={image} alt="Bank Building" />
    <div className="textDiv">
        <h2 className='title'>GlobalTrust Bank</h2>
        <p>Your Global Partner in Financial Security</p>
    </div>
    
    <div className="footerDiv">
        <span className="text">Don't have an account yet?</span>
        <Link to={'/register'}>
            <button className='btn'>Register</button>
        </Link>
    </div>
</div>

                <div className="formDiv">
                    <div className="headerDiv">
                        <img src={logo} alt="Bank Logo" />
                        <h3>Welcome Back!</h3>
                    </div>

                    {error && <div className="error-popup">{error}</div>}

                    <form className='form' onSubmit={handleSubmit}>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input">
                                <FaUserShield className='icon' />
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter Username"
                                    value={formValues.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="accountNumber">Account Number</label>
                            <div className="input">
                                <FaUserShield className='icon' />
                                <input
                                    type="text"
                                    id="accountNumber"
                                    placeholder="Enter Account Number"
                                    value={formValues.accountNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input">
                                <BsFillShieldLockFill className='icon' />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn login-btn" 
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <div className="forgotPassword">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;