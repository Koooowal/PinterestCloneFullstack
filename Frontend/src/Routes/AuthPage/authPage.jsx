import React, { useState } from 'react'
import './authPage.css'
import Image from '../../Components/Image/Image'
import apiRequest from '../../Utility/apiRequest'
import { useNavigate } from 'react-router'
import useAuthStore from '../../Utility/authStore'

function authPage() {
  const [isRegister,setIsRegister] = useState(false)
  const [error,setError] = useState("")
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await apiRequest.post(
        `/users/auth/${isRegister ? "register" : "login"}`,
        data
      );

      setCurrentUser(res.data);

      navigate("/");
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <div className='authPage'>
      <div className="authContainer">
        <Image path="/general/logo.png" alt=""/>
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm" onSubmit={handleSubmit}>
            <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type="username" placeholder="Enter your username" name="username" id="username" required/>           
          </div>
          <div className="formGroup">
            <label htmlFor="displayName">Name</label>
            <input type="displayName" placeholder="Enter your name" name="displayName" id="displayName" required/>           
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" name="email" id="email" required/>           
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" name="password" id="password" required/>           
          </div>
          <button type="submit">Register</button>
          <p onClick={()=>setIsRegister(false)}>Do you have an account <b>Login</b></p>
          {error && <p className="error">{error}</p>}
        </form>
        ) : (
          <form key="loginForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" name="email" id="email" required/>           
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" name="password" id="password" required/>           
          </div>
          <button type="submit">Login</button>
          <p onClick={()=>setIsRegister(true)}>Don&apos;t have an account? <b>Register</b></p>
          {error && <p className="error">{error}</p>}
        </form>
        ) }
      </div>
    </div>
  )
}

export default authPage