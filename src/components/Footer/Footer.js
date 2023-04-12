import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10  bg-footer-bg bg-cover bg-no-repeat text-white ">
      <div>
        
        <p className="">
          Md Abdullah Al Masud
          <br />
          mdabdullahal304@gmail.com
        </p>
      </div>
      <div>
        <span className="footer-title ">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/mdabdullamasud.rana">
            <FaFacebook className="text-blue-700 text-3xl"/>
          </a>
          <a href='https://www.linkedin.com/in/md-abdullahalmasud/'>
          <FaLinkedin className="text-blue-700 text-3xl"/>
          </a>
          <a href='https://github.com/mdmasudrana271'>
          <FaGithub className=" text-3xl"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
