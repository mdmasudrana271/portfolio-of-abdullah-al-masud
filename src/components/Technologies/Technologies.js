import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Technologies = () => {
  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    fetch("https://resume-of-abdullah-al-masud-server.vercel.app/technologies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTechnology(data);
      });
  }, []);

  return (
    <section className="mt-10 text-lime-400 mx-5">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
        My Technical Skills
      </h1>
      <p className="text-center text-xl">
        <Typewriter
          options={{
            strings: ["Technologies I’ve been working with"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-20">
        {technology.map((tech) => (
          <div
            data-aos="zoom-in-up"
            data-aos-delay="50"
            key={tech._id}
            className="card card-compact w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img src={tech.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tech.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
