import React, { useEffect } from "react";
import logo2 from "../Assests/images/logo.png";
import logo3 from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
import profile from "../Assests/images/logo.png";
import ProjectL from "../Assests/images/image1.jpg";
import ProjectC from "../Assests/images/image2.jpeg";
import ProjectR from "../Assests/images/image4.jpg";
import "animate.css";
import { TbSquareRoundedArrowUp } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import Endpage from "./Endpage";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Profile1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
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
        </div>
        <div class="nav-2">
          <ul class="list-2">
            <li class="li-list">
              <Link to="/Firstpage">
                {" "}
                <a href="/Firstpage">HOME</a>
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
            style={{ height: "150px", width: "150px" }}
          />
        </div>
        <div className="main-conntent-1">
          <h1>Hi! Meets MOHAN</h1>
          <h2>
            {" "}
            Founder-Product Development Engineer,<br></br> Electronic Systems
          </h2>
        </div>
      </div>
      {/* ------------------------------ */}

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
          <div className="line-3"></div>
          <div className="horz-line-2"></div>
        </div>
        {/* --- */}
        <div className="second-timeline">
          <div className="Year-1">
            <h2>Chemical Factory</h2>
          </div>
          <div className="first-vert-left-1"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-1"></div>
        </div>
        {/*  */}
        <div className="second-timeline-1">
          <div className="first-vert-right "></div>
          <div className="Year-2">
            <h2>POULTRY FEED </h2>
          </div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="first-horzline-cen-2"></div>
        </div>
        {/*  */}
        <div className="third-timeline-2">
          <div className="Year-3">
            <h2> ANDHRA PAPER MILLS</h2>
          </div>
          <div className="first-vert-left-1"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="first-horzline-cen-3"></div>
        </div>
        {/*  */}
        <div className="second-timeline-3">
          <div className="first-vert-right"></div>
          <div className="first-Year-4">
            <h2>ALMR ASSOCIATION</h2>
          </div>

          {/*  */}
        </div>
        <div className="first-horz-line">
          <div className="horz-line-3"></div>
        </div>
        <div className="first-horz-ver">
          <div className="line-4"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-4"></div>
        </div>
        <div className="box-1">
          <div className="vert-left-2">
            <img
              src={logo3}
              alt="Logo"
              className="logo3"
              style={{ height: "150px", width: "150px" }}
            />
            <div className="logo-Name-1">
              <img src={logoRight} alt="logoRight" className="logo-RightName" />
              <img src={logoLeft} alt="logoleft" className="logo-LeftName" />
            </div>
            <div className="Year-5">
              <h2>2024</h2>
            </div>
            <div className="content-4">
              <h6>FOUNDER</h6>
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
          <div className="vert-left-3">
            <div className="Head-2">
              <div className="second-head">
                <h3>WHAT A</h3>
              </div>
              <h1>YEAR</h1>
            </div>
          </div>
          <div className="vert-right-3"></div>
        </div>
        {/*  */}
        <div className="horz-line">
          <div className="horzline-cen-7"></div>
        </div>
        {/*  */}
      </div>

      <Endpage />
    </div>
  );
}
export default Profile1;
