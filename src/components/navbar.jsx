import React, {useState}from "react";
import "./navbar.css"

// import logo from "../images/name-logo.png"
import logo from "../images/logo1.webp"


function Navbar(){
    return(
        <>
            <div className="container" style={{alignItems:"center"}}>
                <div className="name-logo">
                    <img src={logo} style={{width:"100px", marginLeft:"25px"}}/>
                </div>
                <div className="nav-bar-components"style={{color:"#007F73", fontFamily:"sans-serif", justifyContent:"space-around", flex:"0.5"}}>
                    <h2>Home</h2>
                    <h2>About</h2>
                    {/* <h2>My Work</h2> */}
                    <h2>Contact</h2>
                </div>
            </div>
        </>
    )

}

export default Navbar;