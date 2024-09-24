"use client";

import React from "react";

const projectdescriptions = [
  {
    name: "Thaali - The Digital Restaurant App",
    description:
      "Thaali is a feature-rich digital platform designed to enhance the dining experience by providing an intuitive and efficient way for restaurants to manage orders. This app allows customers to browse menus, place orders, pay the bill, and review the service. On the other side, it enables restaurant vendors to update menus, manage orders, track bills, and receive customer feedback.",
    stack_used: "Express.js, Flutter, PostgreSQL",
    role: "Backend Developer",
    link: "https://github.com/AnishCodeth/thaali_the-untold",
  },
  {
    name: "Torrent Client",
    description:
      "A custom-built torrent client designed to download files specified in a given torrent file. It uses the UDP protocol to get peers via the tracker and TCP/IP protocol to connect to peers and request pieces. The project focuses on efficient file-sharing while maintaining network stability and speed.",
    stack_used: "Node.js, TCP/IP, UDP",
    role: ".*",
    link: "https://github.com/AnishCodeth/torrent-client",
  },
  {
    name: "Job Finder",
    description:
      "Job Finder is an application built to help users search and apply for jobs. It includes features like filtering by job category, location, and company. It also allows employers to post job listings, manage applications, and connect with potential candidates.",
    stack_used: "Node.js, MongoDB",
    role: "Backend Developer",
    link: "https://github.com/AnishCodeth/job-finder",
  },
];

const Projects = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg max-w-4xl mx-auto space-y-10 text-white">
      {projectdescriptions.map((project, index) => (
        <div key={index}>
          <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
          <p className="text-lg leading-relaxed mb-6">{project.description}</p>
          <h2 className="text-2xl font-semibold mb-2">Stacks used:</h2>
          <p className="text-lg mb-6">{project.stack_used}</p>
          <p className="text-lg">
            <span className="font-semibold">Role:</span> {project.role}
          </p>
          {project.link && (
            <p className="text-lg">
              <span className="font-semibold">Link:</span>{" "}
              <a
                href={project.link}
                target="_blank"
                className="decoration-solid text-green-600 hover:text-green-500"
              >
                {project.link}
              </a>
            </p>
          )}
          <hr className="bg-black my-4" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
