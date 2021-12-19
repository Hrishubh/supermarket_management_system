import React from 'react'
import plus from ".././Images/plus.png"
import { Link } from "react-router-dom"

const Cashier = () => {
    return (
        <>
            <div className="main-wrapper2" >
                <div className="main-cashier-wrapper">
                    <div className="cashier-container">
                        <form className="products-form cashier-form" action="">
                            <p align="center" for="ProductName">Product Name : <input type="text" id="ProductName" name="ProductName" />
                                <span id="cashier" style={{ display: "inline" }}>
                                    <button type="button" value="Post" ><img height="25vh" src={plus} alt="" /></button>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
                <br/>
                <p align="center">Purchased Products</p>
            </div>
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button className="button2"><Link className='button1-link' to="/BillingRecipt">Create Bill</Link></button>
            </div>

        </>
    )
}
export default Cashier