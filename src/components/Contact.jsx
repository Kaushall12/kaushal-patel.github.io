import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronUp } from 'lucide-react';
import { resumeData } from '../data/resume';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" style={{ padding: '5rem 0 2rem 0', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ marginBottom: '1rem' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    I am actively seeking full-time opportunities as a DevOps Engineer where I can contribute to automation, CI/CD implementation, and cloud infrastructure projects. If you're hiring or would like to collaborate, let’s connect.
                </p>

                <a href={`mailto:${resumeData.personalInfo.email}`} className="btn btn-outline" style={{ marginBottom: '4rem', padding: '1rem 2rem' }}>
                    Say Hello
                </a>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail color="var(--accent-primary)" />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{resumeData.personalInfo.email}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone color="var(--accent-primary)" />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{resumeData.personalInfo.phone}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin color="var(--accent-primary)" />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{resumeData.personalInfo.location}</span>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(0, 243, 255, 0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                            <Github size={20} />
                        </a>
                        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                            <Linkedin size={20} />
                        </a>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        Designed & Built by Kaushal Patel
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
