import React, {useState} from 'react'
import LoginImg from '.././Images/Login.png'
import { Link } from "react-router-dom";
import Axios from 'axios';

const LoginAdmin = () => {

    const [usernameLoginAdmin,setusernameLoginAdmin]=useState('')
    const [passwordLoginAdmin,setpasswordLoginAdmin]=useState('')

    const validateLoginAdmin = () => {
        Axios.get('https://localhost:80/Avenue/Admin',{
            username:usernameLoginAdmin,
            password:passwordLoginAdmin,
    }).then((response)=> {
            if(response.data.message){
                alert("Please enter the correct username and password");
            }
            else {
                window.open('/Management');
            }
        })
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="login-container">
                    <form className="login-form" action="">
                        <div className="login-heading">
                            <h1>Login Details&nbsp; </h1>
                            <img src={LoginImg} alt="" />
                        </div>
                        <p align="center" for="username">Username : <input onChange={(e)=>setusernameLoginAdmin(e.target.value)}/><br /></p>
                        <p align="center" for="password">Password&nbsp; : <input onChange={(e)=>setpasswordLoginAdmin(e.target.value)}/><br /></p>
                        <div><button type="button" onClick={validateLoginAdmin}>LOGIN</button></div>
                    </form>
                </div>
            </div>
            <div className="main-navigator">
                <button type="button" className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button type="button" className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
        </>
    )
}
export default LoginAdmin