import React,{useState} from "react";

function Contact(){
    return(
    <div style={{height:"70vh", width:"60vw", marginRight:"20vw", marginLeft:"20vw", paddingTop:"30vh", textAlign:"center"}}>
        <h1 style={{color:"#007F73", fontSize:"60px", marginTop:"5vh", paddingBottom:"0vh", marginBottom:"0vh"}}>Get in Touch</h1>
        <h3 style={{fontFamily:"sans-serif", fontSize:"20px", color:"#003C43", paddingBottom:"0px"}}>Currently, I am seeking opportunities as a front-end engineer. Presently, I am on a journey to learn the MERN Stack, but I am flexible in learning other tech stacks and contributing my best to projects to further develop my skills as a web developer. </h3>
        <a href="mailto:prasadhp@outlook.in"><button style={{width:"150px", height:"50px", borderRadius:"10px", fontFamily:"sans-serif", fontSize:"20px"}}>Say Hello</button></a>
    </div>
    )
}

export default Contact;