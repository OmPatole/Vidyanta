import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, ShoppingCart, ArrowLeftRight, Zap, Briefcase, Layout, Server } from 'lucide-react';

const services = [
    {
        id: 'website-dev',
        icon: Code,
        title: 'Website Development',
        description: 'Custom, blazing-fast websites built with modern technologies. From landing pages to complex web apps.',
        bg: '#5B4FE9',
        accent: '#FFD23F',
        textColor: '#fff',
        mutedColor: 'rgba(255,255,255,0.65)',
    },
    {
        id: 'ecommerce-dev',
        icon: ShoppingCart,
        title: 'Ecommerce Development',
        description: 'Full-featured online stores with seamless UX, inventory management, and secure checkout flows.',
        bg: '#FF3D57',
        accent: '#FFD23F',
        textColor: '#fff',
        mutedColor: 'rgba(255,255,255,0.65)',
    },
    {
        id: 'website-migration',
        icon: ArrowLeftRight,
        title: 'Website Migration',
        description: 'Seamless platform migrations with zero downtime. Move your site without losing traffic or data.',
        bg: '#EDE8DF',
        accent: '#5B4FE9',
        textColor: '#1C1814',
        mutedColor: 'rgba(28,24,20,0.55)',
    },
    {
        id: 'speed-boost',
        icon: Zap,
        title: 'Website Speed Boost',
        description: 'Optimize Core Web Vitals, reduce load times, and dramatically improve user experience and SEO.',
        bg: '#FFD23F',
        accent: '#1C1814',
        textColor: '#1C1814',
        mutedColor: 'rgba(28,24,20,0.55)',
    },
    {
        id: 'corporate-branding',
        icon: Briefcase,
        title: 'Corporate Branding',
        description: 'Build a powerful brand identity — logos, brand guidelines, and visual systems that resonate.',
        bg: '#00C896',
        accent: '#1C1814',
        textColor: '#1C1814',
        mutedColor: 'rgba(28,24,20,0.55)',
    },
    {
        id: 'ui-ux-design',
        icon: Layout,
        title: 'UI-UX Design',
        description: 'User-centered design that blends aesthetics with functionality to drive engagement and conversions.',
        bg: '#1C1814',
        accent: '#5B4FE9',
        textColor: '#fff',
        mutedColor: 'rgba(255,255,255,0.55)',
    },
    {
        id: 'hosting-ssl',
        icon: Server,
        title: 'Domain, Hosting & SSL',
        description: 'Reliable hosting infrastructure, domain management, and SSL certificates to keep you secure.',
        bg: '#FF3D57',
        accent: '#1C1814',
        textColor: '#fff',
        mutedColor: 'rgba(255,255,255,0.65)',
    },
];

function FullCard({ service, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const Icon = service.icon;
    const num = String(index + 1).padStart(2, '0');

    return (
        <div
            ref={ref}
            id={`service-card-${service.id}`}
            style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                backgroundColor: service.bg,
                zIndex: index + 1,
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Giant background number */}
            <span
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    right: '-2%',
                    bottom: '-8%',
                    fontSize: 'clamp(160px, 28vw, 380px)',
                    fontWeight: 700,
                    lineHeight: 1,
                    color: service.accent,
                    opacity: 0.12,
                    userSelect: 'none',
                    letterSpacing: '-0.05em',
                    pointerEvents: 'none',
                }}
            >
                {num}
            </span>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: 'clamp(32px, 6vw, 80px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(20px, 3vw, 36px)',
                }}
            >
                {/* Top row: number pill + icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <span
                        style={{
                            fontFamily: 'Space Mono, monospace',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            color: service.accent,
                            background: `${service.accent}22`,
                            padding: '6px 14px',
                            borderRadius: '999px',
                        }}
                    >
                        {num} / {String(services.length).padStart(2, '0')}
                    </span>

                    <div
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '16px',
                            background: service.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <Icon size={22} color={service.accent === '#FFD23F' ? '#1C1814' : '#fff'} />
                    </div>
                </div>

                {/* Big title */}
                <h3
                    style={{
                        fontSize: 'clamp(36px, 7vw, 96px)',
                        fontWeight: 700,
                        lineHeight: 1.05,
                        letterSpacing: '-0.02em',
                        color: service.textColor,
                        maxWidth: '900px',
                    }}
                >
                    {service.title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        fontSize: 'clamp(15px, 1.6vw, 22px)',
                        lineHeight: 1.65,
                        color: service.mutedColor,
                        maxWidth: '640px',
                        fontWeight: 400,
                    }}
                >
                    {service.description}
                </p>

                {/* CTA */}
                <div>
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: service.accent,
                            color: service.accent === '#FFD23F' ? '#1C1814' : '#fff',
                            padding: '14px 28px',
                            borderRadius: '14px',
                            fontWeight: 700,
                            fontSize: '14px',
                            border: 'none',
                            cursor: 'pointer',
                            letterSpacing: '0.02em',
                            transition: 'transform 0.15s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="services" style={{ background: '#F5F0E8' }}>
            {/* Section header — scrolls away before cards begin */}
            <div
                ref={ref}
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: 'clamp(56px, 8vw, 112px) clamp(20px, 6vw, 48px) clamp(48px, 6vw, 80px)',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">What We Do</span>
                    <h2 className="section-title mt-3">
                        Our{' '}
                        <span style={{ background: '#5B4FE9', color: '#fff', padding: '2px 20px', borderRadius: '16px', display: 'inline-block' }}>
                            Solutions
                        </span>
                    </h2>
                    <p style={{ color: '#6B6057', fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.7, marginTop: '20px', maxWidth: '560px' }}>
                        A complete suite of digital services designed to transform your business and accelerate growth. Scroll down to explore.
                    </p>
                </motion.div>
            </div>

            {/* Stacking cards — each is 100vh + sticky top:0 */}
            <div>
                {services.map((service, index) => (
                    <FullCard key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* Spacer so content after cards starts cleanly */}
            <div style={{ height: '80px', background: '#F5F0E8' }} />
        </section>
    );
}
