import React, {useState} from "react";
import profilephoto from "./images/prasad-pic.jpeg"

function About(){
    return(
        <div style={{height:"80vh", width:"60vw", marginRight:"20vw", marginLeft:"20vw", paddingTop:"30vh"}}>
            <div>
                <h1 style={{color:"#007F73", fontSize:"60px", marginTop:"5vh", paddingBottom:"0vh", marginBottom:"0vh"}}>About Me</h1>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{width:"40vw"}}>
                    <p style={{color:"#265073", fontFamily:"sans-serif", fontSize:"20px", fontWeight:"bold"}}>Hello! I'm Prasad Hp, a Mechanical Engineer with a passion for design and a newfound interest for web development.</p>
                    <p style={{color:"#265073", fontFamily:"sans-serif", fontSize:"20px",fontWeight:"normal"}}>Originally trained in mechanical engineering, I've delved into the world of designing and have worked in both private and government banking sectors. Now, I'm transitioning into web development, where I'm excited to combine my analytical skills with my creative flair to craft exceptional digital experiences.</p>
                    <div style={{fontFamily:"sans-serif", fontSize:"20px", color:"#003C43", paddingBottom:"0px"}}>
                        <p>Here are the few techlogogies I am working on recently</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width:"40vh", fontSize:"16px"}}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            <ul>
                                <li>ReactJs</li>
                                <li>NodeJs</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div style={{}}>
                    <img src={profilephoto} style={{width:"300px", border:"solid #007F73", borderRadius:"10px"}}/>
                </div>

            </div>
        </div>
    )
}

export default About;