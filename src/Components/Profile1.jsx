import React, { useEffect, useRef } from "react";
import logo2 from "../Assests/images/logo.png";
import logo3 from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
import profile from "../Assests/images/profile.pic-2.jpg";
import ProjectL from "../Assests/images/projectimg-2.jpg";
import ProjectC from "../Assests/images/image2.jpeg";
import ProjectR from "../Assests/images/cycle2.jpg";
import { MdAddCall } from "react-icons/md";
import { HiMiniArrowLongUp } from "react-icons/hi2";
import "animate.css";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const ProjectsData = [
  {
    id: "1",
    name: "Home Automation",
    image: ProjectL,
    iconLink:
      "https://drive.google.com/drive/folders/1q3cRWrjxySLznXcKsheIg2WiTGKtsAnW?usp=sharing",
  },
  {
    id: "2",
    name: "Vending Machine",
    image: ProjectC,
    iconLink:
      "https://drive.google.com/drive/folders/1ONTOpivdQiRzZr6ELmZ61kLiVZlJFk1n?usp=sharing ",
  },
  {
    id: "3",
    name: "Electrical cycle ",
    image: ProjectR,
    iconLink:
      "https://drive.google.com/drive/folders/1XG-_1LC9PZpqj9iJdUeVoinW5A3zG8IZ?usp=sharing ",
  },
];

function Profile1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  const line3Ref = useRef(null);
  const horzLine2Ref = useRef(null);
  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === line3Ref.current) {
            line3Ref.current.classList.add("animate");
            line3Ref.current.classList.remove("reverse-animate");
            line3Ref.current.addEventListener("animationend", () => {
              if (horzLine2Ref.current) {
                horzLine2Ref.current.classList.add("animate");
                horzLine2Ref.current.classList.remove("reverse-animate");
              }
            });
          }
        } else {
          if (entry.target === line3Ref.current) {
            line3Ref.current.classList.remove("animate");
            line3Ref.current.classList.add("reverse-animate");
            if (horzLine2Ref.current) {
              horzLine2Ref.current.classList.remove("animate");
              horzLine2Ref.current.classList.add("reverse-animate");
            }
          }
        }
      });
    }, options);

    if (line3Ref.current) {
      observer.observe(line3Ref.current);
    }

    return () => {
      if (line3Ref.current) {
        observer.unobserve(line3Ref.current);
      }
    };
  }, []);
  return (
    <div className="Portfolio1" style={{ width: "100vw" }}>
      <div className="logo-nav">
        <div className="logo-2">
          <div className="logo">
            <img
              src={logo2}
              alt="Logo"
              className="logo2"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="logo-Name">
            <img src={logoRight} alt="logoRight" className="logo-RightName" />
            <img src={logoLeft} alt="logoleft" className="logo-LeftName" />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
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
        <div class="nav-2">
          <ul class="list-2">
            <li class="li-list">
              <a
                href="http://www.linkedin.com/in/ajith-kumar-v-5671862a2"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li class="li-list">
              <Link to="/">
                {" "}
                <a href="/">HOME</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------------------- */}
      <div className="main-content" data-aos="fade-up">
        <div className="profile">
          <img
            src={profile}
            alt="profile"
            className="profile"
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className="main-conntent-1">
          <h1>Hi! Meets AJITH KUMAR V</h1>
          <h2>
            {" "}
            Founder-Product Development Engineer,<br></br> Electronic Systems
          </h2>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="profile-projects">
        <h2 data-aos="fade-up">PRODUCTS DEVELOPED</h2>
        <div className="profile-2" data-aos="fade-up">
          <div className="profile-line"></div>
          <div className="profile-para">
            <p>
              Innovative and creative EEE Engineer with 5+ years of experience
              in
              <br></br>
              designing and developing electronic systems. I have developed &
              <br></br>
              executed about 250+ projects and 3+ products in my career.
              <br></br>
              Extremely motivated to constantly develop my skills and grow
              <br></br>
              professionally. I am confident in my ability to come<br></br> up
              with interesting Innovative ideas.
            </p>
          </div>
        </div>
        <div className="Project-page1" data-aos="fade-up">
          {ProjectsData.map((item) => {
            return (
              <div className="imgCon" key={item.id}>
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
                    alt="ProjecImage"
                    style={{
                      border: "none",
                      borderRadius: "35px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* --------------------- */}
      <div className="Experiance" style={{ paddingTop: "5%" }}>
        <div className="Head-1">
          <div className="first-head">
            <h3>WHAT A</h3>
          </div>
          <h1>YEAR</h1>
        </div>
        <div className="Container-scroll">
          <div className="line-1" data-aos="fade-up"></div>
          <div className="scroll-name" data-aos="fade-up">
            <h1>scroll</h1>
          </div>
          <div ref={line3Ref} className="line-3"></div>
          <div ref={horzLine2Ref} className="horz-line-2"></div>
        </div>
        {/* --- */}
        <div className="timeline">
          <div className="Year-1" data-aos="fade-up">
            <h2>2017 - 2018</h2>
          </div>

          <div className="vert-left-1"></div>
          <div className="first-p">
            <p
              style={{ textAlign: "left", marginLeft: "15px" }}
              data-aos="fade-up"
            >
              {" "}
              My role is to develop a hardware-embedded<br></br> projectin the
              electrical and electronics<br></br> domain based on the student
              and industry <br></br>requirements. I worked on most of the
              Digital/ <br></br>Analog sensors and communications
            </p>
          </div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-1"></div>
        </div>
        {/*  */}
        <div className="timeline-1">
          <div className="first-p">
            <p style={{ textAlign: "left", marginRight: "15px" }}>
              {" "}
              My role is to design and develop the product,<br></br> covering
              aspects from ideation, prototyping,<br></br> design, and
              commercialization. Below are the<br></br> domains. I have worked
              on during product<br></br> development.
            </p>
          </div>
          <div className="vert-right "></div>
          <div className="Year-2" data-aos="fade-down">
            <h2>2019 - 2022</h2>
          </div>
          <div className="content-1" data-aos="fade-down">
            <h6>
              PRODUCT DEVELOPMENT ENGINEER <br></br>
              <span style={{ fontSize: "9px" }}>TECHTIL INFO SOLUTION</span>
            </h6>
          </div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-2"></div>
        </div>
        {/*  */}
        <div className="timeline-2">
          <div className="content-2" data-aos="fade-down">
            <h6>
              CO FOUNDER AND COO <br></br>
              <span style={{ fontSize: "9px" }}> SCHOPIQ AUTOMATION</span>
            </h6>
          </div>
          <div className="Year-3" data-aos="fade-down">
            <h2>2021 - 2022</h2>
          </div>
          <div className="vertical-left-1"></div>
          <div className="first-p" data-aos="fade-up">
            <p style={{ textAlign: "left", marginLeft: "15px" }}>
              {" "}
              My role is to manage the software <br></br>developer team, Project
              planning <br></br>and workschedule for the team.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-3"></div>
        </div>
        {/*  */}
        <div className="timeline-1">
          <div className="first-p" data-aos="fade-up">
            <p style={{ textAlign: "left", marginRight: "15px" }}>
              {" "}
              My role is to design and develop the product,<br></br> covering
              aspects from ideation, prototyping,<br></br> design, and
              commercialization. Below are the<br></br> domains. I have worked
              on during product<br></br> development.
            </p>
          </div>
          <div className="vert-right-1"></div>
          <div className="Year-4">
            <h2>2022 - 2023</h2>
          </div>
          <div
            className="content-1"
            style={{ transform: "translateX(-40px)" }}
            data-aos="fade-up"
          >
            <h6>
              PROJECT MANAGER <br></br>
              <span style={{ fontSize: "9px" }}>APPIKORN</span>
            </h6>
          </div>
          {/*  */}
        </div>
        <div className="horz-line">
          <div className="horz-line-3"></div>
        </div>
        <div className="horz-ver">
          <div className="content-3">
            <h6>
              PRODUCT DEVELOPMENT ENGINEER <br></br>
              <span style={{ fontSize: "9px" }}>CHEMIN C&I Pvt Ltd</span>
            </h6>
          </div>
          <div className="line-4"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-4"></div>
        </div>
        <div className="box-1">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="vert-left-2"></div>
            <div>
              <img
                src={logo3}
                alt="Logo"
                className="logo3"
                data-aos="zoom-in"
                style={{ height: "150px", width: "150px" }}
              />
              <div className="logo-Name-1">
                <img
                  src={logoRight}
                  alt="logoRight"
                  className="logo-RightName"
                />
                <img src={logoLeft} alt="logoleft" className="logo-LeftName" />
              </div>
              <div className="Year-5">
                <h2>2024</h2>
              </div>
              <div className="content-4">
                <h6>FOUNDER</h6>
              </div>
            </div>
          </div>
          <div className="vert-right-2"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-5"></div>
        </div>
        {/*  */}
        <div className="horz-ver">
          <div className="line-5"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-6"></div>
        </div>
        {/*  */}
        <div className="box-2">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="vert-left-3"></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div className="second-head">
                <h3>WHAT A</h3>
              </div>
              <div className="second-H">
                <h1>YEAR</h1>
              </div>
            </div>
          </div>

          <div className="vert-right-3"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-7"></div>
        </div>
        <button
          className="vertical-line-container-4"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <HiMiniArrowLongUp className="arrow-down-1" />
        </button>
        {/*  */}
        <div className="footer-line-1" style={{ marginTop: "110px" }}></div>
        <div style={{ paddingTop: "0%" }}>
          <div className="Footer-1" style={{ overflowY: "hidden" }}>
            <div className="Footer-head">
              <div className="Footer-1">
                <h6>SHINECRAFT TECHNOLOGIES</h6>

                <p>CREATE | CRAFT | CONNECT</p>

                <button className="styled-button-1">
                  {" "}
                  <Link to="/">
                    {" "}
                    <a href="/">HOME</a>
                  </Link>
                </button>
              </div>

              <div className="Footer-topic">
                <h6>PROFILE</h6>
                <p>
                  <button className="styled-button">
                    <a
                      href="/Ajithkumar resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-reset"
                    >
                      CV
                    </a>
                  </button>
                </p>
                <p>
                  <button className="styled-button">
                    <a
                      href="https://drive.google.com/drive/folders/1XBf268PVYfvYixI4kwc4bET3Dkx22gfH"
                      className="text-reset"
                    >
                      DRIVE
                    </a>
                  </button>
                </p>
                <p>
                  <button className="styled-button">
                    <a
                      href="http://www.linkedin.com/in/ajith-kumar-v-5671862a2"
                      target="_blank"
                      className="text-reset"
                    >
                      LINKDIN
                    </a>
                  </button>
                </p>
              </div>
              <div className="Footer-contact">
                <h6>CONTACT</h6>
                <div className="contact-item">
                  <MdAddCall className="contact-icon" />
                  <p>+91-8220647389</p>
                </div>
                <div className="contact-item">
                  <MdEmail className="contact-icon" />
                  <p>ajith@shincrafttechnologies.com</p>
                </div>
              </div>
            </div>
            <div className="footer-line-1"></div>
            <div className="footer-content">
              <p>@2024| Alrights reserved</p>
            </div>
            <div className="Footer-icons">
              <IoLogoGithub className="social-icon" />

              <CiLinkedin className="social-icon" />

              <FaInstagram className="social-icon" />

              <IoLogoFacebook className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile1;
