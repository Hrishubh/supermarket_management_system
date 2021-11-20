import React from 'react'

const Products = () => {
    return (
        <>
            <div className="main-wrapper2">
                <div className="main-products-wrapper">
                    <div className="products-container">
                        <form className="products-form" action="">
                            <div className="products-heading">
                                <h1>Products Details </h1>
                            </div>
                            <p align="center" for="ProductName">Product Name : <input type="text" id="ProductName" name="ProductName" /><br /></p>
                            <p align="center" for="ProductCode">Product Code&nbsp; : <input type="ProductCode" id="ProductCode" name="ProductCode" /><br /></p>
                            <div className="products-buttons">
                                <button style={{marginLeft: "15vw"}}>Find Product</button>
                                <button style={{marginRight: "15vw"}}>Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="main-navigator">
                <button className="button1">BUTTON 1</button>
                <button className="button2">BUTTON 2</button>
            </div>

        </>
    )
}
export default Products