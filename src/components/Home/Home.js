import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import bannar from "./../../assets/image/masud.png";
import "./Home.css";
import Typewriter from "typewriter-effect";

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
            
          </p>
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
          <img className="mask mask-circle bg-gradient-to-r from-cyan-500 to-blue-500 h-96" src={bannar} alt='' />
        </div>
      </div>
      
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
