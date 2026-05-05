import React from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { LuLock } from "react-icons/lu";

const Login = () => {
  return (
    <div className='login-container'>
      <div className='wrapper'>
          <form action="">
              <h1>Login</h1>
              
              <div className='inp-box'>
                  <input type="text" placeholder='Username' required />
                  <FaUser className='icon' />
              </div>
              
              <div className='inp-box'>
                  <input type="password" placeholder='Password' required />
                  <LuLock className='icon' />
              </div>
              
              <div className="remember-forgot">
                  <label>
                      <input type="checkbox" /> Remember me
                  </label>
                  <a href="#">Forgot password?</a>
              </div>
              
              <button type='submit'>Login</button>
              
              <div className="register-link">
                  <p>Don't have an account? <a href="#">Register</a></p>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Login