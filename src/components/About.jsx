import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const highlights = [
    'Brand Development & Identity',
    'Online Marketing & Growth',
    'Robust Tech Solutions',
    'End-to-End Digital Strategy',
];

// Abstract geometric SVG visual
function GeometricVisual() {
    return (
        <div className="relative w-full h-full min-h-[360px] flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-72 h-72 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-52 h-52 rounded-full border border-accent/10 animate-[spin_14s_linear_infinite_reverse]" />

            {/* Center shape */}
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Hexagonal-ish gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl rotate-12 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-tl from-surface to-surface-2 rounded-2xl" />

                {/* Center text */}
                <div className="relative z-10 text-center">
                    <p className="text-5xl font-black text-white">360°</p>
                    <p className="text-xs text-white/50 mt-1 tracking-widest font-semibold uppercase">Digital</p>
                </div>
            </div>

            {/* Floating dots */}
            {[
                { top: '15%', left: '10%', delay: '0s' },
                { top: '70%', left: '5%', delay: '0.5s' },
                { top: '20%', right: '10%', delay: '1s' },
                { top: '75%', right: '15%', delay: '0.3s' },
            ].map((pos, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/60"
                    style={{
                        ...pos,
                        animation: `pulse 2s ease-in-out ${pos.delay} infinite`,
                    }}
                />
            ))}

            {/* Corner accent lines */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-md" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-accent/40 rounded-br-md" />
        </div>
    );
}

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="flex flex-col gap-6"
                    >
                        <span className="section-label">About Us</span>
                        <h2 className="section-title glow-underline">
                            We're Focused on{' '}
                            <span className="text-primary">One Goal:</span>
                            <br />
                            Your Success.
                        </h2>

                        <p className="text-white/55 leading-relaxed text-base font-light">
                            We are a full-service Digital Agency focused on one ultimate goal: Client's Success.
                            From concept to launch, we craft digital experiences that drive growth, build trust,
                            and create lasting impact in your industry.
                        </p>

                        <p className="text-white/55 leading-relaxed text-base font-light">
                            We offer brand development, online marketing, and robust tech solutions — everything
                            your business needs to thrive in the digital age.
                        </p>

                        {/* Highlight List */}
                        <ul className="flex flex-col gap-3 mt-2">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-white/70 font-medium">
                                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <button
                                id="about-learn-more-btn"
                                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary w-fit"
                            >
                                Our Services
                            </button>
                        </div>
                    </motion.div>

                    {/* Visual Column */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="relative"
                    >
                        <GeometricVisual />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
