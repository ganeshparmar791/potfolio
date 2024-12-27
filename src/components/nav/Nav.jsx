import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquare } from "react-icons/bi";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("true");

  return (
    <nav>
      <a
        href="#top"
        onClick={() => setActive("true")}
        className={active === "true" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("experience")}
        className={active === "experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("portfolio")}
        className={active === "portfolio" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : ""}>
        <BiMessageSquare />
      </a>
    </nav>
  );
};

export default Nav;
