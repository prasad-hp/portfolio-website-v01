import React, {useState}from "react";
import logo from "../images/logo1.webp"


function Navbar(){
    return(
        <>
            <div className="grid grid-cols-3 ">
                <img className="col-span-2  mt-2" src={logo} style={{width:"100px", marginLeft:"25px"}}/>

                <div className="col-span-1 grid grid-cols-3 content-center text-2xl font-semibold font-serif  text-emerald-700">
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