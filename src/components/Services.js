import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p style={{ fontWeight: "bold" }}>
                A website should be designed for the people who will use it, so
                that's exactly what I do. User focused design should be the
                primary goal of any website.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>Web Development</h3>
              <p style={{ fontWeight: "bold" }}>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>

              <h3>Facebook Ads SMM</h3>
              <p>
                Your potential clients well see your services or product on
                Facebook
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Google Ads</h3>
              <p>
                Your service or product will appear at the top of the Google
                search
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
