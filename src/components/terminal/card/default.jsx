import React from "react";

const HelpDefault = ({ props }) => {
  return (
    <div className="mb-2  flex justify-center p-4" onClick={() => props(false)}>
      <div className=" border-4w-fit">
        <h1 className="font-bold underline decoration-solid p-3">Tips</h1>
        <ol className="list-disc list-inside">
          <li>write help as command for getting list of commands</li>
        </ol>
      </div>
    </div>
  );
};

export default HelpDefault;
