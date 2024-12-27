import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_78d35fk",
        "template_reau3du",
        form.current,
        "cIIAJzwSEW1Zvd_mZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset(); // This resets the form elements
      setName("");      // Reset the state variables
      setEmail("");
      setMessage("");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gspjnv@gmail.com</h5>
            <a href="mailto:gspjnv@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>_ganeshparmar_</h5>
            <a
              href="https://www.instagram.com/_ganeshparmar_/"
              target="__blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Ganesh Parmar</h5>
            <a
              href="https://www.linkedin.com/in/ganesh-singh-parmar-a61538248"
              target="__blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="reply_to"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
