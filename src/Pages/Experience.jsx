import React from 'react';
import { FaBriefcase, FaCertificate, FaCheckCircle } from 'react-icons/fa';



const experiences = [
  {
    type: "work",
    icon: <FaBriefcase />,
    iconColor: "#2563eb",
    iconBg: "#dbeafe",
    bulletColor: "#2563eb",
    badgeBg: "#dbeafe",
    badgeColor: "#2563eb",
    title: "Apprenticeship - Mindtree",
    period: "April 2022 - September 2022",
    bullets: [
      "Built reusable React components integrated into production-ready UI modules.",
      "Gained hand-on experience with React hooks, state management and REST API integration.",
      "Worked with Git workflow including branching, pull requests and code reviews.",
      "Collaborated with cross-functional teams in an Agile sprint environment."
    ]
  },
  {
    type: "certification",
    icon: <FaCertificate />,
    iconColor: "#16a34a",
    iconBg: "#dcfce7",
    bulletColor: "#16a34a",
    badgeBg: "#dcfce7",
    badgeColor: "#16a34a",
    title: "Certification - GUVI",
    period: "MERN Stack Development",
    bullets: [
      "Completed intensive MERN stack bootcamp covering React, Node.js,Express,MongoDB and Bootstrap.",
      "Built 3 Full-stck projects : Music Streamming App,Blog Application and Password Reset App",
      "Mastered JWT authentication, RESTful API design and Nodemailer integration.",
      "Learned deployment workflows using Netlify (frontend) and Render(backend)."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className='section-eyebrow'>My Journey</span>
          <h2 className="section-heading">Experience</h2>
        </div>

        {/* Timeline layout */}
        <div className='exp-wrapper'>
          {experiences.map((exp, i) => (
            <div key={i} className='exp-row'>

              <div className='exp-left-col'>

                {/* Top segment of the line (above dot) */}
                <div className={`exp-line exp-line-top ${i === 0 ? "exp-line-invisible" : ""}`} />
                {/* Timeline dot */}
                <div
                  className='exp-dot'
                  style={{ background: exp.iconBg, color: exp.iconColor }}>
                  {exp.icon}
                </div>

                {/* Bottom segment of the line (below dot) */}
                <div className={`exp-line exp-line-bottom ${i === experiences.length - 1 ? "exp-line-invisible" : ""}`} />
              </div>


              {/* Card */}
              <div className='exp-right-col'>
                <div className='exp-card'>
                  <div className='exp-card-header'>
                    <div>
                      <h3 className='exp-title'>{exp.title}</h3>
                      <span className='exp-period'>{exp.period}</span>
                    </div>
                    <span
                      className='exp-badge'
                      style={{ background: exp.iconBg, color: exp.iconColor }}
                    >
                      {exp.type === "work" ? "work" : "Certification"}
                    </span>
                  </div>

                  <ul className='exp-bullets'>
                    {exp.bullets.map((b, j) => (
                      <li key={j}>
                        <FaCheckCircle
                          className='bullet-icon'
                          style={{ color: exp.bulletColor }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
