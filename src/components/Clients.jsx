import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clients = [
    { name: 'TechNova', bg: '#5B4FE9', dark: false },
    { name: 'BrightMedia', bg: '#FFD23F', dark: true },
    { name: 'PixelCraft', bg: '#FF3D57', dark: false },
    { name: 'SkyBridge', bg: '#00C896', dark: true },
    { name: 'CloudFlux', bg: '#5B4FE9', dark: false },
    { name: 'NexGen', bg: '#1C1814', dark: false },
    { name: 'Alphaworks', bg: '#FF3D57', dark: false },
    { name: 'Zephyr Inc.', bg: '#FFD23F', dark: true },
    { name: 'OmniSoft', bg: '#00C896', dark: true },
    { name: 'DataSync', bg: '#5B4FE9', dark: false },
    { name: 'BuildFast', bg: '#1C1814', dark: false },
    { name: 'Vertexia', bg: '#FF3D57', dark: false },
    { name: 'Snaplogic', bg: '#5B4FE9', dark: false },
    { name: 'CorePath', bg: '#00C896', dark: true },
];

function ClientLogo({ client }) {
    return (
        <div
            style={{ flexShrink: 0, height: 'clamp(44px, 6vw, 56px)', padding: '0 clamp(16px, 3vw, 28px)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 6px', cursor: 'default', background: client.bg, transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <span style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', fontWeight: 700, letterSpacing: '-0.01em', whiteSpace: 'nowrap', color: client.dark ? '#1C1814' : '#fff' }}>
                {client.name}
            </span>
        </div>
    );
}

export default function Clients() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const doubled = [...clients, ...clients];

    return (
        <section id="clients" style={{ background: '#F5F0E8', padding: 'clamp(56px, 8vw, 112px) 0', overflow: 'hidden' }}>
            <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 48px)', marginBottom: 'clamp(40px, 5vw, 56px)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center' }}
                >
                    <span className="section-label">Our Clients</span>
                    <h2 className="section-title" style={{ marginTop: '12px' }}>
                        Brands We{' '}
                        <span style={{ background: '#FF3D57', color: '#fff', padding: '2px clamp(12px, 2vw, 20px)', borderRadius: 'clamp(10px, 1.5vw, 16px)', display: 'inline-block' }}>
                            Love
                        </span>{' '}
                        Working For
                    </h2>
                </motion.div>
            </div>

            {/* Row 1 */}
            <div style={{ display: 'flex', overflow: 'hidden', marginBottom: '10px' }}>
                <div className="marquee-track" style={{ display: 'flex', alignItems: 'center' }}>
                    {doubled.map((c, i) => <ClientLogo key={`${c.name}-${i}`} client={c} />)}
                </div>
            </div>

            {/* Row 2 reverse */}
            <div style={{ display: 'flex', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', animation: 'marquee 25s linear infinite reverse', willChange: 'transform' }}>
                    {doubled.map((c, i) => <ClientLogo key={`rev-${c.name}-${i}`} client={c} />)}
                </div>
            </div>
        </section>
    );
}
