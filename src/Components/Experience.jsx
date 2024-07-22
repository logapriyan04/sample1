import React, { useEffect } from "react";
import { HiMiniArrowLongUp } from "react-icons/hi2";
import { MdEmail, MdAddCall } from "react-icons/md";
import { IoLogoGithub, IoLogoFacebook } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo3 from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="Experience" style={{ paddingTop: "5%" }}>
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
        <div className="line-3" data-aos="grow-line"></div>
        <div className="horz-line-2" data-aos="grow-line-left"></div>
      </div>

      <div className="timeline">
        <div className="Year-1" data-aos="custom-fade-in">
          <h2>2017 - 2018</h2>
        </div>
        <div className="vert-left-1" data-aos="grow-line-down"></div>
        <div className="first-p">
          <p
            style={{
              textAlign: "left",
              marginLeft: "15px",
              marginTop: "30px",
            }}
            data-aos="custom-fade-right"
          >
            My role is to develop a hardware-embedded<br></br> project in the
            electrical and electronics<br></br> domain based on the student and
            industry <br></br>requirements. I worked on most of the Digital/{" "}
            <br></br>Analog sensors and communications
          </p>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-line">
        <div className="horzline-cen-1" data-aos="grow-line-right"></div>
      </div>
      {/* Timeline Section */}
      <div className="timeline-1">
        <div className="first-p" data-aos="custom-fade-left">
          <p style={{ textAlign: "left", marginRight: "15px" }}>
            My responsibility is to design and develop <br></br> the product,
            covering aspects from ideation,<br></br> prototyping, design, and
            commercialization.<br></br> I worked on Team Management, Technical
            <br></br>
            Expertise/Electronics Development,<br></br> Production Planning,
            Innovation, Testing and<br></br> Training during product
            development.
          </p>
        </div>
        <div className="vert-right" data-aos="grow-line-down-right"></div>
        <div className="Year-2" data-aos="custom-fade-in">
          <h2>2019 - 2022</h2>
        </div>
        <div className="content-1">
          <h6>
            PRODUCT DEVELOPMENT ENGINEER <br />
            <span style={{ fontSize: "9px" }}>TECHTIL INFO SOLUTION</span>
          </h6>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-line">
        <div className="horzline-cen-2" data-aos="grow-line-left-2"></div>
      </div>
      {/* Timeline Section */}
      <div className="timeline-2">
        <div className="content-2" data-aos="custom-fade-up">
          <h6>
            CO FOUNDER AND COO <br />
            <span style={{ fontSize: "9px" }}>SCHOPIQ AUTOMATION</span>
          </h6>
        </div>
        <div className="Year-3" data-aos="custom-fade-in">
          <h2>2021 - 2022</h2>
        </div>
        <div className="vertical-left-1" data-aos="grow-line-down-left-2"></div>
        <div className="first-p" data-aos="custom-fade-right">
          <p
            style={{ textAlign: "left", marginLeft: "15px", marginTop: "45px" }}
          >
            My role is to manage the software <br></br>developer team, Project
            planning <br></br>and workschedule for the team.
          </p>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-line">
        <div className="horzline-cen-3" data-aos="grow-line-right-2"></div>
      </div>
      {/* Timeline Section */}
      <div className="timeline-1">
        <div className="first-p" data-aos="custom-fade-left">
          <p style={{ textAlign: "left", marginRight: "15px" }}>
            My responsibility is to design and develop<br></br> the product,
            covering aspects from ideation,<br></br> prototyping, design, and
            commercialization.<br></br> I worked on Project Management,
            Technical<br></br> Expertise/Electronics Development,<br></br>{" "}
            Production Planning, Market Analysis, <br></br> Training and
            Quotation Preparation during<br></br> product development.
          </p>
        </div>
        <div className="vert-right-1" data-aos="grow-line-down-right-2"></div>
        <div className="Year-4" data-aos="custom-fade-in">
          <h2>2022 - 2023</h2>
        </div>
        <div className="content-1" data-aos="custom-fade-up">
          <h6>
            PROJECT MANAGER <br />
            <span style={{ fontSize: "9px" }}>APPIKORN</span>
          </h6>
        </div>
      </div>

      <div className="horz-line">
        <div className="horz-line-3" data-aos="grow-line-left-3"></div>
      </div>
      <div className="horz-ver">
        <div className="content-3" data-aos="custom-fade-up">
          <h6>
            PRODUCT DEVELOPMENT ENGINEER <br />
            <span style={{ fontSize: "9px" }}>CHEMIN C&I Pvt Ltd</span>
          </h6>
        </div>
        <div className="line-4" data-aos="grow-line-down-3"></div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-line">
        <div className="horzline-cen-4" data-aos="grow-line-center"></div>
      </div>
      {/* Logo Section */}
      <div className="box-1">
        <div className="box-content">
          <div className="vert-left-2" data-aos="grow-line-down-left-3"></div>
          <div className="box-item">
            <img src={logo3} alt="Logo" className="logo3" data-aos="zoom-in" />
            <div className="logo-Name-2">
              <img
                src={logoRight}
                alt="logoRight"
                className="logo-RightName"
                data-aos="zoom-in"
              />
              <img
                src={logoLeft}
                alt="logoleft"
                className="logo-LeftName"
                data-aos="zoom-in"
              />
            </div>
            <div className="yeardiv" data-aos="custom-fade-up">
              <div className="Year-5">
                <h2>2024</h2>
              </div>
              <div className="content-4">
                <h6>FOUNDED</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="vert-right-2" data-aos="grow-line-down-right-3"></div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-line">
        <div
          className="horzline-cen-5"
          data-aos="grow-line-center-reverse"
        ></div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-ver-1">
        <div className="line-5" data-aos="grow-line-down-4"></div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-line">
        <div
          className="horzline-cen-6"
          data-aos="grow-line-center-left-right"
        ></div>
      </div>
      {/* Box Section */}
      <div className="box-2">
        <div className="box-con">
          <div className="vert-left-3" data-aos="grow-line-down-5"></div>
          <div className="text-container">
            <div className="second-head">
              <h4>CRAFTING BRILLIANCE</h4>
            </div>
            <div className="second-H">
              <h4>
                 TOMORROW <br></br>FUTURE
              </h4>
            </div>
          </div>
          <div className="vert-right-3" data-aos="grow-line-down-6"></div>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="horz-line">
        <div
          className="horzline-cen-7"
          data-aos="grow-line-center-left-right-2"
        ></div>
      </div>
      {/* Scroll to Top Button */}
      <button
        className="vertical-line-container-4"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiMiniArrowLongUp className="arrow-down-1" />
      </button>
      {/* Footer */}
      <div className="footer-line-1" style={{ marginTop: "110px" }}></div>
      <div style={{ paddingTop: "0%" }}>
        <div className="Footer-1" style={{ overflowY: "hidden" }}>
          <div className="Footer-head">
            <div className="Footer-1">
              <h6>SHINECRAFT TECHNOLOGIES</h6>
              <p>CREATE | CRAFT | CONNECT</p>
              <button className="styled-button-1">
                <Link to="/">
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
                    LINKEDIN
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
            <p>@2024 | All rights reserved</p>
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
  );
}

export default Experience;
