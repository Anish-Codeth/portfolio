import React from "react";

const CommandError = ({ command }) => {
  return (
    <div>
      <p>{command}: command not found</p>
      <p >write <span className="text-red-500">help</span> as command for help</p>
    </div>
  );
};

export default CommandError;
