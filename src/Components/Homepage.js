import React from 'react'
import { Link } from "react-router-dom"

const Homepage = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="homepage-container">
                    <h1>AVENUE <br /> SUPERMART</h1>
                </div>
            </div>
            <div className="main-navigator">
                <button className="button1">BUTTON 2</button>
                <button className="button2"><Link className='button2-link' to="/Login">LOGIN</Link></button>
            </div>
        </>
    )
}
export default Homepage