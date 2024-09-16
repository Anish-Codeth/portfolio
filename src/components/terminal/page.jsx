"use client";

import React, { useState } from "react";
import NavBar from "./navbar/page";
import CommandBlock from "./textbody/page";
import "./page.css";
import Card from "./card/email";
import Test from "./test/test";
import Email from "./card/email";
import HelpDefault from "./card/default.jsx";

export default function Terminal() {
  const [enter, setEnter] = useState(0);
  const [clear, setClear] = useState(0);
  const [defaultHelp,setDefaultHelp]=useState(true)  //to show the help
  // Function to update the state
  const enterFunction = (e) => {
    if(e==-enter){
      setDefaultHelp(true)
    }
    setEnter(enter + e);
    
  };

  const setDefaultHelpFunction=(e)=>{
    setDefaultHelp(e)
  }

  return (
    <div className="max-w-full  bg-black text-white flex flex-col relative min-h-screen ">
      <NavBar />
      {defaultHelp?<HelpDefault props={setDefaultHelpFunction}/>:
      Array.from({ length: enter + 1 }, (_, index) => (
        <CommandBlock
          key={index}
          index={index}
          enterFunctionProps={enterFunction}
          token={enter}
        />
      ))}
    </div>
    // <Email />

    // <Test></Test>
  );
}
