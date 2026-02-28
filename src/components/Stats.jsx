import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 2000, suffix: '+', label: 'Excelling Businesses' },
    { value: 500, suffix: '+', label: 'Happy Customers' },
    { value: 1000, suffix: '+', label: 'Creative Projects' },
];

function useCounter(target, isInView, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
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
            className="relative flex flex-col items-center text-center px-8 py-10 group"
            id={`stat-card-${index}`}
        >
            {/* Vertical divider (except first) */}
            {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/10 hidden md:block" />
            )}

            {/* Number */}
            <div className="stat-number text-5xl md:text-6xl font-black tracking-tight mb-2">
                {count.toLocaleString()}{stat.suffix}
            </div>

            {/* Label */}
            <p className="text-sm text-white/50 font-medium tracking-wide">{stat.label}</p>
        </motion.div>
    );
}

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="stats" className="py-20 relative overflow-hidden" ref={ref}>
            {/* Background gradient stripe */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-surface to-accent/5" />
            <div className="absolute inset-0 bg-[#0A0A0A]/80" />

            {/* Top/bottom border gradient lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="relative max-w-5xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center section-label mb-2"
                >
                    Our Impact in Numbers
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-white/10">
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} isInView={isInView} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
