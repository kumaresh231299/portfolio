import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import just from '../assets/user3D_img.png';

function Projects() {
  const data = [
    {
      id: 1,
      projectImg: just,
      projectName: '🔐 Password Reset App',
      desc: 'A MERN-based user authentication system with secure login, password reset via email using Nodemailer, and JWT verification.',
      githubLink: 'https://github.com/kumaresh231299/Password-Reset-FrontEnd',
      demoLink: 'https://password-reset-frontend-sk.netlify.app/'
    },
    {
      id: 2,
      projectImg: just,
      projectName: '🎵 Music Streaming App',
      desc: 'A full-stack MERN application for music streaming, playlist management, and browsing trending tracks with a modern user interface.',
      githubLink: 'https://github.com/kumaresh231299/music-streamming-sk-fe',
      demoLink: 'https://music-streamming-sk-fe.netlify.app/'
    },
    {
      id: 3,
      projectImg: just,
      projectName: '✍️ Blog Application',
      desc: 'A MERN blogging platform where users can register, log in, create, edit, and delete blog posts with JWT-based authentication.',
      githubLink: 'https://github.com/kumaresh231299/SK-Blogging_Application_FE',
      demoLink: 'https://sk-blogging-application.netlify.app/'
    },
    {
      id: 4,
      projectImg: just,
      projectName: '🛡️ Military Asset Management System',
      desc: 'A MERN-based role-based management system for tracking asset purchases, transfers, assignments, and usage across military bases.',
      githubLink: 'https://github.com/kumaresh231299/Military-Asset-Management-System_FE',
      demoLink: 'https://sk-military-asset-management-system.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Projects</h2>
        <div className="row g-4">
          {data.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm border-0 rounded-4 hover-shadow">
                <img
                  src={project.projectImg}
                  className="card-img-top p-3"
                  alt={project.projectName}
                  style={{
                    height: '250px',
                    objectFit: 'contain',
                    borderRadius: '5px 5px 0 0'
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{project.projectName}</h5>
                  <p className="card-text text-secondary flex-grow-1">{project.desc}</p>
                  <div className="d-flex justify-content-between gap-2">
                    <a
                      href={project.githubLink}
                      className="btn btn-outline-dark w-50 d-flex align-items-center justify-content-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      className="btn btn-primary w-50 d-flex align-items-center justify-content-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
