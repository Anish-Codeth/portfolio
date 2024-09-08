"use client";
import React, { useState } from "react";

const CommandBlock = ({ enterFunctionProps ,indexProps}) => {
  const [text, setText] = useState("");
  const [index,setIndex]=useState(indexProps)

  const updateText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "Backspace":
        setText(text.slice(0, -1));
        break;
      case "Delete":
        break;
      case "ArrowLeft":
        break;
      case "ArrowRight":
        break;
      case "Enter":
        enterFunctionProps(1);

        break;
      case "Tab":
        break;
      default:
        if (e.key.length === 1) {
          setText(text + e.key);
        }
        break;
    }
  };

  return (
    <div
      className="flex flex-grow  p-2 m-0"
      tabIndex={0} // Make the div focusable
      {index=onKeyDown={updateText}} // Handle key press events
    >
      <div className="constant">
        <p className="text-green-500 font-bold mr-4">anishsubedi@pop-os:~$ </p>
      </div>
      <div className="text-white  flex-grow">
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default CommandBlock;
