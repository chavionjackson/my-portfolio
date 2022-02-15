import React from "react";
// import netflix from "../images/netflix.png";
import realEstate from "../images/real-estate.png";
import portfolio from "../images/portfolio.png";
// import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = () => {
  // City Guide App
  const openPopupboxRealEstate = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={realEstate}
          alt="Real Estate Project..."
        />
        <p>
          Real Estate App created using React, Redux and Styled Components. Find your
          perfect home from anywhere around the globe.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://real-estate1.vercel.app/", "_blank")
          }
        >
          https://real-estate1.vercel.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/chavionjackson/real-estate/",
              "_blank"
            )
          }
        >
          https://github.com/chavionjackson/real-estate/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRealEstate = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio Project..."
        />
        <p>Poftfolio, created using React and Material UI</p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://chavion-j.com/", "_blank")}
        >
          https://chavion-j.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/chavionjackson/my-portfolio",
              "_blank"
            )
          }
        >
          https://github.com/chavionjackson/my-portfolio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };


  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">my work</h1>
        <div className="new-style">
          <div className="portfolio-image-box" onClick={openPopupboxRealEstate}>
            <img
              className="portfolio-image"
              src={realEstate}
              alt="Real Estate Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Portfolio React and Material UI Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigRealEstate} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
    </div>
  );
};

export default Pofrfolio;
