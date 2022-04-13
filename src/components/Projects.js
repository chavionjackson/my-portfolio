import React from "react";
import realEstate from "../images/real-estate.png";
import utahJazz from "../images/utah-jazz.png";
import anywhereFit from "../images/anywhere_fit.png";
import sauti from "../images/sauti_mp.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  const popupboxConfigureProjects = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Real Estate App
  const openPopupboxRealEstate = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={realEstate}
          alt="Real Estate Project..."
        />
        <p>
          ● Replica of a Real Estate app created just for fun using React and
          Redux to manage app data
          <br />● Seller’s page fetches an API for the images and fake people
          data, photos being used are from open-source site{" "}
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

  // Sauti MarketPlace
  const openPopupboxSauti = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={sauti}
          alt="Sauti MarketPlace..."
        />
        <p>
          ● Collaborated on a 5-person team to produce an app for buyers and
          sellers of goods in South Africa
          <br />
          ● Managed the state of the entire application using Redux along with
          styling the UI for the seller and buyer pages
          <br />● Using React & CSS to style buyer/seller pages, worked with
          backend devs using Postman to verify correct APIs
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/tt-2-african-market-build/frontend/tree/master",
              "_blank"
            )
          }
        >
          https://github.com/tt-2-african-market-build/frontend/tree/master
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // Anywhere Fitness
  const openPopupboxAnywhereFit = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={anywhereFit}
          alt="Anywhere Fitness..."
        />
        <p>
          ● Collaborated with two Front End developers to design a landing page
          for project allowing users to work from home
          <br />
          ● Demonstrated leadership project to ensure success of the group,
          reviewing React code and pair programming
          <br />● Owned the initiation of the login/register form and presented
          final content, developed with React, HTML, & CSS{" "}
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/anywhere-fitness-6/af6/tree/main",
              "_blank"
            )
          }
        >
          https://github.com/anywhere-fitness-6/af6/tree/main
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // Utah Jazz Seating
  const openPopupboxUtahJazz = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={utahJazz}
          alt="Utah Jazz..."
        />
        <p>
          ● Implemented a two page website replicating the premium seating for
          the Utah Jazz professional basketball team.
          <br />● Webpages were created using Next.Js and Tailwind CSS
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/chavionjackson/Jazz-Premium-Seating",
              "_blank"
            )
          }
        >
          https://github.com/chavionjackson/Jazz-Premium-Seating
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  return (
    <div id="projects" className="projects-wrapper">
      <div className="">
        <h1 className="text-uppercase text-center py-5">my projects</h1>
        <div className="new-style">
          <div className="projects-image-box" onClick={openPopupboxRealEstate}>
            <img
              className="projects-image"
              src={realEstate}
              alt="Real Estate Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
            <ul>
              <li style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
                Real Estate
              </li>
            </ul>
          </div>
          {/* - */}
          <div className="projects-image-box" onClick={openPopupboxSauti}>
            <img
              className="projects-image"
              src={sauti}
              alt="Sauti MarketPlace..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
            <ul>
              <li style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
                Sauti MarketPlace
              </li>
            </ul>
          </div>
          <div className="projects-image-box" onClick={openPopupboxAnywhereFit}>
            <img
              className="projects-image"
              src={anywhereFit}
              alt="Anywhere Fitness..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
            <ul>
              <li style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
                Anywhere Fitness
              </li>
            </ul>
          </div>
          <div className="projects-image-box" onClick={openPopupboxUtahJazz}>
            <img className="projects-image" src={utahJazz} alt="Utah Jazz..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
            <ul>
              <li style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
                Utah Jazz
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigureProjects} />
    </div>
  );
};

export default Projects;
