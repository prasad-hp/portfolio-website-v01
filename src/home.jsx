import React, {useState} from "react";
import Navbar from "./components/navbar";
import Body from "./components/home-body"

function Home(){
    return(
        <div className="m-0 h-screen">
            <Navbar />
            <Body />
        </div>
    )
}

export default Home;
