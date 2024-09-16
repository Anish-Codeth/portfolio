"use client";

import React, { useEffect, useState } from "react";
import NavBar from "./navbar/page";
import CommandBlock from "./textbody/page";
import "./page.css";
import Card from "./card/email";
import Test from "./test/test";
import Email from "./card/email";
import HelpDefault from "./card/default.jsx";
import { constants } from "buffer";

export default function Terminal() {
  const [enter, setEnter] = useState(0);//to count the number of enter which helps in count also
  // const [clear, setClear] = useState(0);
  // const [key,setKey]=useState('') //to show the help
  // const [defaultHelp,setDefaultHelp]=useState(true) 
  const [text,setText]=useState([''])
  
  useEffect(()=>{
    document.addEventListener('keydown',updateText)
    return ()=>{
      document.removeEventListener('keydown',updateText)
    }
  },[text,enter])
  // Function to update the state
  // const enterFunction = (e) => {
  //   if(e==-enter){
  //     setDefaultHelp(true)
  //   }
  //   setEnter(enter + e);
    
  // };

  // const setDefaultHelpFunction=(e)=>{
  //   setDefaultHelp(e)
  // }


  const updateText = (e) => {
    let temparray=[...text]
    console.log('dsfdsf',temparray[enter],e.key)
    let tempText=temparray[enter]

    switch (e.key) {
      case "Backspace":
        if(tempText.length==0)
          return 
        temparray[enter]=tempText.slice(0,tempText.length-1)
        break;
      case "Enter":
        if (tempText === "clear") {
          temparray=['']
        } else {
          setEnter(enter+1)
          temparray.push('')
        }
        break;
      default:
        if (e.key.length === 1) {
          temparray[enter]=(tempText+e.key)
        }
        break;
    }
    setText(temparray)
  };


  return (
    <div className="max-w-full  bg-black text-white flex flex-col relative min-h-screen ">
      <NavBar />
      {/* {defaultHelp?<HelpDefault props={setDefaultHelpFunction}/>:
      Array.from({ length: enter + 1 }, (_, index) => (
        <CommandBlock
          key={index}
          index={index}
          enterFunctionProps={enterFunction}
          token={enter}
          keys={key}
          
        />
      ))} */}
      {text.map((t,index)=>{
       return <CommandBlock key={index} command={t} />
      })
    }
    </div>
    // <Email />

    // <Test></Test>
  );
}
