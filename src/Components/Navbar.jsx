import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';



const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    //shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Active section detection
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observes = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.35 }
            );
            obs.observe(el);
            observes.push(obs)
        })
        return () => observes.forEach((o) => o.disconnect());
    }, []);

    // Close mobile menu on link click
    const handleNavClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behaviour: "smooth" });
    }

    return (
        <nav className={`portfolio-nav ${scrolled ? "nav-scrolled" : ""}`}>
            <div className="container nav-inner">
                {/* Logo */}
                <a
                    href='#home'
                    className='nav-logo'
                    onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
                >
                    My<span>Portfolio</span>
                </a>

                {/* Desktop links */}
                <ul className='nav-links-desktop'>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`nav-link-item ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a
                    href='#contact'
                    className='nav-cta'
                    onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                >
                    Hire Me
                </a>

                {/* Hamburger */}
                <button
                    className='nav-hamburger'
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`} >
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`nav-mobile-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href='#contact'
                            className='nav-mobile-cta'
                            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar