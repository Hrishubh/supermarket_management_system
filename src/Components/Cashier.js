import React,{useState,useReducer} from 'react'
import plus from ".././Images/plus.png"
import { Link } from "react-router-dom"
import * as ReactBootStrap from 'react-bootstrap'
import mockData from "./mock-data.json"
const Cashier = () => {
    let rows = []
    const [changed,setchanged] = useState(rows)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    var a=1;
    const reloadfxn =  () => {
        let array={};
        if(true){
            array = {
                name: "Amul Milk"+a, 
                code: 12, 
                quantity: 5, 
                price: 232345 
            }
        }
        addRows(array)
        console.log(array)
        console.log(rows)
    };

    const addRows = (rowAdded) => {
        rows.push(
            {   
                name: rowAdded.name,
                code: rowAdded.code,
                quantity: rowAdded.quantity,
                price: rowAdded.price
            } 
        )
        setchanged(rows)
        forceUpdate();
    };

    return (
        <>
            <div className="main-wrapper2" >
                <div className="main-cashier-wrapper">
                    <div className="cashier-container">
                        <form className="products-form cashier-form" action="">
                            <p align="center" htmlFor="ProductName">Product Name : <input type="text" id="ProductName" name="ProductName" />
                                <span id="cashier" style={{ display: "inline" }}>
                                    <button onClick={reloadfxn} type="button" value="Post" ><img height="25vh" src={plus} alt="" /></button>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
                <p align="center">Purchased Products</p>
                <ReactBootStrap.Table striped bordered hover id='fullTable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Quantity</th>
                            <th>Price per product</th>
                            <th>Cost</th>
                        </tr>
                    </thead > 
                    <tbody id='tableData'>
                        {changed.map((rows, index) => (
                            <tr key={index}>
                                <td>{rows.name}</td>
                                <td>{rows.code}</td>
                                <td>{rows.quantity}</td>
                                <td>{rows.price}</td>
                                <td>{rows.price*rows.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
            
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button className="button2"><Link className='button1-link' to="/BillingRecipt">Create Bill</Link></button>
            </div>

        </>
    )
}
export default Cashier