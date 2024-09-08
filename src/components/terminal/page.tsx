"use client";

import React, { useState } from "react";
import NavBar from "./navbar/page";
import CommandBlock from "./textbody/page";

export default function Terminal() {
  const [enter, setEnter] = useState(0);
  // Function to update the state
  const enterFunction = (e) => {
    setEnter(enter + e);
  };

  return (
    <div className="max-w-full border-4 border-red-500 bg-black text-white">
      <NavBar />
      {Array.from({ length: enter + 1 }, (_, index) => (
        <CommandBlock
          key={index}
          index={index}
          enterFunctionProps={enterFunction}
          token={enter}
        />
      ))}
    </div>
  );
}
