import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '/public/assets/Logo.png';

// ─── Minimal Loader ───────────────────────────────────────────────────────────
// Three elements only: logo · rotating arc · progress bar

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Fill 0 → 100 in ~1.5 s (30ms × ~50 steps)
        const id = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(id);
                    setTimeout(() => {
                        setDone(true);
                        setTimeout(onComplete, 500);
                    }, 150);
                    return 100;
                }
                return p + 2;
            });
        }, 30);
        return () => clearInterval(id);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed', inset: 0,
                        background: '#F5F0E8',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '28px',
                    }}
                >
                    {/* Logo + spinner */}
                    <div style={{ position: 'relative', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Thin arc */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute', inset: 0,
                                borderRadius: '50%',
                                border: '2px solid rgba(91,79,233,0.12)',
                                borderTopColor: '#5B4FE9',
                            }}
                        />
                        <img src={Logo} alt="Vidyantatech" style={{ height: '34px', width: 'auto' }} />
                    </div>

                    {/* Progress bar */}
                    <div style={{ width: '140px', height: '2px', background: 'rgba(28,24,20,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            borderRadius: '100px',
                            background: '#5B4FE9',
                            width: `${progress}%`,
                            transition: 'width 0.03s linear',
                        }} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
