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
        email: '',
        name: '',
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
        <div className='registerPage flex'>
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
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon' />
                                <input type="text" id='email' placeholder='Enter Email' value={formValues.email} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="name">Name</label> {/* Change 'Username' to 'Name' */}
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='name' placeholder='Enter Name' value={formValues.name} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='password' placeholder='Enter Password' value={formValues.password} onChange={handleChange} required />
                            </div>
                        </div>

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