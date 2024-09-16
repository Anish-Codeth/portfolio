"use client";

import React, { useState } from "react";
import { DropBox } from "./dropbox";

const NavBar = () => {
  const [dropClicked, setDropClicked] = useState(false);
  return (
    <div className="navbar  sticky w-screen top-0 z-10">
      <div className="bg-zinc-600 text-white font-bold  flex justify-between p-2">
        <div className="icon w-full shrink flex items-center">
          <i className="bi bi-terminal-plus text-slate-200 hover:text-white"></i>
        </div>

        <div className="hi w-full text-center flex items-center">
          anishsubedi@pop-os
        </div>

        <div className="right flex w-full justify-end md:flex-row flex-col items-center">
          <div className="hi mx-4 hover:bg-zinc-500 p-1">
            <i className="bi bi-search"></i>
          </div>
          <div
            className="hi mr-4 hover:bg-zinc-500 p-1"
            onClick={() => setDropClicked(!dropClicked)}
          >
            <i className="bi bi-list"></i>
          </div>
          <div className="hi mx-4 hover:bg-zinc-500 p-1">
            <i className="bi bi-dash"></i>
          </div>
          <div className="cross mr-4  p-1 ">
            <i className="bi bi-x-circle  text-red-400 hover:text-red-500"></i>
          </div>
        </div>
      </div>

      <DropBox state={dropClicked} />
    </div>
  );
};

export default NavBar;
