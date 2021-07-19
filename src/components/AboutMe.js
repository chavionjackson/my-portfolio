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
          <p style={{ fontWeight: "bolder" }}>
            Chavion is from Tacoma, Washington where he is an aspiring Software
            Developer. He has experience with HTML, CSS, JavaScripts and React
            JS with a focus on interactive websites. Full-stack developer
            experience with handling things like database operations, user
            authentication, and application logic. In his spare time, Chavion
            enjoys outdoor activities such as, hiking, footabll and working out.
            Along with his passion for coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
