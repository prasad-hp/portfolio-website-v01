import React, {useState} from "react";
import Navbar from "./components/navbar";
import Body from "./components/home-body"

function Home(){
    return(
        <div style={{margin:"0px", height:"100vh"}}>
            <Navbar />
            <Body />
        </div>
    )
}

export default Home;
