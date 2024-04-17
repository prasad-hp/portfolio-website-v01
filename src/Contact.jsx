import React from "react";

function Contact() {
  return (
    <div className="h-70vh w-4/6 mx-auto mt-30vh text-center my-72">
      <h1 className="text-7xl text-emerald-700 mt-20 mb-0 font-medium">Get in Touch</h1>
      <h3 className="font-sans text-xl text-teal-800 pb-0 mb-5">Currently, I am seeking opportunities as a front-end engineer. Presently, I am on a journey to learn the MERN Stack, but I am flexible in learning other tech stacks and contributing my best to projects to further develop my skills as a web developer.</h3>
      <a href="mailto:prasadhp@outlook.in">
        <button className="w-40 h-12 bg-blue-500 text-white text-lg rounded-lg">Say Hello</button>
      </a>
    </div>
  );
}

export default Contact;