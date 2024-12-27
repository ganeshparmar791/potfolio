import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ganesh-singh-parmar-a61538248"
        target="__balnk">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ganeshparmar791" target="__balnk">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/_ganeshparmar_/" target="__balnk">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
