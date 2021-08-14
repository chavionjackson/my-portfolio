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
  // Netflix
  // const openPopupboxNetflix = () => {
  //   const content = (
  //     <>
  //       <img
  //         className="portfolio-image-popupbox"
  //         src={netflix}
  //         alt="Netflix Clone Project..."
  //       />
  //       <p>
  //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
  //         illo est expedita quos adipisci suscipit unde itaque qui perferendis.
  //       </p>
  //       <b>GitHub:</b>{" "}
  //       <a
  //         className="hyper-link"
  //         onClick={() =>
  //           window.open("https://github.com/8020Coding/netflix-project")
  //         }
  //       >
  //         https://github.com/8020Coding/netflix-project
  //       </a>
  //     </>
  //   );
  //   PopupboxManager.open({ content });
  // };

  // const popupboxConfigNetflix = {
  //   titleBar: {
  //     enable: true,
  //     text: "Netflix clone project.",
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500,
  // };

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
          Real Estate App created using React and styled components. Find your
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

  // Task Manager React and Redux Project
  // const openPopupboxTaskManager = () => {
  //   const content = (
  //     <>
  //       <img
  //         className="portfolio-image-popupbox"
  //         src={taskManager}
  //         alt="Task Manager React and Redux Project..."
  //       />
  //       <p>
  //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
  //         illo est expedita quos adipisci suscipit unde itaque qui perferendis.
  //       </p>
  //       <b>Demo:</b>{" "}
  //       <a
  //         className="hyper-link"
  //         onClick={() =>
  //           window.open(
  //             "https://react-redux-task-manager.herokuapp.com/",
  //             "_blank"
  //           )
  //         }
  //       >
  //         https://react-redux-task-manager.herokuapp.com/
  //       </a>
  //       <br />
  //       <b>GitHub:</b>{" "}
  //       <a
  //         className="hyper-link"
  //         onClick={() =>
  //           window.open("https://github.com/8020Coding/task-manager", "_blank")
  //         }
  //       >
  //         https://github.com/8020Coding/task-manager
  //       </a>
  //     </>
  //   );
  //   PopupboxManager.open({ content });
  // };

  // const popupboxConfigTaskManager = {
  //   titleBar: {
  //     enable: true,
  //     text: "Real Estate React Project.",
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500,
  // };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">my work</h1>
        <div className="new-style">
          {/* <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
          {/* - */}
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
          {/* - */}
          {/* <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={taskManager}
              alt="Task Manager React and Redux Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
        </div>
      </div>
      {/* <PopupboxContainer {...popupboxConfigNetflix} /> */}
      <PopupboxContainer {...popupboxConfigRealEstate} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      {/* <PopupboxContainer {...popupboxConfigTaskManager} /> */}
    </div>
  );
};

export default Pofrfolio;
