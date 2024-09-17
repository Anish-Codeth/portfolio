"use client";

import React, { useState } from "react";
import ResumeViewer from "./resumeViewer";

const About = () => {
  const [showResume, setShowResume] = useState(false);
  return (
    <div>
      <p>
        Hi, I'm Anish, a backend developer with a passion for building scalable,
        efficient server-side applications using Node.js, Express, and various
        databases like PostgreSQL and MongoDB.
      </p>
      <div className=" flex flex-col items-center p-2 ">
        <div className="hover:cursor-pointer">
          <div
            className="border-4 mt-2 p-2 rounded-md  bg-gray-50 text-black hover:bg-gray-300 text-center"
            onClick={(e) => setShowResume(true)}
          >
            View Resume
          </div>
          <a download="resume.pdf" href="Resume.pdf">
            <div className="border-4 mt-2 p-2 rounded-md  bg-gray-50 text-black hover:bg-gray-300 ">
              <i className="bi bi-download mr-3"></i>
              Download Resume
            </div>
          </a>
        </div>
      </div>
      {showResume ? (
        <ResumeViewer showFunction={(e) => setShowResume(e)} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default About;
