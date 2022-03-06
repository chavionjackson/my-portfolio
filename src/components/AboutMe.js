import React from "react";
import me from "../images/me2.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5" style={{ backgroundColor: "grey", maxWidth: "fit-content" }} >
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
            Passionate front-end web developer with experience using JavaScript,
            HTML5, CSS and React JS to build all aspects of the user experience
            and user interface for client-facing landing pages. In my spare time
            I enjoy gaming, spending time with my family, working out or hikes
            with my dogs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
