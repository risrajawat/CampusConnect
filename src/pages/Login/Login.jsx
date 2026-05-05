import React from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { LuLock } from "react-icons/lu";

const Login = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='inp-box'>
                <input type="text" 
                placeholder='Username' required/>
                <FaUser className='icon '/>
            </div>
              <div className='inp-box'>
                <input type="password" 
                placeholder='Password' required/>
                <LuLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label ><input type="Checkbox" />Remember Me</label>
                <a href="#">Forgot Password</a>

            </div>
            <button type='submit'>Login</button>
            <div className="register-link">
                <p>Dont have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login