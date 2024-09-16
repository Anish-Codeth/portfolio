"use client";
import React, { useState, useRef, useEffect } from "react";
import responseOfCommand from "./response";
import About from "../card/about";
import Card from "../card/page";

const CommandBlock = ({ index, enterFunctionProps, token }) => {
  const [text, setText] = useState("");
  const commandBlockRef = useRef(null); // Ref to manage focus
  const [response, setResponse] = useState("");

  // Automatically focus on the command block if it's the current active block
  useEffect(() => {
    if (token === index) {
      commandBlockRef.current.focus();
    }
  }, [token, index]);

  const updateText = (e) => {
    if (index !== token) return;

    switch (e.key) {
      case "Backspace":
        setText((prevText) => prevText.slice(0, -1));
        break;
      case "Enter":
        if (text === "clear") {
          enterFunctionProps(-index, 1); // Clear the current block
        } else {
          setResponse(<Card title={text} />);
          enterFunctionProps(1, 0); // Move to the next block
        }
        break;
      default:
        if (e.key.length === 1) {
          setText((prevText) => prevText + e.key);
        }
        break;
    }
  };

  return (
    <div
      className="focus:outline-none p-2"
      tabIndex={0}
      ref={commandBlockRef}
      onKeyDown={updateText}
    >
      <p className="text-green-500 font-bold  mr-4 float-left">
        anishsubedi@pop-os:~$
      </p>
      <p className=" ">{text}</p>

      {response}
    </div>
  );
};

export default CommandBlock;
