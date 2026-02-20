import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { resumeData } from '../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Resume file should be placed in "public/resume.pdf"
    const resumeLink = `${import.meta.env.BASE_URL}resume.pdf`;

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border-color)',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                position: 'relative'
            }}>
                {/* Logo */}
                <a href="#" style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 1001
                }}>
                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="KP Logo" style={{ height: '40px', width: '40px' }} />
                    <span>&lt;Kaushal Patel/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        <Download size={18} />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="var(--text-primary)" /> : <Menu size={28} color="var(--text-primary)" />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-btn">
                        <Download size={18} />
                        <span>Resume</span>
                    </a>
                </div>
            </div>

            <style>{`
                .nav-link {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.95rem;
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--accent-primary);
                }

                .mobile-toggle {
                    display: none;
                    cursor: pointer;
                    z-index: 1001;
                }

                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 70%;
                    height: 100vh;
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(15px);
                    border-left: 1px solid var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 2000;
                    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
                }

                .mobile-menu.open {
                    right: 0;
                }

                .mobile-menu-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2.5rem;
                    width: 100%;
                }

                .mobile-link {
                    font-size: 1.5rem;
                    color: var(--text-primary);
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }
                
                .mobile-link:hover {
                    color: var(--accent-primary);
                }

                .mobile-btn {
                    margin-top: 1rem;
                    transform: scale(1.1);
                }

                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block;
                    }
                    .container {
                        padding: 1rem !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
