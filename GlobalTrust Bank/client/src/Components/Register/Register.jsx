import React, { useState } from 'react';
import './Register.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

// Import assets
import image from '../../LoginAssets/GTBmain.jpg';
import logo from '../../LoginAssets/gbtlogo.jpg';

// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {
    const { registerUser, loading, error } = useSignup();

    const [formValues, setFormValues] = useState({
        fullName: '',
        username:'',
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
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className="imageDiv">
                    <img src={image} alt="Description of image" />
                    <div className="textDiv">
                        <h2 className='title'>Create and sell extraordinary products</h2>
                        <p>Get a greater understanding of your money</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Already have an account?</span>
                        <Link to={'/login'}>
                            <button className='btn'>Login</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo" />
                        <h3>Let Us Know You!</h3>
                    </div>
                    <form className='form grid' onSubmit={handleSubmit}>
                        {error && <p className="errorMessage">{error}</p>}

                        {/* Full Name Field */}
                        <div className="inputDiv">
                            <label htmlFor="fullName">Full Name</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='fullName' placeholder='Enter Full Name' value={formValues.fullName} onChange={handleChange} required />
                            </div>
                        </div>

                         {/* Username Field */}
                         <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Enter Username' value={formValues.username} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* ID Number Field */}
                        <div className="inputDiv">
                            <label htmlFor="idNumber">ID Number</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='idNumber' placeholder='Enter ID Number' value={formValues.idNumber} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* Account Number Field */}
                        <div className="inputDiv">
                            <label htmlFor="accountNumber">Account Number</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='accountNumber' placeholder='Enter Account Number' value={formValues.accountNumber} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='password' placeholder='Enter Password' value={formValues.password} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="inputDiv">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='confirmPassword' placeholder='Confirm Password' value={formValues.confirmPassword} onChange={handleChange} required />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' disabled={loading}>
                            <span>{loading ? 'Registering...' : 'Register'}</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
