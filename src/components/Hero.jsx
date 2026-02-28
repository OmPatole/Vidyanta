import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
    const handleGetStarted = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleViewMore = () => {
        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Radial glow top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

            {/* Radial glow bottom right */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-6"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 bg-primary/10 px-4 py-2 rounded-full">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            Full-Service Digital Agency
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
                    >
                        <span className="text-white">Engage.</span>{' '}
                        <span className="gradient-text">Enhance.</span>{' '}
                        <span className="text-white">Expand.</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-white/55 max-w-2xl leading-relaxed font-light"
                    >
                        Improve Digital Presence of Your Business. We build Robust 360° Digital Solutions
                        to promote your business effectively.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4 mt-2"
                    >
                        <button
                            id="hero-get-started-btn"
                            onClick={handleGetStarted}
                            className="btn-primary"
                        >
                            Get Started
                            <ArrowRight size={16} />
                        </button>
                        <button
                            id="hero-view-more-btn"
                            onClick={handleViewMore}
                            className="btn-outline"
                        >
                            View More
                        </button>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-10 mt-8 pt-8 border-t border-white/5"
                    >
                        {[
                            { value: '2000+', label: 'Businesses Served' },
                            { value: '500+', label: 'Happy Customers' },
                            { value: '1000+', label: 'Creative Projects' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl font-black text-white">{stat.value}</p>
                                <p className="text-xs text-white/40 mt-1 font-medium tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
                >
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
