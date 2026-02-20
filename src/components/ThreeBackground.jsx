
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, RandomizedLight } from '@react-three/drei';

const ParticleNetwork = () => {
    // Using Sparkles from zwei/drei - guaranteed to work and highly optimized
    return (
        <group>
            {/* Primary particles (simulating neurons) */}
            <Sparkles
                count={80}
                scale={12}
                size={6}
                speed={0.4}
                opacity={0.5}
                color="#64748b"
            />
            {/* Secondary particles (simulating connections/synapses) */}
            <Sparkles
                count={50}
                scale={10}
                size={3}
                speed={0.2}
                opacity={0.3}
                color="#94a3b8"
            />
            {/* Subtle ambient light to ensure visibility */}
            <ambientLight intensity={0.5} />
        </group>
    );
};

const ThreeBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'transparent'
        }}>
            {/* Fail-safe Canvas configuration */}
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ParticleNetwork />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
