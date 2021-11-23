import React from 'react'
import Login from './Login.js'
import Homepage from './Homepage.js'
import Products from './Products.js'
import AddProducts from './AddProducts.js'
import { Routes, Route } from "react-router-dom";
import Cashier from './Cashier.js'

const Main = () => {

    return (
        <div>
            <main style={{ height: "70vh", width: "100vw", background: "linear-gradient(0deg, #C5C5F1, #C5C5F1)" }}>
                <Routes>
                    <Route exact path={`/`} element={<Homepage />} />
                    <Route path={`/Login`} element={<Login />} />
                    <Route path={`/Products`} element={<Products />} />
                    <Route path={`/AddProducts`} element={<AddProducts />} />
                    <Route path={`/Cashier`} element={<Cashier />} />
                </Routes>
            </main>
        </div>
    )
}
export default Main