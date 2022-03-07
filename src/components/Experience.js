import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div id="experience" className="services">
      <h1 className="py-5">my experience</h1>
      <div className="container">
        <div
          className="row"
          style={{ paddingTop: "1rem", justifyContent: "space-around" }}
        >
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3 style={{ fontWeight: "bolder" }}>
                Family Promise of Spokane(Apprenticeship)
              </h3>
              <p>
                <i>- UX/Frontend Engineer</i>
              </p>
              <p style={{ fontWeight: "bolder" }}>
                <ul>
                  <li>
                    Built a React admin portal with Ant Design styled
                    components, reading API data into Redux state management
                  </li>
                  <li>
                    Met stakeholders weekly to take feedback to add new features
                    or update existing ones to their exact specification
                  </li>
                  <li>
                    Completed a new style guide in Figma with a component
                    library to guide web design; planned React architecture
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3 style={{ fontWeight: "bolder" }}>McKesson</h3>
              <p>
                <i>- Insurance Specialist</i>
              </p>
              <p style={{ fontWeight: "bolder" }}>
                <ul>
                  <li>
                    Assisting leadership with coaching and development for work
                    peers, responsible for high levels of productivity daily
                  </li>
                  <li>
                    Reviewing on average 30 patient records a day to verify
                    insurance eligibility and update client records in
                    Salesforce
                  </li>
                  <li>
                    Following up with members & applicants on denials, late
                    payments, extensions, and other special circumstances{" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3 style={{ fontWeight: "bolder" }}>
                Pace American Group (AT&T)
              </h3>
              <p>
                <i>- Technical Specialist, Level 1</i>
              </p>
              <p style={{ fontWeight: "bolder" }}>
                <ul>
                  <li>
                    Navigated proprietary software to provide advanced tech
                    support to assist users in troubleshooting network issues{" "}
                  </li>
                  <li>
                    Communicated with customers to verify work order changes and
                    provide basic technical and billing support{" "}
                  </li>
                  <li>
                    Trained up to 60 users per day on technical resources,
                    including desktops, laptops and mobile devices{" "}
                  </li>
                  <li>
                    Engaged in a team to share best practices/process
                    improvements for team members, field technicians, &
                    customers
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
