import React, { useEffect } from "react";
import logo2 from "../Assests/images/logo.png";
import logoRight1 from "../Assests/images/name1.png";
import logoLeft1 from "../Assests/images/name2.png";
import profile from "../Assests/images/profilepic.jpg";
import ProjectL from "../Assests/images/projectimg-2.jpg";
import ProjectC from "../Assests/images/image2.jpeg";
import ProjectR from "../Assests/images/cycle2.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Experience from "./Experience";

const ProjectsData = [
  {
    id: "1",
    name: "Home Automation",
    image: ProjectL,
    iconLink:
      "https://drive.google.com/drive/folders/1q3cRWrjxySLznXcKsheIg2WiTGKtsAnW?usp=sharing",
    aos: "zoom-out-right",
  },
  {
    id: "2",
    name: "Vending Machine",
    image: ProjectC,
    iconLink:
      "https://drive.google.com/drive/folders/1ONTOpivdQiRzZr6ELmZ61kLiVZlJFk1n?usp=sharing",
    aos: "zoom-out",
  },
  {
    id: "3",
    name: "Electrical cycle",
    image: ProjectR,
    iconLink:
      "https://drive.google.com/drive/folders/1XG-_1LC9PZpqj9iJdUeVoinW5A3zG8IZ?usp=sharing",
    aos: "zoom-out-left",
  },
];

function Ajith() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Portfolio1" style={{ width: "100vw" }}>
      <div className="logo-nav">
        <div className="logo-2">
          <div className="logo">
            <Link to="/">
              <img
                src={logo2}
                alt="Logo"
                className="logo2"
                style={{ height: "50px", width: "50px" }}
              />
            </Link>
          </div>
          <div className="logo-Name-1">
            <img src={logoRight1} alt="logoRight" className="logo-RightName1" />
            <img src={logoLeft1} alt="logoleft" className="logo-LeftName2" />
          </div>
          <div style={{ display: "flex" }}>
            <a
              href="/Ajithkumar resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3"
            >
              CV
            </a>
            <a
              href="https://drive.google.com/drive/folders/1XBf268PVYfvYixI4kwc4bET3Dkx22gfH"
              className="btn-4"
            >
              DRIVE
            </a>
          </div>
        </div>
        <div className="nav-2">
          <ul className="list-2">
            <li className="li-list">
              <a
                href="http://www.linkedin.com/in/ajith-kumar-v-5671862a2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="li-list">
              <Link to="/">
                <span>HOME</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content" data-aos="fade-up">
        <div className="profile">
          <img
            src={profile}
            alt="profile"
            className="profile"
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className="main-content-1">
          <h1>Hi! Meet AJITH KUMAR V</h1>
          <h2>
            Founder-Shine Craft Technologies
            <br /> IOT
          </h2>
        </div>
      </div>
      <div className="profile-projects">
        <h2 data-aos="fade-up">PRODUCTS CRAFTED</h2>
        <div className="profile-2" data-aos="fade-up">
          <div className="profile-line"></div>
          <div className="profile-para">
            <p>
              As the founder of Shine Craft Technologies, I bring over 6+ years
              of experience <br></br> as an innovative and creative EEE Engineer
              specializing in designing and <br></br> developing of IOT
              products. Throughout my career, I have successfully <br></br>
              developed and executed over 250 projects andlaunched more than{" "}
              <br></br> 3 products. My unwavering motivation to continually
              develop my skills and grow <br></br> professionally drives me to
              lead our company with a relentless pursuit of innovation.{" "}
              <br></br>I am confident in our ability to generate groundbreaking
              ideas and deliver <br></br> exceptional solutions.
            </p>
          </div>
        </div>
        <div className="Project-page1">
          {ProjectsData.map((item, index) => (
            <div
              className={`imgCon ${index < 3 ? "initial-cards" : ""}`}
              key={item.id}
              data-aos={index < 3 ? "slide-right" : item.aos}
            >
              <div
                className="img-cont"
                style={{
                  position: "absolute",
                  marginLeft: "7.1%",
                  marginTop: "90%",
                  color: "#595a5a",
                  zIndex: 1,
                }}
              >
                <div className="Project-Name">
                  {item.name}
                  <a
                    href={item.iconLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsArrowUpRightCircleFill
                      className="project-icon"
                      size={32}
                    />
                  </a>
                </div>
              </div>
              <div>
                <img
                  className="ProjecImage"
                  src={item.image}
                  alt={item.name}
                  style={{
                    border: "none",
                    borderRadius: "35px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Experience />
    </div>
  );
}

export default Ajith;
