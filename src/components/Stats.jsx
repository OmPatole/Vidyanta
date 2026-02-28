import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 2000, suffix: '+', label: 'Excelling Businesses', color: '#5B4FE9', accent: '#FFD23F' },
    { value: 500, suffix: '+', label: 'Happy Customers', color: '#FF3D57', accent: '#fff' },
    { value: 1000, suffix: '+', label: 'Creative Projects', color: '#00C896', accent: '#1C1814' },
];

function useCounter(target, isInView, duration = 2000) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target, duration]);
    return count;
}

function StatCard({ stat, isInView, index }) {
    const count = useCounter(stat.value, isInView, 2000 + index * 300);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            id={`stat-card-${index}`}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'clamp(32px, 5vw, 56px) clamp(20px, 4vw, 48px)',
                borderRadius: '24px',
                background: stat.color,
                overflow: 'hidden',
                cursor: 'default',
            }}
        >
            {/* Inner outline rect */}
            <div style={{ position: 'absolute', inset: '12px', borderRadius: '16px', border: '2px solid rgba(255,255,255,0.18)', pointerEvents: 'none' }} />

            {/* Animated accent orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.08, 0.18] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
                style={{ position: 'absolute', top: '-20%', right: '-15%', width: '60%', height: '60%', borderRadius: '50%', background: stat.accent, filter: 'blur(32px)', pointerEvents: 'none' }}
            />

            {/* Ghost big number */}
            <span aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', fontSize: 'clamp(80px, 14vw, 160px)', fontWeight: 700, color: 'rgba(255,255,255,0.08)', lineHeight: 1, userSelect: 'none' }}>
                {count.toLocaleString()}{stat.suffix}
            </span>

            {/* Count */}
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.18 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: 'clamp(44px, 7vw, 72px)', fontWeight: 700, color: '#fff', position: 'relative', zIndex: 1, lineHeight: 1.1 }}
            >
                {count.toLocaleString()}{stat.suffix}
            </motion.div>

            {/* Animated bar below number */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.18 + 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '48px', height: '3px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px', margin: '10px 0 8px', transformOrigin: 'left', position: 'relative', zIndex: 1 }}
            />

            <p style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'rgba(255,255,255,0.75)', fontWeight: 500, letterSpacing: '0.05em', position: 'relative', zIndex: 1 }}>
                {stat.label}
            </p>
        </motion.div>
    );
}

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="stats" ref={ref} style={{ background: '#F5F0E8', padding: 'clamp(48px, 7vw, 96px) clamp(20px, 6vw, 48px)', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 56px)' }}
                >
                    <span className="section-label">Our Impact in Numbers</span>
                </motion.div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'clamp(12px, 2vw, 24px)' }}>
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} isInView={isInView} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
