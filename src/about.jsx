import React, {useState} from "react";
import profilephoto from "./images/prasad-pic.jpeg"

function About(){
    return(
        <div className="h-5/6 w-screen px-60 justify-self-center font-sans">
                <div>
                    <h1 className="text-7xl font-semibold  text-emerald-700" >About Me</h1>
                </div>
                <div className="flex justify-start align-middle mt-5" >
                    <div className="w-6/12 text-xl">
                        <p>Hello! I'm Prasad Hp, a Mechanical Engineer with a passion for design and a newfound interest for web development.</p>
                        <p >Originally trained in mechanical engineering, I've delved into the world of designing and have worked in both private and government banking sectors. Now, I'm transitioning into web development, where I'm excited to combine my analytical skills with my creative flair to craft exceptional digital experiences.</p>
                        <div>
                            <p>Here are the few technologies I am working on recently</p>
                            <div className="flex content-between w-10 text-lg align-top my-10">
                                <ul className="mr-10" >
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
                        
                <img src={profilephoto} className="w-96 rounded-xl ml-20"/>

                </div>
        </div>
    )
}

export default About;