import React from "react";

const DropBox = ({ state }) => {
  if (!state) return null; // Return null if state is not present

  return (
    <div className="grid grid-cols-1 gap-3 bg-zinc-600 text-white w-48 shadow-lg mt-2 justify-center p-2 absolute right-8">
      <div className="hover:bg-zinc-500 cursor-pointer text-center">Help</div>
      <div className="hover:bg-zinc-500 cursor-pointer text-center">About</div>
      <div className="hover:bg-zinc-500 cursor-pointer text-center">
        {state}
      </div>
    </div>
  );
};

export { DropBox };
