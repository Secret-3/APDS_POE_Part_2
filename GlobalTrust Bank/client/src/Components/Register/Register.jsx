// Register.jsx
import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

// Import assets
import image from '../../LoginAssets/GTBmain.jpg';
import logo from '../../LoginAssets/gbtlogo.jpg';

// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Register = () => {
    const { registerUser, loading, error } = useSignup();

    const [formValues, setFormValues] = useState({
        fullName: '',
        username: '',
        idNumber: '',
        accountNumber: '',
        password: '',
        confirmPassword: '',
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
        await registerUser(formValues);
    };

    return (
        <div className='registerPage'>
            <div className='container'>
                <div className="imageDiv">
                    <img src={image} alt="GlobalTrust Bank" />
                    <div className="textDiv">
                        <h2 className='title'>GlobalTrust Bank</h2>
                        <p>Your Global Partner in Financial Security</p>
                    </div>

                    <div className="footerDiv">
                        <span className="text">Already have an account?</span>
                        <Link to={'/login'}>
                            <button className='btn'>Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv">
                    <div className="headerDiv">
                        <img src={logo} alt="GlobalTrust Logo" />
                        <h3>Create Your Account</h3>
                    </div>

                    <div className="formScrollContainer">
                        <form onSubmit={handleSubmit}>
                            {error && <div className="errorMessage">{error}</div>}

                            <div className="inputDiv">
                                <label htmlFor="fullName">Full Name</label>
                                <div className="input">
                                    <FaUserShield className='icon' />
                                    <input 
                                        type="text" 
                                        id='fullName' 
                                        placeholder='Enter Full Name' 
                                        value={formValues.fullName} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="username">Username</label>
                                <div className="input">
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

                            <div className="inputDiv">
                                <label htmlFor="idNumber">ID Number</label>
                                <div className="input">
                                    <FaUserShield className='icon' />
                                    <input 
                                        type="text" 
                                        id='idNumber' 
                                        placeholder='Enter ID Number' 
                                        value={formValues.idNumber} 
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
                                        id='accountNumber' 
                                        placeholder='Enter Account Number' 
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
                                        id='password' 
                                        placeholder='Enter Password' 
                                        value={formValues.password} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input">
                                    <BsFillShieldLockFill className='icon' />
                                    <input 
                                        type="password" 
                                        id='confirmPassword' 
                                        placeholder='Confirm Password' 
                                        value={formValues.confirmPassword} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            <button type='submit' className='btn submitBtn' disabled={loading}>
                                <span>{loading ? 'Creating Account...' : 'Register'}</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;