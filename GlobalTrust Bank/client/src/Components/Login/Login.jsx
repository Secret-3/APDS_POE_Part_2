import React, { useState } from 'react';
import './Login.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.scss';

// Import assets
import image from '../../LoginAssets/GTBmain.jpg';
import logo from '../../LoginAssets/gbtlogo.jpg';

// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const navigate = useNavigate(); // Correctly initializing useNavigate
    const { loginUser, loading, error } = useLogin();

    const [formValues, setFormValues] = useState({
        username: '',
        accountNumber: '',
        password: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser(formValues); // Await loginUser directly here
        navigate('/overview'); // Navigate after loginUser
    };

    return (
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className="imageDiv">
                    <img src={image} alt="Description of image" />
                    <div className="textDiv">
                        <h2 className='title'>Create and sell extraordinary products</h2>
                        <p>Get a greater understanding of your money</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Don't have an account yet?</span>
                        <Link to={'/register'}>
                            <button className='btn'>Register</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo" />
                        <h3>Let Us Know You!</h3>
                    </div>
                    {error && <p className="error">{error}</p>} {/* Display error message */}
                    <form className='form grid' onSubmit={handleSubmit}>
                        {/* Username Field */}
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input
                                    type="text"
                                    id='username'
                                    placeholder='Enter Username'
                                    value={formValues.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Account Number Field */}
                        <div className="inputDiv">
                            <label htmlFor="accountNumber">Account Number</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input
                                    type="text"
                                    id='accountNumber'
                                    placeholder='Enter Account Number'
                                    value={formValues.accountNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input
                                    type="password"
                                    id='password'
                                    placeholder='Enter Password'
                                    value={formValues.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' disabled={loading}>
                            <span>{loading ? 'Logging in...' : 'Login'}</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                         
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
