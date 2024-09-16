import React from "react";

const Test = () => {
  return (
    <div className="bg-black  w-screen text-white">
      <div className="border-green border-4 h-52 w-52 ">1</div>
      <div className="border-green border-4 h-52 w-52">2</div>
      <div className="border-green border-4 h-52 w-52 sticky top-0 bg-green-200">
        3
      </div>
      <div className="border-green border-4 h-52 w-52 bg-red-500">4</div>
      <div className="border-green border-4 h-52 w-52">5</div>
      <div className="border-green border-4 h-52 w-52">6</div>
    </div>
  );
};

export default Test;
