import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/images/myPic.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Rupal Burger Wala</h4>
          <p>Burgers that won’t break your heart.</p>
          <p>
            Explore the various type of food and burgers.Click below to see the
            menu
          </p>
          <Link>
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Rupal Singh</h3>
            </div>
            <p>
              I am Rupal Singh,the founder of rupal burger wala.Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
