import React from "react";
import CV from "../../assets/cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
        <AiOutlineDownload className="icon" />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
        <MdOutlineContactMail className="icon" />
      </a>
    </div>
  );
};

export default CTA;
