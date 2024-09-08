"use client";

import React, { useState } from "react";
import NavBar from "./navbar/page";
import CommandBlock from "./textbody/page";

export default function Terminal() {
  const [enter, setEnter] = useState(1);

  // Function to update the state
  const updateText = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const [text, setText] = useState("*");
    const [index, setIndex] = useState(0);

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
    <div className="max-w-full border-4 border-red-500 bg-black text-white ">
      <NavBar />
      {Array.from({ length: enter }, (_, index) => (
        <CommandBlock key={index} text={text} />
      ))}
    </div>
  );
}
