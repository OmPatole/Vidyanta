import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const pageLogo = `${import.meta.env.BASE_URL}assets/PageLogo.png`;

const INK = '#1C1814';
const MUTED = '#6B6057';
const PURPLE = '#5B4FE9';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            background: '#F5F0E8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(24px, 5vw, 48px)',
            overflow: 'hidden',
            position: 'relative',
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
        }}>
            {/* ── Background organic blobs ── */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    top: '-8%',
                    right: '-6%',
                    width: 'clamp(300px, 45vw, 580px)',
                    height: 'clamp(300px, 45vw, 580px)',
                    borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
                    background: 'rgba(91,79,233,0.055)',
                    pointerEvents: 'none',
                }}
            />
            <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, -90, -180, -270, -360] }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    bottom: '-12%',
                    left: '-8%',
                    width: 'clamp(350px, 50vw, 680px)',
                    height: 'clamp(350px, 50vw, 680px)',
                    borderRadius: '67% 33% 47% 53% / 37% 53% 47% 63%',
                    background: 'rgba(91,79,233,0.04)',
                    pointerEvents: 'none',
                }}
            />

            {/* ── Dot grid ── */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(91,79,233,0.07) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none',
            }} />

            {/* ── Top left logo ── */}
            <motion.a
                href="/"
                onClick={e => { e.preventDefault(); navigate('/'); }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                style={{
                    position: 'absolute',
                    top: 'clamp(20px, 3vw, 36px)',
                    left: 'clamp(20px, 5vw, 48px)',
                    textDecoration: 'none',
                }}
            >
                <img src={pageLogo} alt="Vidyantatech" style={{ height: '28px', width: 'auto' }} />
            </motion.a>

            {/* ── Main card ── */}
            <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'clamp(20px, 3vw, 36px)',
                    textAlign: 'center',
                    maxWidth: '600px',
                    width: '100%',
                }}
            >
                {/* ── Giant 404 ── */}
                <div style={{ position: 'relative', lineHeight: 1 }}>
                    {/* Ghost outline */}
                    <h1 style={{
                        fontSize: 'clamp(110px, 20vw, 220px)',
                        fontWeight: 900,
                        letterSpacing: '-0.05em',
                        color: 'transparent',
                        WebkitTextStroke: '2px rgba(28,24,20,0.07)',
                        margin: 0,
                        userSelect: 'none',
                        lineHeight: 1,
                    }}>
                        404
                    </h1>

                    {/* Glowing purple layer */}
                    <motion.div
                        animate={{ opacity: [0.12, 0.22, 0.12] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 'clamp(110px, 20vw, 220px)',
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                            color: PURPLE,
                            userSelect: 'none',
                            filter: 'blur(0px)',
                        }}
                    >
                        404
                    </motion.div>

                    {/* Glitch slice 1 */}
                    <motion.div
                        animate={{ x: [-3, 3, -3, 0], opacity: [0, 0.7, 0] }}
                        transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 3.5, ease: 'linear' }}
                        style={{
                            position: 'absolute',
                            top: '28%',
                            left: 0,
                            right: 0,
                            height: '18%',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            clipPath: 'inset(0 0 0 0)',
                            fontSize: 'clamp(110px, 20vw, 220px)',
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                            color: '#8B7FFF',
                            userSelect: 'none',
                        }}
                    >
                        404
                    </motion.div>

                    {/* "Lost?" floating badge */}
                    <motion.div
                        animate={{ y: [-7, 7, -7] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            top: '8%',
                            right: '-6%',
                            background: PURPLE,
                            color: '#fff',
                            borderRadius: '100px',
                            padding: '6px 16px',
                            fontSize: '12px',
                            fontWeight: 800,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            boxShadow: '0 8px 28px rgba(91,79,233,0.45)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Lost?
                    </motion.div>

                    {/* Star accent */}
                    <motion.div
                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '-4%',
                            width: '28px',
                            height: '28px',
                            background: PURPLE,
                            borderRadius: '4px',
                            opacity: 0.6,
                        }}
                    />
                </div>

                {/* ── Text content ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
                >
                    <span className="section-label">Page Not Found</span>
                    <h2 style={{
                        fontSize: 'clamp(22px, 4vw, 38px)',
                        fontWeight: 800,
                        color: INK,
                        lineHeight: 1.15,
                        letterSpacing: '-0.025em',
                        margin: 0,
                    }}>
                        Oops! You've wandered<br />
                        <span style={{ color: PURPLE }}>off the map.</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(14px, 1.3vw, 16px)',
                        color: MUTED,
                        lineHeight: 1.75,
                        maxWidth: '400px',
                        margin: 0,
                    }}>
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                </motion.div>

                {/* ── Action buttons ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.38 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}
                >
                    <motion.button
                        onClick={() => navigate('/')}
                        className="btn-primary"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        style={{ padding: 'clamp(12px,1.5vw,16px) clamp(24px,2.5vw,44px)' }}
                    >
                        <Home size={16} /> Go Home
                    </motion.button>
                    <motion.button
                        onClick={() => window.history.back()}
                        className="btn-outline"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        style={{ padding: 'clamp(12px,1.5vw,16px) clamp(20px,2vw,36px)' }}
                    >
                        <ArrowLeft size={16} /> Go Back
                    </motion.button>
                </motion.div>

                {/* ── Pulse dots row ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    style={{ display: 'flex', gap: '8px', paddingTop: '4px' }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.4, 1] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.22 }}
                            style={{
                                width: i === 2 ? '10px' : '6px',
                                height: i === 2 ? '10px' : '6px',
                                borderRadius: '50%',
                                background: i === 2 ? PURPLE : `rgba(91,79,233,${0.3 + i * 0.1})`,
                                display: 'block',
                                flexShrink: 0,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* ── Footer credit ── */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: 'clamp(16px, 2.5vw, 28px)',
                    fontSize: '12px',
                    color: 'rgba(28,24,20,0.35)',
                    letterSpacing: '0.04em',
                }}
            >
                © 2026 vidyantatech · Made in India 🇮🇳
            </motion.p>
        </div>
    );
}
