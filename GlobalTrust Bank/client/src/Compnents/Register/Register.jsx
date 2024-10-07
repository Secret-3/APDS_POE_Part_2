import React from 'react'
import './Login.css'
import '../../App.css'
import {Link, NavLink} from 'react-router-dom'

//import our assets
import image from '../../LoginAssets/GBTmain.jpg'
import logo from '../../LoginAssets/gbtlogo.jpg'

//IMported Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
    return(
        <div className='registerPage flex'>
            <div className='container flex'>
            <div className="imageDiv">
  <img src="GBTmain.jpg" alt="Description of image" />
  <div className="textDiv">
    <h2 className='title'>Create and sell extraordinary produucts</h2>
    <p>Get a greater understanding of your money</p>
  </div>

  <div className="footerDiv flex">
    <span className="text">Have an account great?</span>
    <Link to={'/login'}>
    <button className='btn'>Login</button>
    </Link>
  </div>
</div>
<div  className="formDiv flex">
    <div className="headerDiv">
        <img src={logo} alt="Logo Image"/> 
        <h3>Let Us Know You!</h3>
    </div>
    <form action="" className='form grid'>
{/* <span className='showMessage'>Registration status will be here</span> */}


<div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input type="text" id='email' placeholder='Enter Email'/>
            </div>
        </div>

        <div className="inputDiv">
            <label htmlFor="usename">Username</label>
            <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Enter Username'/>
            </div>
        </div>

        <div className="inputDiv">
            <label htmlFor="Password">Password</label>
            <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Password'/>
            </div>
        </div>

        <button type='submit' className='btn flex'>
            <span>Register</span>
            <AiOutlineSwapRight className='icon'/>
        </button>
    </form>
</div>
            </div>
        </div>
    )
}