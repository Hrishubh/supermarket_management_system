import React from 'react'
import { Link } from "react-router-dom"

const BillingRecipt = () => {

    function addDate() {
        const Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var date = new Date();
        var hours = date.getHours();
        var days = date.getDate();
        var month = Month[date.getMonth()];
        var year = date.getFullYear(); 
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = " " + hours + ':' + minutes + ' ' + ampm + " - " + days + ' ' + month + ' ' + year  ;
        return strTime;
    }

    let printBill = () => {
        alert('The Bill was printed successfully!!\n\n(This is just an alert, an actual bill has not been generated)')
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
                <button type='button' onClick={printBill} style={{ position: "fixed", top: "80vh", borderRadius: "50%" }}>Print Bill</button>
            </div>
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/Cashier">BACK</Link></button>
                <button className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>

        </>
    )
}
export default BillingRecipt