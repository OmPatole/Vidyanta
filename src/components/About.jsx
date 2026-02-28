import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const highlights = [
    { text: 'Brand Development & Identity', color: '#5B4FE9' },
    { text: 'Online Marketing & Growth', color: '#FF3D57' },
    { text: 'Robust Tech Solutions', color: '#00C896' },
    { text: 'End-to-End Digital Strategy', color: '#FFD23F' },
];

function GeometricVisual() {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: 'clamp(280px, 40vw, 420px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: 'clamp(200px, 28vw, 320px)', height: 'clamp(200px, 28vw, 320px)', border: '2px solid rgba(91,79,233,0.18)', borderRadius: '40px', transform: 'rotate(8deg)' }} />
            <div style={{ position: 'absolute', width: 'clamp(80px, 10vw, 128px)', height: 'clamp(80px, 10vw, 128px)', borderRadius: '24px', background: '#FF3D57', top: '8%', left: '10%' }} />
            <div style={{ position: 'absolute', width: 'clamp(56px, 7vw, 80px)', height: 'clamp(56px, 7vw, 80px)', borderRadius: '18px', background: '#FFD23F', bottom: '10%', right: '8%' }} />
            <div style={{ position: 'absolute', width: 'clamp(40px, 5vw, 56px)', height: 'clamp(40px, 5vw, 56px)', borderRadius: '14px', background: '#00C896', top: '55%', left: '5%' }} />
            {/* Centre card */}
            <div style={{ position: 'relative', zIndex: 2, width: 'clamp(160px, 18vw, 208px)', height: 'clamp(160px, 18vw, 208px)', borderRadius: '30px', background: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#fff', margin: 0 }}>360°</p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '6px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>Digital</p>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" style={{ background: '#F5F0E8', padding: 'clamp(56px, 8vw, 112px) clamp(20px, 6vw, 48px)', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

                    {/* Text */}
                    <motion.div variants={fadeLeft} initial="hidden" animate={isInView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 24px)' }}>
                        <span className="section-label">About Us</span>
                        <h2 className="section-title glow-underline">
                            We're Focused on{' '}
                            <span style={{ background: '#5B4FE9', color: '#fff', padding: '2px 16px', borderRadius: '16px', display: 'inline-block' }}>One Goal:</span>
                            <br />Your Success.
                        </h2>
                        <p style={{ color: '#6B6057', lineHeight: 1.7, fontSize: 'clamp(14px, 1.3vw, 17px)', fontWeight: 400 }}>
                            We are a full-service Digital Agency focused on one ultimate goal: Client's Success.
                            From concept to launch, we craft digital experiences that drive growth, build trust,
                            and create lasting impact in your industry.
                        </p>
                        <p style={{ color: '#6B6057', lineHeight: 1.7, fontSize: 'clamp(14px, 1.3vw, 17px)', fontWeight: 400 }}>
                            We offer brand development, online marketing, and robust tech solutions — everything
                            your business needs to thrive in the digital age.
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px', listStyle: 'none', padding: 0 }}>
                            {highlights.map((item) => (
                                <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'clamp(13px, 1.2vw, 15px)', fontWeight: 600, color: '#1C1814' }}>
                                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '8px' }}>
                            <button id="about-learn-more-btn" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                                Our Services
                            </button>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div variants={fadeRight} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                        <GeometricVisual />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
