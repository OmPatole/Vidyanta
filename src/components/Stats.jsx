import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 2000, suffix: '+', label: 'Excelling Businesses', color: '#5B4FE9' },
    { value: 500, suffix: '+', label: 'Happy Customers', color: '#FF3D57' },
    { value: 1000, suffix: '+', label: 'Creative Projects', color: '#00C896' },
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
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
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
            }}
        >
            {/* Inner outline rect */}
            <div style={{ position: 'absolute', inset: '12px', borderRadius: '16px', border: '2px solid rgba(255,255,255,0.18)', pointerEvents: 'none' }} />
            {/* Ghost big number */}
            <span aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', fontSize: 'clamp(80px, 14vw, 160px)', fontWeight: 700, color: 'rgba(255,255,255,0.08)', lineHeight: 1, userSelect: 'none' }}>
                {count.toLocaleString()}{stat.suffix}
            </span>
            <div style={{ fontSize: 'clamp(44px, 7vw, 72px)', fontWeight: 700, color: '#fff', position: 'relative', zIndex: 1, lineHeight: 1.1 }}>
                {count.toLocaleString()}{stat.suffix}
            </div>
            <p style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'rgba(255,255,255,0.75)', fontWeight: 500, letterSpacing: '0.05em', marginTop: '10px', position: 'relative', zIndex: 1 }}>
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
                <motion.div initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 56px)' }}>
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
