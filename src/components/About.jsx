import React from 'react';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <section id="about-details" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    {/* Education */}
                    <div>
                        <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)' }}>/</span> Education
                        </h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '3px solid var(--accent-primary)', position: 'relative' }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '-9px',
                                    top: '0',
                                    width: '15px',
                                    height: '15px',
                                    background: 'var(--accent-primary)',
                                    borderRadius: '50%',
                                    border: '3px solid white'
                                }}></span>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>{edu.title}</h3>
                                <p style={{ color: 'var(--accent-primary)', marginBottom: '0.4rem', fontWeight: '600', fontSize: '1rem' }}>{edu.institution}</p>
                                <div style={{
                                    display: 'inline-block',
                                    background: 'rgba(37, 99, 235, 0.1)',
                                    color: 'var(--accent-primary)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    marginBottom: '0.5rem'
                                }}>
                                    {edu.year}
                                </div>
                                {edu.details && <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>{edu.details}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div>
                        <h2 className="text-gradient" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                            <span style={{ color: 'var(--accent-primary)' }}>/</span> Certifications & Awards
                        </h2>
                        <ul style={{ listStyle: 'none' }}>
                            {resumeData.certificates.map((cert, index) => (
                                <li key={index} style={{
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'baseline',
                                    background: 'white',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                                    transition: 'transform 0.2s',
                                    cursor: 'default'
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                                >
                                    <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}>▹</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500', lineHeight: 1.5 }}>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @media (max-width: 768px) {
                        div[style*="grid-template-columns"] {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default About;
