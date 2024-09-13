"use client";

import React, { useState } from "react";
import NavBar from "./navbar/page";
import CommandBlock from "./textbody/page";
import "./page.css";
import Card from "./card/page";
import Test from "./test/test";
import Email from "./card/email";

export default function Terminal() {
  const [enter, setEnter] = useState(0);
  const [clear, setClear] = useState(0);
  // Function to update the state
  const enterFunction = (e) => {
    setEnter(enter + e);
  };

  return (
    // <div className="max-w-full  bg-black text-white flex flex-col relative min-h-screen">
    //   <NavBar />
    //   {Array.from({ length: enter + 1 }, (_, index) => (
    //     <CommandBlock
    //       key={index}
    //       index={index}
    //       enterFunctionProps={enterFunction}
    //       token={enter}
    //     />
    //   ))}
    // </div>
    <Email />

    // <Test></Test>
  );
}
