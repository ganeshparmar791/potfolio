import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo">
        GSP
      </a>
      <ul className="permanent__links">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/_ganeshparmar_/">
          <FaInstagram />
        </a>
        <a href="https://github.com/ganeshparmar791">
          <IoLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/ganesh-singh-parmar-a61538248">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;GSP. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
