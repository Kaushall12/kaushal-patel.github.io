import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Academic Projects</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid white',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            whileHover={{ y: -8 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                <Folder size={40} color="var(--accent-primary)" strokeWidth={1.5} />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="View Source">
                                            <Github size={20} className="hover:text-blue-600" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="View Live Demo">
                                            <ExternalLink size={20} className="hover:text-blue-600" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem' }}>
                                {project.tech.map((tech) => (
                                    <span key={tech} className="badge badge-tech">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.4rem', fontWeight: '700' }}>{project.title}</h3>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '400' }}>
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
