import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Axios from 'axios';

const Products = (props) => {

    const [P_Name,setP_Name]=useState('')
    const [P_Code,setP_Code]=useState('')

    const validateProduct = () => {
        fetch('localhost/Avenue/ProdBycode',{
            Name:P_Name,
            Code:P_Code,
    }).then((response)=> {
            if(response.message){
                alert("Please enter a valid Product Code!");
            }
            else {
                window.open('/ViewProduct','_self');
                return;
            }
        })
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="products-container">
                    <div className="products-heading">
                        <h1>Products Details </h1>
                    </div>
                    <form className="products-form" action="">

                        <p align="center" for="P_Name">Product Name : <input onChange={(e)=>setP_Name(e.target.value)} /><br /></p>
                        <p align="center" for="P_Code">Product Code&nbsp; : <input onChange={(e)=>setP_Code(e.target.value)} /><br /></p>
                        <div className="products-buttons">
                        <button type="button" onClick={validateProduct}>Find Product</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="products-buttons-out">
            <div className="products-buttons">
                <button style={{position: "relative", top: "-10vh" }}><Link className='button2-link' style={{color: "#000080"}} to="/AddProducts">Add Products</Link></button>
            </div>
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
            </div>

        </>
    )
}

export default Products