import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Axios from 'axios';

const Employee = () => {

    const [E_Name,setE_Name]=useState('')
    const [E_Id,setE_Id]=useState('')

    const validateEmployee = () => {
        fetch('localhost/Avenue/EmpByid',{
            E_Name:E_Name,
            id:E_Id,
    }).then((response)=> {
            if(response.message){
                alert("Please enter valid Employee Details!");
            }
            else {
                window.open('/ViewEmployee','_self');
                return;
            }
        })
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="products-container">
                    <div className="products-heading">
                        <h1>Employee Details </h1>
                    </div>
                    <form className="products-form" action="">

                        <p align="center" for="EmployeeName">Employee Name : <input onChange={(e)=>setE_Name(e.target.value)} /><br /></p>
                        <p align="center" for="EmployeeCode">Employee ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input onChange={(e)=>setE_Id(e.target.value)} /><br /></p>
                        <div className="products-buttons">
                            <button type="button" onClick={validateEmployee}>Find Employee</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="products-buttons-out">
            <div className="products-buttons">
                <button type="button" style={{position: "relative", top: "-10vh" }}><Link className='button2-link' style={{color: "#000080"}} to="/AddEmployee">ADD EMPLOYEE</Link></button>
            </div>
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/Management">BACK</Link></button>
                <button className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
            </div>

        </>
    )
}
export default Employee