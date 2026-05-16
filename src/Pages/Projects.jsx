import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';
import BlogImg from "../assets/project-blog.svg"
import MusicImg from "../assets/project-music-streaming.svg"
import PasswordImg from "../assets/project-password-reset.svg"


const projects = [
  {
    emoji: "✍️",
    title: 'Blog Application',
    description: 'A MERN blogging platform where users can register, log in, create, edit, and delete blog posts. Features JWT-based authentication and clean reading experience.',
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
      { icon: <SiNodedotjs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express" },
      { icon: <SiMongodb />, label: "MongoDB" }
    ],
    accent: "#059669",
    accentLight: "#d1fae5",
    image: BlogImg,
    githubUrl: 'https://github.com/kumaresh231299/SK-Blogging_Application_FE',
    liveUrl: 'https://sk-blogging-application.netlify.app/'
  },
  {
    emoji: "🎵",
    title: 'Music Streaming App',
    description: 'A full-stack MERN application for music streaming, playlist management, and browsing trending tracks with a modern user interface.',
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
      { icon: <SiNodedotjs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express" },
      { icon: <SiMongodb />, label: "MongoDB" }
    ],
    accent: "#7c3aed",
    accentLight: "#ede9fe",
    image: MusicImg,
    githubUrl: 'https://github.com/kumaresh231299/music-streamming-sk-fe',
    liveUrl: 'https://music-streamming-sk-fe.netlify.app/'
  },
  {
    emoji: "🔐",
    title: 'Password Reset App',
    description: 'A MERN-based user authentication system with secure login, password reset via email using Nodemailer, and JWT verification.',
    tech: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
      { icon: <SiNodedotjs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express" },
      { icon: <SiMongodb />, label: "MongoDB" }
    ],
    accent: "#2563eb",
    accentLight: "#dbeafe",
    image: PasswordImg,
    githubUrl: 'https://github.com/kumaresh231299/Password-Reset-FrontEnd',
    liveUrl: 'https://password-reset-frontend-sk.netlify.app/'
  }
];

function ProjectPlaceholder({ emoji, accent, accentLight, image }) {
  return (
    <div
      className='project-placeholder'
      style={{ background: accentLight }}
      aria-hidden="true"
    >
      <div className='placeholder-emoji' style={{ color: accent }}>{emoji}</div>
      <p className='placeholder-hint'>
        {/* img */}
        <br />
        <small>{image}</small>
      </p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className='project-card' style={{ "--card-accent": project.accent, "--card-accent-light": project.accentLight }}>
      {/* Image placeholder */}
      <div className='project-image-wrapper'>
        {project.image ? (
          <img src={project.image} alt={project.title} className='project-image' />
        ) : (
          <ProjectPlaceholder
            emoji={project.emoji}
            accent={project.accent}
            accentLight={project.accentLight}
          />
        )}
        {/* Overlay on hover */}
        <div className='project-image-overlay'>
          <a href={ProjectCard.liveUrl} target='_blank' rel='noreferrer' className='overlay-btn' style={{ cursor: "pointer" }}>
            <FaExternalLinkAlt size={14} /> Live Demo
          </a>
        </div>
      </div>

      {/* Content */}
      <div className='project-content'>
        <h3 className='project-title'>
          <span className='project-emoji'>{project.emoji}</span>
          {project.title}
        </h3>
        <p className='project-desc'>{project.description}</p>

        {/* Tech stack pills */}
        <div className='project-tech d-flex flex-wrap gap-2 mb-4'>
          {project.tech.map((t, i) => (
            <span key={i} className='tech-pill'>
              <span className='tech-pill-icon'>{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className='project-actions d-flex gap-2'>
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noreferrer'
            className='btn-outline-accent'
          >
            <FaGithub size={14} className='me-2' />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='btn-filled-accent'
          >
            <FaExternalLinkAlt size={12} className='me-2' />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className='section-eyebrow'>What I've Built</span>
          <h2 className='section-heading'>Projects</h2>
          <p className='section-sub'>
            Full-Stack MERN applications - each with a live demo and source
          </p>
        </div>

        <div className='row g-4 justify-content-center'>
          {projects.map((p, i) => (
            <div key={i} className='col-12 col-md-6 col-lg-4'>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
