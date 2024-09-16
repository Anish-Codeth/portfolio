"use client";

import React, { useEffect, useRef, useState } from "react";
import NavBar from "./navbar/page.jsx";
import CommandBlock from "./textbody/page";
import "./page.css";
import Card from "./card/page";
import HelpDefault from "./card/default.jsx";


export default function Terminal() {
  const [enter, setEnter] = useState(0);//to count the number of enter which helps in count also
  // const [clear, setClear] = useState(0);
  // const [key,setKey]=useState('') //to show the help
  // const [defaultHelp,setDefaultHelp]=useState(true) 
  const [text,setText]=useState([''])
  const [response, setResponse] = useState([]);
  const autoScrollRef=useRef(null)
  
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

  useEffect(()=>{
autoScrollRef.current.scrollIntoView({block:'end'}) //js
console.log('hi')
  },[enter])


  const updateText = (e) => {
    let temparray=[...text]
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
          setResponse([])
          setEnter(0)
        } else {
          setResponse(prevResponse => [...prevResponse, <Card key={enter} title={text[enter]} />]);
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
    <div className="max-w-full  bg-black text-white flex flex-col relative min-h-screen " ref={autoScrollRef}>
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
      <HelpDefault/>
      {text.map((t,index)=>{
       return <CommandBlock key={index} command={t} response={response[index]} />
      })
    }
    </div>
  
  );
}
