import React from "react";
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import myImg from '../assets/profile_pic_bg.jpg';
import RESUME_PDF from "../assets/Kumaresan_FSD.pdf";
import { Typewriter } from "react-simple-typewriter";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";


function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      {/* Subtle grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left : Text content */}
          <div className="col-lg-6 order-2 order-lg-1">

            {/* Availability badge */}
            <div className="hero-badge mb-3">
              <span className="badge-dot" />
              Available for opportunities
            </div>
            <h1 className="hero-name mb-1">
              Hi, I'm <span className="hero-accent">Kumaresan</span>
            </h1>

            <h2 className="hero-typewriter mb-4">
              <Typewriter
                words={[
                  "A MERN Stack Developer",
                  "React Specialist",
                  "Full-Stack Builder",
                  "UI/UX Enthusiast"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </h2>

            <p className="hero-bio mb-4">
              I build scalable. production-ready web applications using the MERN Stack. Passionate clean code, responsive design, and shipping things that actually work.
            </p>

            {/* Experience row */}
            <div className="hero-stats d-flex gap-4 mb-5">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Project Shipped</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">months Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Core Stack</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="hero-ctas d-flex flex-wrap gap-3 mb-4">
              <button
                className="btn btn-primary-custom"
                onClick={scrollToProjects}
              >
                View My Work
                <FaArrowDown className="ms-2" size={13} />
              </button>

              <a
                href={RESUME_PDF}
                download="Kumaresan_Mern-Resume.pdf"
                className="btn btn-outline-custom"
              >
                <FaDownload className="me-2" size={13} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="hero-socials d-flex gap-3">
              <a
                href="https://github.com/kumaresh231299"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kumaresan-subramani-0a09aa191/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Photo */}
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <div className="hero-photo-wrapper">
              <div className="hero-photo-ring" aria-hidden="true" />
              <img
                src={myImg}
                alt="Kumaresan-MERN Stack Developer"
                className="hero-photo"
              />
              {/* floating tech badge */}
              <div className="hero-float-badge top-badge">
                <span><SiReact color="#61DAFB" /></span> React 18
              </div>
              {/* <div className="hero-float-badge top-right-badge">
                <span><SiNodedotjs color="#339933" /></span> Node.js
              </div>
              <div className="hero-float-badge bottom-left-badge">
                <span><SiExpress color="#000000" /></span> Express.js
              </div> */}
              <div className="hero-float-badge bottom-badge">
                <span><SiMongodb color="#47A248" /></span> MongoDB
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
