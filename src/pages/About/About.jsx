import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import edelweiss2 from "../../assets/edelweiss2.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <Link to="/">
            <h2>Back</h2>
          </Link>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={edelweiss2} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">Workflow</h2>
            <p className="fs-15">Explain</p>
            <p className="fs-15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
