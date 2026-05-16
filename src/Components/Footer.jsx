import React from 'react'
import { FaArrowUp, FaDownload, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa';
import RESUME_PDF from "../assets/Kumaresan_FSD.pdf";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const socials = [
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/kumaresh231299"
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kumaresan-subramani-0a09aa191/"
  },
  {
    icon: <FaDownload size={18} />,
    label: "Resume",
    href: RESUME_PDF,
    download: true
  }
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behaviour: "smooth" });
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behaviour: "smooth" })
  }
  return (
    <footer className='portfolio-footer'>
      <div className='container'>

        {/* Top row : logo + nav links + back to top */}
        <div className='footer-top'>
          <a href='#home' className='footer-logo' onClick={(e) => handleNavClick(e, "#home")}>
            My<span>Portfolio</span>
          </a>

          <ul className='footer-nav'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className='footer-nav-link'
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button className='footer-back-top' onClick={scrollToTop} aria-label='Back to top'>
            <FaArrowUp size={14} />
          </button>
        </div>

        {/* Divider */}
        <div className='footer-divider' />

        {/* Bottom row: copyright + socials */}
        <div className='footer-bottom'>
          <p className='footer-copy'>
            © {new Date().getFullYear()} MyPortfolio. Built with{""}
            <FaHeart className='footer-heart' size={12} /> by Kumaresan
          </p>

          <div className='footer-socials'>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.download ? "_self" : "_blank"}
                rel='noreferror'
                download={s.download ? "Kumaresan_Mern-Resume.pdf" : undefined}
                className='footer-social-link'
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer