'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        title: 'Idea Validation',
        description: 'I start by understanding your vision and validating your idea to ensure it meets market needs.',
    },
    {
        title: 'Prototyping',
        description: 'I create a prototype to visualize your idea, allowing for feedback and adjustments before development.',
    },
    {
        title: 'Development',
        description: 'I develop your MVP using the latest technologies, ensuring a robust and scalable solution.',
    },
    {
        title: 'Testing',
        description: 'I conduct thorough testing to ensure your MVP is functional, user-friendly, and ready for launch.',
    },
    {
        title: 'Launch',
        description: 'Finally, I help you launch your MVP, providing support and guidance to ensure a successful entry into the market.',
    },
];

// Responsive dimensions
const getResponsiveDimensions = (isMobile: boolean) => {
    const STEP_VERTICAL_GAP = isMobile ? 180 : 260;
    const WAVE_HEIGHT = (steps.length - 1) * STEP_VERTICAL_GAP + (isMobile ? 120 : 160);
    const WAVE_WIDTH = isMobile ? 320 : 400;
    return { STEP_VERTICAL_GAP, WAVE_HEIGHT, WAVE_WIDTH };
};

const STEP_COUNT = steps.length;

// More rounded, wavy path using cubic Bezier curves
const getStepPosition = (index: number, dimensions: ReturnType<typeof getResponsiveDimensions>) => {
    const { WAVE_HEIGHT, WAVE_WIDTH } = dimensions;
    const t = index / (STEP_COUNT - 1);
    const y = 80 + t * (WAVE_HEIGHT - 160);
    // Alternate left/right for zigzag, but with more curve
    const offset = dimensions.WAVE_WIDTH < 400 ? 80 : 120;
    const x = WAVE_WIDTH / 2 + (index % 2 === 0 ? -1 : 1) * offset;
    return { x, y };
};

// Generate a smooth cubic Bezier path through all steps
const getWavePath = (dimensions: ReturnType<typeof getResponsiveDimensions>) => {
    let d = '';
    for (let i = 0; i < STEP_COUNT; i++) {
        const { x, y } = getStepPosition(i, dimensions);
        if (i === 0) {
            d = `M${x},${y}`;
        } else {
            // Control points for smooth S-curve
            const prev = getStepPosition(i - 1, dimensions);
            const c1x = prev.x;
            const c1y = prev.y + dimensions.STEP_VERTICAL_GAP / 2;
            const c2x = x;
            const c2y = y - dimensions.STEP_VERTICAL_GAP / 2;
            d += ` C${c1x},${c1y} ${c2x},${c2y} ${x},${y}`;
        }
    }
    return d;
};

const HowItWorks = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [dimensions, setDimensions] = useState(getResponsiveDimensions(false));
    
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setDimensions(getResponsiveDimensions(mobile));
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
        const start = getStepPosition(idx, dimensions);
        const end = getStepPosition(nextIdx, dimensions);
        // Simple linear interpolation (approximate, but works for this use)
        return {
            x: start.x + (end.x - start.x) * localT,
            y: start.y + (end.y - start.y) * localT,
        };
    });

    return (
        <section
            id="how-it-works"
            ref={ref}
            className="py-16 md:py-32 text-white flex flex-col items-center px-4 md:px-6 lg:px-8"
            style={{ minHeight: dimensions.WAVE_HEIGHT + (isMobile ? 150 : 200) }}
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                How It Works
            </h2>
            
            {/* Desktop SVG Animation */}
            <div className="hidden md:block relative" style={{ height: dimensions.WAVE_HEIGHT, width: dimensions.WAVE_WIDTH }}>
                <svg
                    width={dimensions.WAVE_WIDTH}
                    height={dimensions.WAVE_HEIGHT}
                    className="max-h-full"
                    style={{ overflow: 'visible' }}
                >
                    {/* Animated vertical wavy path */}
                    <motion.path
                        d={getWavePath(dimensions)}
                        stroke="url(#wave-gradient)"
                        strokeWidth={isMobile ? "6" : "8"}
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
                            y2={dimensions.WAVE_HEIGHT}
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
                        const { x, y } = getStepPosition(i, dimensions);
                        const circleRadius = isMobile ? 22 : 28;
                        const fontSize = isMobile ? "14" : "18";
                        return (
                            <g key={i}>
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={circleRadius}
                                    fill="#312e81"
                                    stroke="#818cf8"
                                    strokeWidth={isMobile ? "3" : "4"}
                                />
                                <text
                                    x={x}
                                    y={y + (isMobile ? 4 : 6)}
                                    textAnchor="middle"
                                    fontSize={fontSize}
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
                        r={isMobile ? 12 : 16}
                        fill="url(#dot-gradient)"
                        animate={{
                            cx: dotPos.get().x,
                            cy: dotPos.get().y,
                        }}
                        style={{
                            filter: `drop-shadow(0 0 ${isMobile ? '12px' : '16px'} #818cf8) drop-shadow(0 0 ${isMobile ? '24px' : '32px'} #818cf8)`,
                        }}
                    />
                </svg>
                {/* Step cards */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                    {steps.map((step, i) => {
                        const { x, y } = getStepPosition(i, dimensions);
                        const cardWidth = isMobile ? 200 : 224;
                        const leftOffset = isMobile ? -210 : -240;
                        const rightOffset = isMobile ? 40 : 60;
                        return (
                            <motion.div
                                key={i}
                                className={`absolute -translate-y-1/2 pointer-events-auto ${isMobile ? 'w-50' : 'w-56'}`}
                                style={{
                                    width: cardWidth,
                                    top: y,
                                    left: x + (i % 2 === 0 ? leftOffset : rightOffset),
                                }}
                                initial={{ opacity: 0, x: isMobile ? 20 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                            >
                                <div className={`bg-gray-800/90 rounded-xl shadow-xl border border-blue-800 ${isMobile ? 'p-3' : 'p-5'}`}>
                                    <h3 className={`font-bold text-blue-300 mb-1 ${isMobile ? 'text-sm' : 'text-lg'}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-gray-200 ${isMobile ? 'text-xs leading-relaxed' : 'text-sm'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            {/* Mobile simple step list */}
            <div className="md:hidden max-w-sm mx-auto">
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={`mobile-${i}`}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                {i + 1}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-blue-300 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-200 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;