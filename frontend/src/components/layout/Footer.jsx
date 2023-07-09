import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Rupal Burger Wala</h2>
        <p>Because we want you to taste something tastier</p>
        <br />
        <em>Feedback is the breakfast of champions.</em>
        <strong>All rights received @rupalPajiBurger</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://rupalfiredoven.inmyarea.in/">
          <AiFillYoutube />
        </a>
        <a href="https://egypt.burgerking.delivery/">
          <AiFillInstagram />
        </a>
        <a href="https://www.burgerking.in/">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
