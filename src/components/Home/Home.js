import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import bannar from "./../../assets/image/masud.png";
import "./Home.css";

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

  return (
    <section className="my-10">
      <div className="lg:flex justify-between items-center gap-3 mb-10 mx-10">
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
          <p className="typewriter text-lg mb-3">
            I am Mern Stack Web Developer and I love to code.
          </p>
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
            src={bannar}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-[700px] lg:h-[450px] md:w-[500px] md:h-[500px]"
            alt=""
          />
        </div>
      </div>
      {/* <div className="mt-52 mx-10 md:flex items-center justify-between">
        <div className="md:w-1/2" data-aos="fade-right">
          <h1 className="text-3xl mb-5 font-bold">About Me</h1>
          <p className="text-xl">
            I'm a front-end developer near Sirajganj,Bangladesh.Coding has
            become a perfect union of my two favourite passions and I love
            seeing the results of my efforts helping the user's experience I'm
            finding unique solutions to complex problems and i'm working with
            Figma, HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS,
            NodeJs, ExpressJs.
          </p>
        </div>
        <div className="" data-aos="fade-left">
          <h1 className="text-3xl mb-5">Skills</h1>
          <div className="grid grid-cols-1 gap-5">
            <div className="flex items-center justify-between">
              <span className="text-xs">React JS</span>
              <span className="text-xs">80%</span>
            </div>
            <progress
              className="progress progress-success w-[500px]"
              value="80"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <span className="text-xs">Vanilla JS</span>
              <span className="text-xs">80%</span>
            </div>
            <progress
              className="progress progress-success w-[500px]"
              value="80"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <span className="text-xs">Vanilla CSS</span>
              <span className="text-xs">95%</span>
            </div>
            <progress
              className="progress progress-success w-[500px]"
              value="95"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <span className="text-xs">TailwindCss</span>
              <span className="text-xs">100%</span>
            </div>
            <progress
              className="progress progress-success w-[500px]"
              value="100"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <span className="text-xs">Bootstrap</span>
              <span className="text-xs">100%</span>
            </div>
            <progress
              className="progress progress-success w-[500px]"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
      </div> */}
      <div className="mt-52">
        <About></About>
      </div>

      <div className="mt-52">
        <Technologies></Technologies>
      </div>
      <div className="mt-52">
        <Projects></Projects>
      </div>
    </section>
  );
};

export default Home;
