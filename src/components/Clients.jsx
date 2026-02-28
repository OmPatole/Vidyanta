import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Placeholder company logos as styled text badges (grayscale → color on hover)
const clients = [
    { name: 'TechNova', color: '#6366F1' },
    { name: 'BrightMedia', color: '#F59E0B' },
    { name: 'PixelCraft', color: '#EC4899' },
    { name: 'SkyBridge', color: '#14B8A6' },
    { name: 'CloudFlux', color: '#2563EB' },
    { name: 'NexGen', color: '#8B5CF6' },
    { name: 'Alphaworks', color: '#EF4444' },
    { name: 'Zephyr Inc.', color: '#F97316' },
    { name: 'OmniSoft', color: '#10B981' },
    { name: 'DataSync', color: '#06B6D4' },
    { name: 'BuildFast', color: '#84CC16' },
    { name: 'Vertexia', color: '#E11D48' },
    { name: 'Snaplogic', color: '#7C3AED' },
    { name: 'CorePath', color: '#2DD4BF' },
];

function ClientLogo({ client }) {
    return (
        <div
            className="flex-shrink-0 h-14 px-6 border border-white/5 rounded-md bg-surface flex items-center justify-center mx-3 group cursor-default transition-all duration-300 hover:border-white/20 hover:bg-surface-2"
        >
            <span
                className="text-sm font-bold tracking-tight text-white/30 group-hover:text-white transition-colors duration-400 whitespace-nowrap"
                style={{ '--hover-color': client.color }}
            >
                {client.name}
            </span>
        </div>
    );
}

export default function Clients() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    // Duplicate for seamless infinite scroll
    const doubled = [...clients, ...clients];

    return (
        <section id="clients" className="py-28 bg-[#0A0A0A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-14" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <span className="section-label">Our Clients</span>
                    <h2 className="section-title">
                        Brands We <span className="text-primary">Love</span> Working For
                    </h2>
                </motion.div>
            </div>

            {/* Marquee wrapper */}
            <div className="relative">
                {/* Fade masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <div className="marquee-track flex items-center">
                        {doubled.map((client, i) => (
                            <ClientLogo key={`${client.name}-${i}`} client={client} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Second row - reverse direction */}
            <div className="relative mt-4">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <div
                        className="flex items-center"
                        style={{ animation: 'marquee 25s linear infinite reverse', willChange: 'transform' }}
                    >
                        {doubled.map((client, i) => (
                            <ClientLogo key={`rev-${client.name}-${i}`} client={client} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
