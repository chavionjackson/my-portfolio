import React from "react";
import logo from "../images/test logo2.jpg";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "black" }}
      className="navbar navbar-expand-lg fixed-top"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item active">
              <Link to="home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" offset={-110} className="nav-link">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="experience" offset={-110} className="nav-link" href="#">
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" offset={-110} className="nav-link">
                projects
              </Link>
            </li>

            <li className="nav-item">
              <Link to="contacts" offset={-110} className="nav-link">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
