"use client";

import React, { useState } from "react";
import "./page.css";
import About from "./about";
import CommandError from "./commandError";
import Contact from "./contact";
import Email from "./email";
import Help from "./help";

export default function Card({ title }) {
  const [rotate, setRotate] = useState(false);

  const rotateFunction = () => {
    setRotate(!rotate);
  };
  let cardContent;
  switch (title) {
    case "about":
      cardContent = <About />;
      break;
    case "contact":
      cardContent = <Contact />;
      break;
    case "email":
      cardContent = <Email />;
      break;
    case "help":
      cardContent=<Help/>
      break;
    default:
      cardContent = <CommandError command={title} />;
      title = "Error";
  }

  return (
    // <div className="bg-black h-screen text-white flex justify-center items-center">
    //   <div className="flip-card" onClick={rotateFunction}>
    //     <div className={`flip-card-inner ${rotate ? "flip-card-rotate" : ""}`}>
    //       <div className="front-card">Front</div>
    //       <div className="back-card">Back</div>
    //     </div>
    //   </div>
    // </div> it was for the rotating card which wont be use here probably
    <div className="bg-black text-white m-8 border-4 border-orange-500 rounded-lg  relative shadow-lg shadow-shadowconfig max-w-screen-md">
      <p className="absolute top-[-1rem] bg-black ml-[1rem] px-[2rem]">
        {title}
      </p>
      <div className="p-[2rem]">{cardContent}</div>
    </div>
  );
}
