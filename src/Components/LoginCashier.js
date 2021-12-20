import React, {useState} from 'react'
import LoginImg from '.././Images/Login.png'
import { Link } from "react-router-dom";
import Axios from 'axios';

const LoginCashier = () => {

    const [usernameLoginCashier,setusernameLoginCashier]=useState('')
    const [passwordLoginCashier,setpasswordLoginCashier]=useState('')

    const validateLoginCashier = () => {
        fetch('localhost/Avenue/Cashier',{
            username:usernameLoginCashier,
            password:passwordLoginCashier,
    }).then((response)=> {
            if(response.message == "Login Successful"){
                window.open('/Management','_self');
            }
            else if (response.message == "Some error occurred while retrieving data.") {
                alert("Some error occurred while retrieving data, Please try again later!")
            }
            else {
                alert("Please enter the correct Username and/or Password");
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
                        <p align="center" for="username">Username : <input onChange={(e)=>setusernameLoginCashier(e.target.value)}/><br /></p>
                        <p align="center" for="password">Password&nbsp; : <input type="password" onChange={(e)=>setpasswordLoginCashier(e.target.value)}/><br /></p>
                        <div><button type="button" onClick={validateLoginCashier}>LOGIN</button></div>
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
export default LoginCashier