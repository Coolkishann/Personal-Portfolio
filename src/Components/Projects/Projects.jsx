import React from "react";
import MernProjects from "./MernProjects";

const Projects = () => {
  const data = [
    {
      value: "Projects",
      desc: <MernProjects />,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center items-center px-3">
      <h1 className="text-3xl font-bold text-blue-900 text-center border-spacing-2 border-b-2 border-b-blue-600 my-10">
        Projects
      </h1>
      {data.map(({ value, desc }) => (
        <div key={value} className="mb-20">
          {desc}
        </div>
      ))}
    </div>
  );
};

export default Projects;
