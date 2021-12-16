import React from 'react'
import { Link } from "react-router-dom"

const BillingRecipt = () => {

    function addDate() {
        var date = new Date();
        var hours = date.getHours();
        var days = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear(); 
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        // hours = hours % 12;
        // hours = hours ? hours : 12; // the hour '0' should be '12'
        // minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = " " + hours + ':' + minutes + ' ' + ampm + " on " + days + '/' + month + '/' + year  ;
        return strTime;
    }

    return (
        <>
            <div className="main-wrapper2">
                <p align="center" style={{ color: '#000080' }}>Purchased Products</p>
                <div className="main-billing-recipt-wrapper">
                    <div className="billing-recipt-container">
                        <form className="products-form billing-recipt-form" action="">
                            <p align="center" style={{ color: '#000080' }} for="BillingBy">Billing By : <input type="text" id="BillingBy" name="BillingBy" />&nbsp;
                                Date and Time : <input disabled type="text" id="mySpan" name="Date_Time" value={addDate()} ></input>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="products-buttons">
                <button style={{position: "fixed", top: "74vh", borderRadius: "50%", background: "linear-gradient(0deg, #C5C5F1, #C5C5F1)"}}>TOTAL: Rs _____</button>
            </div>
            <div className="products-buttons">
                <button style={{ position: "fixed", top: "80vh", borderRadius: "50%" }}>Print Bill</button>
            </div>
            <div className="main-navigator">
                <button className="button1">BACK</button>
                <button className="button2">EXIT</button>
            </div>

        </>
    )
}
export default BillingRecipt