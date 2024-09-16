import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <a
          href="https://www.linkedin.com/in/anish-subedi-33b881239/"
          target="_blank"
        >
          <i className="bi bi-linkedin text-3xl text-blue-400 hover:scale-110 hover:text-blue-500  inline-block"></i>
        </a>
      </div>
      <div>
        <a href="https://github.com/Anish-Codeth" target="_blank">
          <i className="bi bi-github text-3xl  hover:scale-110 inline-block"></i>
        </a>
      </div>
      <div>
        <a href="https://x.com/codeth888" target="_blank">
          <i className="bi bi-twitter inline-block text-3xl text-blue-300 hover:scale-110 hover:text-blue-400 "></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
