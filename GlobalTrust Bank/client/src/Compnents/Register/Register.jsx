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

  <div></div>
</div>

            </div>
        </div>
    )
}