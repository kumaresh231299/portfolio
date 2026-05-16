import React from 'react';
import myImg from '../assets/aboutme_pic.jpg'
import RESUME_PDF from "../assets/Kumaresan_FSD.pdf";
import { FaBriefcase, FaCode, FaDownload, FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa';




const highlights = [
    { icon: <FaCode />, label: "3+ Projects", sub: "Full-stack apps" },
    { icon: <FaBriefcase />, label: "Mindtree Intern", sub: "React development(2022)" },
    { icon: <FaRocket />, label: "Guvi certified", sub: "MERN stack certification" }
];

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* Photo side */}
                    <div className="col-lg-5 text-center">
                        <div className='about-photo-wrapper'>
                            <img
                                src={myImg}
                                alt="Kumaresan"
                                className="about-photo"
                            />
                            {/* Decorative accent block */}
                            <div className='about-photo-accent' aria-hidden="true" />
                        </div>
                    </div>


                    {/* Content side */}
                    <div className="col-lg-7">
                        <span className='section-eyebrow'>Who I Am</span>
                        <h2 className="section-heading">About Me</h2>

                        <p className="about-bio">
                            I'm a <strong>MERN stack developer</strong> who loves turning ideas into fast, clean web applications. My focus is on building responsive, user-centric experiences with React on the frontend and Nodejs + MongoDB on the backend.
                        </p>
                        <p className='about-bio'>
                            I completed a <strong>React development apprenticeship at Mindtree</strong> and earned a <strong>MERN stack certification from GUVI</strong>. I'm currently looking for full-time or freelance opportunities where I can contribute to meaningful and keep growing as an engineer.
                        </p>

                        {/* Highlight cards */}
                        <div className='about-highlights d-flex flex-wrap gap-3 mb-4'>
                            {highlights.map((h, i) => (
                                <div key={i} className='highlight-card'>
                                    <span className='highlight-icon'>{h.icon}</span>
                                    <div>
                                        <div className='highlight-label'>{h.label}</div>
                                        <div className='highlight-sub'>{h.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action row */}
                        <div className='d-flex flex-wrap gap-3 align-items-center' >
                            <a
                                href={RESUME_PDF}
                                download="Kumaresan_MERN-Resume.pdf"
                                className='btn btn-primary-custom'
                            >
                                <FaDownload size={13} className="me-2" />
                                Download Resume
                            </a>

                            <div className='d-flex gap-2'>
                                <a
                                    href="https://github.com/kumaresh231299"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-link"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={18} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kumaresan-subramani-0a09aa191/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
