import React from "react";
import bannar from "./../../assets/image/masud.png";
import './Home.css'

const Home = () => {

    const downloadResume = ()=>{
        fetch('Resume Of Md Abdullah Al Masud.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Resume Of Md Abdullah Al Masud.pdf';
              alink.click();
          })
      })
      }

  return (
    <section className="md:flex justify-between items-center gap-3 my-10 w-11/12 mx-auto">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h1 className="text-3xl font-bold mb-3">Hi My Name Is</h1>
        <h3 className="text-5xl font-bold mb-3" id="">Md Abdullah Al Masud</h3>
        <p className="typewriter text-lg mb-3">I am Mern Stack Web Developer and I love to code.</p>
        <button className="btn btn-outline btn-success mt-5" onClick={downloadResume}>Resume</button>
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
          className="rounded-full bg-slate-500 w-[500px] h-[500px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
