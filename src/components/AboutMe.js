import React from "react";
import me from "../images/me2.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p style={{ fontWeight: "bolder" }} >
            Hello! I am Chavion. A passionate Full Stack Web Developer who loves
            building user-friendly websites with, JavaScript, React JS and Node
            JS. I love structure and order, I also stand for quality. I enjoy
            spending time on fixing the little details and optimizing web apps.
            Dedicated and motivated teammate, I truly believe you learn faster
            working with a team. "Two heads are better than one".
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
