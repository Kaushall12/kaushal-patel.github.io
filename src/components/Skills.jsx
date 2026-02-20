import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const categories = Object.keys(resumeData.skills);

    return (
        <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background enhancement */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(189, 0, 255, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }}></div>

            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '4rem',
                        fontSize: '2.5rem',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                        width: '100%'
                    }}
                >
                    Technical Skills
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category}
                            variants={item}
                            whileHover={{
                                scale: 1.02,
                                rotateY: 5,
                                rotateX: -5,
                                boxShadow: '0 20px 40px -10px rgba(0, 243, 255, 0.15)'
                            }}
                            style={{
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid white',
                                transformStyle: 'preserve-3d',
                                perspective: '1000px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            className="glass-card"
                        >
                            <h3 style={{
                                textTransform: 'capitalize',
                                color: 'var(--text-primary)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                fontSize: '1.4rem',
                                fontWeight: '700'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-primary)',
                                    boxShadow: '0 0 15px var(--accent-primary)'
                                }}></span>
                                {category === 'devops' ? 'DevOps & Cloud' : category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {resumeData.skills[category].map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="badge badge-tech"
                                        style={{ fontSize: '0.95rem' }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
