import React, { useCallback } from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import bannar from "./../../assets/image/masud.png";
import "./Home.css";
import Typewriter from "typewriter-effect";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const downloadResume = () => {
    fetch("Resume Of Md Abdullah Al Masud.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume Of Md Abdullah Al Masud.pdf";
        alink.click();
      });
    });
  };

  // Particles engine

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section className="mt-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="lg:flex justify-between items-center gap-3 mb-10 mx-10 text-lime-400">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full"
        >
          <h1 className="text-3xl font-bold mb-3">Hi My Name Is</h1>
          <h3 className="text-5xl font-bold mb-3" id="">
            Md Abdullah Al Masud
          </h3>
          <p className="typewriter text-lg mb-3"></p>
          <Typewriter
            options={{
              strings: ["I am Mern Stack Web Developer and I love to code."],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
          <button
            className="btn btn-outline btn-success mt-5"
            onClick={downloadResume}
          >
            Download Resume
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            className="mask mask-circle bg-gradient-to-r from-cyan-500 to-blue-500 h-72 md:h-96"
            src={bannar}
            alt=""
          />
        </div>
      </div>

      <div className="mt-44">
        <About></About>
      </div>

      <div className="mt-52">
        <Technologies></Technologies>
      </div>
      <div className="mt-40">
        <Projects></Projects>
      </div>
    </section>
  );
};

export default Home;
