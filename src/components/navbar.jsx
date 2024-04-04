import React, {useState}from "react";
import "./navbar.css"
import logo from "../images/name-logo.png"

function Navbar(){
    return(
        <>
            <div className="container">
                <div className="name-logo">
                    <img src={logo} />
                </div>
                <div className="nav-bar-components">
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>My Work</h2>
                    <h2>Contact Me</h2>
                </div>
            </div>
        </>
    )

}

export default Navbar;