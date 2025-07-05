'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        title: 'Idea Validation',
        description: 'We start by understanding your vision and validating your idea to ensure it meets market needs.',
    },
    {
        title: 'Prototyping',
        description: 'We create a prototype to visualize your idea, allowing for feedback and adjustments before development.',
    },
    {
        title: 'Development',
        description: 'Our team develops your MVP using the latest technologies, ensuring a robust and scalable solution.',
    },
    {
        title: 'Testing',
        description: 'We conduct thorough testing to ensure your MVP is functional, user-friendly, and ready for launch.',
    },
    {
        title: 'Launch',
        description: 'Finally, we help you launch your MVP, providing support and guidance to ensure a successful entry into the market.',
    },
];

// Make the section and SVG taller
const STEP_VERTICAL_GAP = 260;
const WAVE_HEIGHT = (steps.length - 1) * STEP_VERTICAL_GAP + 160;
const WAVE_WIDTH = 400;
const STEP_COUNT = steps.length;

// More rounded, wavy path using cubic Bezier curves
const getStepPosition = (index: number) => {
    const t = index / (STEP_COUNT - 1);
    const y = 80 + t * (WAVE_HEIGHT - 160);
    // Alternate left/right for zigzag, but with more curve
    const x = WAVE_WIDTH / 2 + (index % 2 === 0 ? -1 : 1) * 120;
    return { x, y };
};

// Generate a smooth cubic Bezier path through all steps
const getWavePath = () => {
    let d = '';
    for (let i = 0; i < STEP_COUNT; i++) {
        const { x, y } = getStepPosition(i);
        if (i === 0) {
            d = `M${x},${y}`;
        } else {
            // Control points for smooth S-curve
            const prev = getStepPosition(i - 1);
            const c1x = prev.x;
            const c1y = prev.y + STEP_VERTICAL_GAP / 2;
            const c2x = x;
            const c2y = y - STEP_VERTICAL_GAP / 2;
            d += ` C${c1x},${c1y} ${c2x},${c2y} ${x},${y}`;
        }
    }
    return d;
};

const HowItWorks = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Lighting dot position along the wave
    const dotT = useTransform(scrollYProgress, [0, 1], [0, 1]);
    // Interpolate dot position along the path
    const dotPos = useTransform(dotT, t => {
        // Find which segment we're on
        const total = STEP_COUNT - 1;
        const idx = Math.floor(t * total);
        const nextIdx = Math.min(idx + 1, total);
        const localT = (t * total) - idx;
        const start = getStepPosition(idx);
        const end = getStepPosition(nextIdx);
        // Simple linear interpolation (approximate, but works for this use)
        return {
            x: start.x + (end.x - start.x) * localT,
            y: start.y + (end.y - start.y) * localT,
        };
    });

    return (
        <section
            ref={ref}
            className="py-32 bg-gradient-to-br from-[#101c36] to-black text-white flex flex-col items-center"
            style={{ minHeight: WAVE_HEIGHT + 200 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                How It Works
            </h2>
            <div className="relative" style={{ height: WAVE_HEIGHT, width: WAVE_WIDTH }}>
                <svg
                    width={WAVE_WIDTH}
                    height={WAVE_HEIGHT}
                    className="max-h-full"
                    style={{ overflow: 'visible' }}
                >
                    {/* Animated vertical wavy path */}
                    <motion.path
                        d={getWavePath()}
                        stroke="url(#wave-gradient)"
                        strokeWidth="8"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                    />
                    <defs>
                        <linearGradient
                            id="wave-gradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2={WAVE_HEIGHT}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#a78bfa" />
                            <stop offset="1" stopColor="#60a5fa" />
                        </linearGradient>
                        <radialGradient id="dot-gradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#fff" />
                            <stop offset="100%" stopColor="#818cf8" />
                        </radialGradient>
                    </defs>
                    {/* Steps */}
                    {steps.map((step, i) => {
                        const { x, y } = getStepPosition(i);
                        return (
                            <g key={i}>
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={28}
                                    fill="#312e81"
                                    stroke="#818cf8"
                                    strokeWidth="4"
                                />
                                <text
                                    x={x}
                                    y={y + 6}
                                    textAnchor="middle"
                                    fontSize="18"
                                    fill="#fff"
                                    fontWeight="bold"
                                >
                                    {i + 1}
                                </text>
                            </g>
                        );
                    })}
                    {/* Lighting dot */}
                    <motion.circle
                        r={16}
                        fill="url(#dot-gradient)"
                        style={{
                            cx: dotPos.get().x,
                            cy: dotPos.get().y,
                            filter: 'drop-shadow(0 0 16px #818cf8) drop-shadow(0 0 32px #818cf8)',
                        }}
                    />
                </svg>
                {/* Step cards */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                    {steps.map((step, i) => {
                        const { x, y } = getStepPosition(i);
                        return (
                            <motion.div
                                key={i}
                                className="absolute w-56 -translate-y-1/2 pointer-events-auto"
                                style={{
                                    top: y,
                                    left: x + (i % 2 === 0 ? -240 : 60), // left for even, right for odd
                                }}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                            >
                                <div className="bg-gray-800/90 rounded-xl shadow-xl p-5 border border-blue-800">
                                    <h3 className="text-lg font-bold text-blue-300 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-200">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;