"use client";

import React, { useEffect, useRef, useState } from "react";
import NavBar from "./navbar/page.jsx";
import CommandBlock from "./textbody/page";
import "./page.css";
import Card from "./card/page";
import HelpDefault from "./card/default.jsx";
import ResumeViewer from './card/resumeViewer.jsx'


export default function Terminal() {
  const [enter, setEnter] = useState(0);//to count the number of enter which helps in count also
  // const [clear, setClear] = useState(0);
  // const [key,setKey]=useState('') //to show the help
  // const [defaultHelp,setDefaultHelp]=useState(true) 
  const [text,setText]=useState([''])
  const [response, setResponse] = useState([]);
  const [formActive,setformActive]=useState('request')// request,release,held
  const [stackPointer,setStackPointer]=useState(0)
  const autoScrollRef=useRef(null)
  
  useEffect(()=>{
    document.addEventListener('keydown',updateText)
    return ()=>{
      document.removeEventListener('keydown',updateText)
    }
  },[text,enter])


  useEffect(()=>{
autoScrollRef.current.scrollIntoView({block:'end'}) //js
  },[enter,stackPointer])

  const formHandler=(e)=>{
    
    if(e=='release')
    {
      setResponse(response.slice(0,enter))
      setformActive('request')
      setText((prev)=>{
        let tempprev=[...prev]
        tempprev[enter]=''
        return tempprev
      })
      
    }
  }

  const updateText = (e) => {
   
    let temparray=[...text]
    let tempText=temparray[enter]
    if(formActive=='held')
      return 

    switch (e.key) {
      case "Backspace":
        if(tempText.length==0)
          return 
        temparray[enter]=tempText.slice(0,tempText.length-1)
        break;
      case 'ArrowUp':
        e.preventDefault()
          setStackPointer((stackPointer+1)%(enter))
        temparray[enter]=temparray[stackPointer]
        break;

      case 'ArrowDown':
        e.preventDefault()
        setStackPointer((enter-1)-(enter-stackPointer)%enter)
        temparray[enter]=temparray[stackPointer]
        break;
        

      case "Enter":
        if (tempText === "clear") {
          temparray=['']
          setResponse([])
          setEnter(0)
        }else if(tempText=='email'){
          setResponse(prevResponse => [...prevResponse, <Card key={enter} title={text[enter]} formActiveProps={formHandler}/>]);
          setformActive('held')
        } 
        else {
          
          setResponse(prevResponse => [...prevResponse, <Card key={enter} title={text[enter]} />]);
          setEnter(enter+1)
          temparray.push('')
        }
        setStackPointer(enter)
        break;
      default:
        
        if (e.key.length === 1) {
          if(tempText=='email')
            return 
          temparray[enter]=(tempText+e.key)
        }
        break;
    }
    setText(temparray)
  };


  return (
    <div className="max-w-full  bg-black text-white flex flex-col relative min-h-screen scroll-mb-10" ref={autoScrollRef}>
      <NavBar />
      <HelpDefault/>
      {text.map((t,index)=>{
       return <CommandBlock key={index} command={t} response={response[index]} />
      })
    }
    </div>
   

    
  
  );
}
