import React from "react";

const CommandError = ({ command }) => {
  return (
    <div>
      <p>{command}: command not found</p>
      <p>write --help for help</p>
    </div>
  );
};

export default CommandError;
