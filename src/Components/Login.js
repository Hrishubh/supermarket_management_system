import React from 'react'
import LoginImg from '.././Images/Login.png'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="login-container">
                    <form className="login-form" action="">
                        <div className="login-heading">
                            <h1>Login Details&nbsp; </h1>
                            <img src={LoginImg} alt="" />
                        </div>
                        <p align="center" for="username">Username : <input type="text" id="username" name="username" /><br /></p>
                        <p align="center" for="password">Password&nbsp; : <input type="password" id="password" name="password" /><br /></p>
                        <button>LOGIN</button>
                    </form>
                </div>
            </div>
            <div className="main-navigator">
                <button className="button1"><Link className='button1-link' to="/">BACK</Link></button>
                <button className="button2">BUTTON 2</button>
            </div>
        </>
    )
}
export default Login