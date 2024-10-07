import React from 'react';
import './Login.css';
import '../../App.css';
import { Link } from 'react-router-dom';

// Import assets
import image from '../../LoginAssets/GTBmain.jpg';
import logo from '../../LoginAssets/gbtlogo.jpg';

// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
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
                        <img src={logo} alt="Logo Image" className='logo' />
                        <h3>Let Us Know You!</h3>
                    </div>
                    <form action="" className='form grid'>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Enter Username' />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='password' placeholder='Enter Password' />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
