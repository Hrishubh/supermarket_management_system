import React from 'react'
import pic1 from ".././Images/1.jpg"
import pic2 from ".././Images/2.jpg"
import pic3 from ".././Images/3.jpg"
import pic4 from ".././Images/4.jpg"
import pic5 from ".././Images/5.jpg"
import pic6 from ".././Images/6.jpg"
import pic7 from ".././Images/7.jpg"
import pic8 from ".././Images/8.jpg"
import pic9 from ".././Images/9.jpg"
import AvenueLOGO from ".././Images/AvenueLOGO.png"

const Header = () => {
    return (
        <header className="header" style={{ height: "25vh", width: "100vw", backgroundColor: "#E7886A", overflow: "hidden" }}>
            <nav>
                <a href="/" id="heading-topic">HEADING</a>
                <a href="/" id="heading-logo"><img style={{ height: "4vh" }} src={AvenueLOGO} alt="" /></a>
            </nav>
            <hr id="header-hr" />
            <div className="header-mainDiv">
                <div className="header-images">
                    <img style={{ height: "14vh", width: "10vw" }} src={pic1} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic2} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic3} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic4} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic5} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic6} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic7} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic8} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic9} alt="" />
                </div>
                <div className="header-images2">
                    <img style={{ height: "14vh", width: "10vw" }} src={pic1} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic2} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic3} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic4} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic5} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic6} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic7} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic8} alt="" />
                    <img style={{ height: "14vh", width: "10vw" }} src={pic9} alt="" />
                </div>
            </div>
        </header>
    )
}
export default Header