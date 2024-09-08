"use client";
import React, { useState, useRef, useEffect } from "react";

const CommandBlock = ({ index, enterFunctionProps, token }) => {
  const [text, setText] = useState("");
  const commandBlockRef = useRef(null); // Ref to manage focus
  const [toogle, setToogle] = useState(1);

  useEffect(() => {
    if (token === index && commandBlockRef.current) {
      commandBlockRef.current.focus();
    }
  }, []);

  const updateText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (index != token) return;

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
        if (text == "clear") enterFunctionProps(-index);
        else enterFunctionProps(1);

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
      className="flex flex-grow  p-2 m-0 focus:outline-none"
      tabIndex={0}
      ref={commandBlockRef}
      onKeyDown={updateText} // Handle key press events
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
