import React from "react";
import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Tacoma, Washington</p>
            </div>
            <div className="d-flex">
              <a href="tel:480-238-3561">480-238-3561</a>
            </div>
            <div className="d-flex">
              <p>chavionj@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link href="#" to="home" className="footer-nav">
                  Home
                </Link>
                <br />
                <Link href="#" to="about" className="footer-nav">
                  About me
                </Link>
                <br />
                <Link href="#" to="services" className="footer-nav">
                  Services
                </Link>
              </div>
              <div className="col">
                {/* <a className="footer-nav">Experience</a> */}
                <br />
                <Link href="#" to="portfolio" className="footer-nav">
                  Portfolio
                </Link>
                <br />
                <Link href="#" to="contacts" className="footer-nav">
                  Contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a href="https://github.com/chavionjackson">
                <AiFillGithub className="mx-3" size={36} />
              </a>
              <a href="https://www.linkedin.com/in/chavionj">
                <AiFillLinkedin className="mx-3" size={36} />
              </a>
              {/* <iframe download="" src="public/resumse.pdf"> */}
                {/* <CgFileDocument className="mx-3" size={36} /> */}
              {/* </iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
