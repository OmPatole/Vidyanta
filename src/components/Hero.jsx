import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
    const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section
            id="home"
            style={{
                position: 'relative',
                minHeight: '100svh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#F5F0E8',
                padding: 'clamp(80px, 10vw, 120px) clamp(20px, 6vw, 48px) clamp(60px, 8vw, 80px)',
            }}
        >
            {/* Decorative shapes — scaled for mobile */}
            <div style={{ position: 'absolute', width: 'clamp(200px, 40vw, 560px)', height: 'clamp(200px, 40vw, 560px)', border: '2px solid rgba(91,79,233,0.2)', borderRadius: '32px', top: '-8%', right: '-8%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: 'clamp(120px, 20vw, 320px)', height: 'clamp(120px, 20vw, 320px)', border: '2px solid rgba(91,79,233,0.12)', borderRadius: '32px', bottom: '-5%', left: '-5%', pointerEvents: 'none' }} />

            {/* Floating accent blocks — hidden on very small screens via CSS */}
            <div className="hero-deco-1" style={{ position: 'absolute', width: 'clamp(44px, 6vw, 112px)', height: 'clamp(44px, 6vw, 112px)', borderRadius: '24px', background: '#FF3D57', top: '14%', right: '9%', transform: 'rotate(18deg)', opacity: 0.85 }} />
            <div className="hero-deco-2" style={{ position: 'absolute', width: 'clamp(32px, 4vw, 64px)', height: 'clamp(32px, 4vw, 64px)', borderRadius: '16px', background: '#5B4FE9', bottom: '18%', left: '7%', transform: 'rotate(-12deg)', opacity: 0.7 }} />
            <div className="hero-deco-3" style={{ position: 'absolute', width: 'clamp(24px, 3vw, 40px)', height: 'clamp(24px, 3vw, 40px)', borderRadius: '10px', background: '#FFD23F', top: '60%', right: '5%', transform: 'rotate(8deg)', opacity: 0.8 }} />

            <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(20px, 3vw, 28px)' }}>

                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', background: '#5B4FE9', color: '#fff', padding: '8px 20px', borderRadius: '999px' }}>
                            <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                            Full-Service Digital Agency
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        style={{ fontSize: 'clamp(40px, 9vw, 108px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#1C1814', margin: 0 }}
                    >
                        Engage.{' '}
                        <span style={{ display: 'inline-block', background: '#FF3D57', color: '#fff', padding: 'clamp(10px, 1.8vw, 26px) clamp(40px, 7vw, 96px)', borderRadius: '999px' }}>
                            Enhance.
                        </span>{' '}
                        Expand.
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p variants={itemVariants} style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: '#6B6057', maxWidth: '580px', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>
                        Improve Digital Presence of Your Business. We build Robust 360° Digital Solutions to promote your business effectively.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                        <button id="hero-get-started-btn" onClick={() => go('#contact')} className="btn-primary">
                            Get Started <ArrowRight size={16} />
                        </button>
                        <button id="hero-view-more-btn" onClick={() => go('#services')} className="btn-outline">
                            View More
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(20px, 4vw, 40px)', marginTop: 'clamp(16px, 2vw, 28px)', paddingTop: 'clamp(16px, 2vw, 28px)', borderTop: '1px solid rgba(28,24,20,0.12)', width: '100%' }}
                    >
                        {[
                            { value: '2000+', label: 'Businesses Served', color: '#FF3D57' },
                            { value: '500+', label: 'Happy Customers', color: '#5B4FE9' },
                            { value: '1000+', label: 'Creative Projects', color: '#00C896' },
                        ].map((s) => (
                            <div key={s.label} style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: s.color, margin: 0 }}>{s.value}</p>
                                <p style={{ fontSize: 'clamp(11px, 1vw, 13px)', color: '#6B6057', marginTop: '4px', fontWeight: 500, letterSpacing: '0.05em' }}>{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                    style={{ position: 'absolute', bottom: '-48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'rgba(28,24,20,0.3)' }}
                >
                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>Scroll</span>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ChevronDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
