import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://resume-of-abdullah-al-masud-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);
  return (
    <section className="my-10 text-lime-400">
      <h2 className="typewriter text-center text-5xl font-bold pb-5">
        <Typewriter
          options={{
            strings: ["My Project"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-5">
        {projects.map((project) => (
          <div key={project.id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <PhotoProvider>
                <PhotoView src={project.img1}>
                  <img src={project.img1} alt=""/>
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project.name}
                <div className="badge badge-secondary">
                  <a href={project?.live}>Live Link</a>
                </div>
              </h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <a href={project?.client}>Client side</a>
                </div>
                <div className="badge badge-outline">
                  <a href={project?.server}> Server side</a>
                </div>
                <div className="badge badge-outline">
                  <Link to={`/details/${project._id}`}>Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
