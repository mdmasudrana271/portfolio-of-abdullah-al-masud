import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from '../../animatin.json'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);
  return (
    <section className="mt-10">
      <h2 className="typewriter text-center text-5xl font-bold pb-5">
        My Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
        {projects.map((project) => (
          <div key={project.id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <Lottie loop={true} animationData={animation}></Lottie>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project.name}
                <div className="badge badge-secondary"><a href={project?.live}>App</a></div>
              </h2>
              <p>
                <span className="text-lg font-bold">Overview</span>:{" "}
                {project.Overview}
              </p>
              <p>
                <span className="text-lg font-bold">Technologies</span>:{" "}
                {project.Technologies}
              </p>
              <p>{project?.tech1}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline"><a href={project?.client}>Server side</a></div>
                <div className="badge badge-outline"><a href={project?.server}>Client side</a></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
