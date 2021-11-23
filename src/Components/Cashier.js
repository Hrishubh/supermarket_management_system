import React from 'react'
import plus from ".././Images/plus.png"

const Cashier = () => {
    return (
        <>
            <div className="main-wrapper2">
                <div className="main-cashier-wrapper">
                    <div className="cashier-container">
                        <form className="products-form cashier-form" action="">
                            <p align="center" for="ProductName">Product Name : <input type="text" id="ProductName" name="ProductName" />
                                <span id="cashier" style={{ display: "inline" }}>
                                    <button type="submit" value="Post" ><img height="25vh" src={plus} alt="" /></button>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
                <p align="center">Purchased Products</p>
            </div>
            <div className="main-navigator">
                <button className="button1">BUTTON 1</button>
                <button className="button2">BUTTON 2</button>
            </div>

        </>
    )
}
export default Cashier