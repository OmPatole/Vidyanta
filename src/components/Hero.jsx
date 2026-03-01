import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const HERO_PADDING = 'clamp(80px, 10vw, 120px) clamp(20px, 6vw, 48px) clamp(60px, 8vw, 80px)';
const OVERLAY_MASK = 'linear-gradient(to bottom, transparent 64px, black 64px)';

const floatAnimation = (delay) => ({
    y: [0, -15, 0],
    rotate: [-2, 2, -2],
    transition: { duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay },
});

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 40 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 40 });
    const maskSize = useSpring(0, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px), (hover: none), (pointer: coarse)');

        const updateIsMobile = () => {
            const nextMobile = mediaQuery.matches;
            setIsMobile(nextMobile);
            if (nextMobile) {
                setIsHovered(false);
                setIsClicked(false);
                maskSize.set(0);
            }
        };

        updateIsMobile();

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', updateIsMobile);
            return () => mediaQuery.removeEventListener('change', updateIsMobile);
        }

        mediaQuery.addListener(updateIsMobile);
        return () => mediaQuery.removeListener(updateIsMobile);
    }, [maskSize]);

    useEffect(() => {
        if (isMobile) {
            maskSize.set(0);
        } else if (isClicked) {
            maskSize.set(2500); // large enough to cover screen
        } else if (isHovered) {
            maskSize.set(110);
        } else {
            maskSize.set(0);
        }
    }, [isHovered, isClicked, isMobile, maskSize]);

    const clipPath = useMotionTemplate`circle(${maskSize}px at ${mouseX}px ${mouseY}px)`;

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

    const MobileSquareMesh = () => (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 1,
                backgroundImage: 'linear-gradient(rgba(58,58,58,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(58,58,58,0.16) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 0',
                opacity: 0.6,
                maskImage: 'linear-gradient(to bottom, transparent 64px, black 110px, black 78%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 64px, black 110px, black 78%, transparent 100%)',
            }}
        />
    );

    const revealedFrameOneStyle = isMobile
        ? { width: 'clamp(180px, 62vw, 320px)', height: 'clamp(180px, 62vw, 320px)', top: '-12%', right: '-26%' }
        : { width: 'clamp(300px, 50vw, 700px)', height: 'clamp(300px, 50vw, 700px)', top: '-20%', right: '-10%' };
    const revealedFrameTwoStyle = isMobile
        ? { width: 'clamp(140px, 44vw, 240px)', height: 'clamp(140px, 44vw, 240px)', bottom: '-8%', left: '-22%' }
        : { width: 'clamp(200px, 30vw, 400px)', height: 'clamp(200px, 30vw, 400px)', bottom: '-10%', left: '-10%' };
    const revealedAccentOneStyle = isMobile
        ? { width: 'clamp(30px, 9vw, 56px)', height: 'clamp(30px, 9vw, 56px)', top: '14%', right: '8%' }
        : { width: 'clamp(44px, 6vw, 112px)', height: 'clamp(44px, 6vw, 112px)', top: '20%', right: '15%' };
    const revealedAccentTwoStyle = isMobile
        ? { width: 'clamp(24px, 7vw, 40px)', height: 'clamp(24px, 7vw, 40px)', bottom: '16%', left: '6%' }
        : { width: 'clamp(32px, 4vw, 64px)', height: 'clamp(32px, 4vw, 64px)', bottom: '25%', left: '12%' };
    const revealedAccentThreeStyle = isMobile
        ? { width: 'clamp(20px, 6vw, 32px)', height: 'clamp(20px, 6vw, 32px)', top: '48%', right: '4%' }
        : { width: 'clamp(24px, 3vw, 40px)', height: 'clamp(24px, 3vw, 40px)', top: '55%', right: '8%' };

    const baseFrameOneStyle = isMobile
        ? { width: 'clamp(170px, 58vw, 280px)', height: 'clamp(170px, 58vw, 280px)', top: '-12%', right: '-24%' }
        : { width: 'clamp(200px, 40vw, 560px)', height: 'clamp(200px, 40vw, 560px)', top: '-8%', right: '-8%' };
    const baseFrameTwoStyle = isMobile
        ? { width: 'clamp(120px, 36vw, 200px)', height: 'clamp(120px, 36vw, 200px)', bottom: '-6%', left: '-20%' }
        : { width: 'clamp(120px, 20vw, 320px)', height: 'clamp(120px, 20vw, 320px)', bottom: '-5%', left: '-5%' };
    const baseAccentOneStyle = isMobile
        ? { width: 'clamp(32px, 9vw, 56px)', height: 'clamp(32px, 9vw, 56px)', top: '10%', right: '4%' }
        : { width: 'clamp(44px, 6vw, 112px)', height: 'clamp(44px, 6vw, 112px)', top: '14%', right: '9%' };
    const baseAccentTwoStyle = isMobile
        ? { width: 'clamp(22px, 6.5vw, 36px)', height: 'clamp(22px, 6.5vw, 36px)', bottom: '14%', left: '4%' }
        : { width: 'clamp(32px, 4vw, 64px)', height: 'clamp(32px, 4vw, 64px)', bottom: '18%', left: '7%' };
    const baseAccentThreeStyle = isMobile
        ? { width: 'clamp(18px, 5vw, 30px)', height: 'clamp(18px, 5vw, 30px)', top: '44%', right: '2%' }
        : { width: 'clamp(24px, 3vw, 40px)', height: 'clamp(24px, 3vw, 40px)', top: '60%', right: '5%' };

    const RevealedHeroDesign = () => (
        <>
            {/* Tech/Creative background grid or shapes */}
            <motion.div
                animate={{ rotate: 180, scale: [1, 1.2, 1] }}
                transition={{ rotate: { duration: 50, repeat: Infinity, ease: 'linear' }, scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' } }}
                style={{ position: 'absolute', border: '2px solid rgba(0, 200, 150, 0.4)', borderRadius: '32px', pointerEvents: 'none', ...revealedFrameOneStyle }}
            />
            <motion.div
                animate={{ rotate: -180, scale: [1, 1.15, 1] }}
                transition={{ rotate: { duration: 40, repeat: Infinity, ease: 'linear' }, scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
                style={{ position: 'absolute', border: '2px solid rgba(0, 200, 150, 0.4)', borderRadius: '32px', pointerEvents: 'none', ...revealedFrameTwoStyle }}
            />

            {/* Futuristic accents */}
            <motion.div
                animate={floatAnimation(0)}
                style={{ position: 'absolute', borderRadius: '30%', background: '#00C896', opacity: 0.9, ...revealedAccentOneStyle }}
            />
            <motion.div
                animate={floatAnimation(1)}
                style={{ position: 'absolute', borderRadius: '30%', background: '#5B4FE9', opacity: 0.8, ...revealedAccentTwoStyle }}
            />
            <motion.div
                animate={floatAnimation(2)}
                style={{ position: 'absolute', borderRadius: '30%', background: '#FFD23F', opacity: 0.9, ...revealedAccentThreeStyle }}
            />

            <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(20px, 3vw, 28px)' }}>
                    
                    {/* Alternate headline */}
                    <motion.h1
                        variants={itemVariants}
                        style={{ fontSize: 'clamp(40px, 9vw, 108px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#1C1814', margin: 0 }}
                    >
                        Beyond.{' '}
                        <motion.span
                            whileHover={{ rotate: [1, -2, 1] }}
                            transition={{ duration: 0.3 }}
                            style={{ display: 'inline-block', backgroundColor: '#00C896', color: '#1C1814', padding: 'clamp(10px, 1.8vw, 26px) clamp(30px, 6vw, 80px)', borderRadius: '16px' }}
                        >
                            Innovate.
                        </motion.span>
                        {' '}Scale.
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p variants={itemVariants} style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: '#1C1814', maxWidth: '620px', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>
                        Step into the future with our next-generation digital engineering. We build robust, intelligent architectures that transcend traditional boundaries.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                        <motion.button id="hero-get-started-btn-rev" onClick={(e) => { e.stopPropagation(); go('#contact'); }} style={{ background: '#00C896', color: '#fff', fontWeight: 600, padding: 'clamp(12px,1.5vw,16px) clamp(28px,3vw,48px)', borderRadius: '99px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            Launch Project <ArrowRight size={16} />
                        </motion.button>
                        <motion.button id="hero-view-more-btn-rev" onClick={(e) => { e.stopPropagation(); go('#services'); }} style={{ background: 'transparent', color: '#1C1814', fontWeight: 600, padding: 'clamp(12px,1.5vw,16px) clamp(28px,3vw,48px)', borderRadius: '99px', border: '1px solid rgba(28,24,20,0.2)', cursor: 'pointer' }} whileHover={{ scale: 1.05, background: 'rgba(28,24,20,0.05)' }} whileTap={{ scale: 0.95 }}>
                            Explore Tech
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(20px, 4vw, 40px)', marginTop: 'clamp(16px, 2vw, 28px)', paddingTop: 'clamp(16px, 2vw, 28px)', borderTop: '1px solid rgba(28,24,20,0.12)', width: '100%' }}
                    >
                        {[
                            { value: '99.9%', label: 'Uptime Guaranteed', color: '#00C896' },
                            { value: '10x', label: 'Growth Scaled', color: '#5B4FE9' },
                            { value: '24/7', label: 'Expert Support', color: '#FFD23F' },
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                                whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
                                style={{ textAlign: 'center', cursor: 'default' }}
                            >
                                <p style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: s.color, margin: 0 }}>{s.value}</p>
                                <p style={{ fontSize: 'clamp(11px, 1vw, 13px)', color: '#6B6057', marginTop: '4px', fontWeight: 500, letterSpacing: '0.05em' }}>{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
                    style={{ position: 'absolute', bottom: '-48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'rgba(28,24,20,0.3)' }}
                >
                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>Scroll</span>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ChevronDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );

    const BaseHeroContent = () => (
        <>
            {!isMobile && (
                <>
                    {/* Decorative shapes */}
                    <motion.div
                        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                        transition={{ rotate: { duration: 40, repeat: Infinity, ease: 'linear' }, scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
                        style={{ position: 'absolute', border: '2px solid rgba(91,79,233,0.2)', borderRadius: '32px', pointerEvents: 'none', ...baseFrameOneStyle }}
                    />
                    <motion.div
                        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                        transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
                        style={{ position: 'absolute', border: '2px solid rgba(91,79,233,0.12)', borderRadius: '32px', pointerEvents: 'none', ...baseFrameTwoStyle }}
                    />

                    {/* Floating accent blocks */}
                    <motion.div
                        animate={floatAnimation(0)}
                        className="hero-deco-1"
                        style={{ position: 'absolute', borderRadius: '24px', background: '#FF3D57', opacity: 0.85, ...baseAccentOneStyle }}
                    />
                    <motion.div
                        animate={floatAnimation(1)}
                        className="hero-deco-2"
                        style={{ position: 'absolute', borderRadius: '16px', background: '#5B4FE9', opacity: 0.7, ...baseAccentTwoStyle }}
                    />
                    <motion.div
                        animate={floatAnimation(2)}
                        className="hero-deco-3"
                        style={{ position: 'absolute', borderRadius: '10px', background: '#FFD23F', opacity: 0.8, ...baseAccentThreeStyle }}
                    />
                </>
            )}

            <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(20px, 3vw, 28px)' }}>
                    
                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        style={{ fontSize: 'clamp(40px, 9vw, 108px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#1C1814', margin: 0 }}
                    >
                        Engage.{' '}
                        <motion.span
                            style={{ display: 'inline-block', backgroundColor: '#FF6A00', color: '#fff', padding: 'clamp(10px, 1.8vw, 26px) clamp(40px, 7vw, 96px)', borderRadius: '999px' }}
                        >
                            Enhance.
                        </motion.span>
                        {' '}Expand.
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p variants={itemVariants} style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: '#6B6057', maxWidth: '580px', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>
                        Grow your business online. We build simple, powerful digital solutions to help your brand succeed and reach more customers.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                        <motion.button id="hero-get-started-btn" onClick={(e) => { e.stopPropagation(); go('#contact'); }} className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Get Started <ArrowRight size={16} />
                            </motion.span>
                        </motion.button>
                        <motion.button id="hero-view-more-btn" onClick={(e) => { e.stopPropagation(); go('#services'); }} className="btn-outline" whileHover={{ scale: 1.05, backgroundColor: 'rgba(28,24,20,0.05)' }} whileTap={{ scale: 0.95 }}>
                            View More
                        </motion.button>
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
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                                whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
                                style={{ textAlign: 'center', cursor: 'default' }}
                            >
                                <p style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, color: s.color, margin: 0 }}>{s.value}</p>
                                <p style={{ fontSize: 'clamp(11px, 1vw, 13px)', color: '#6B6057', marginTop: '4px', fontWeight: 500, letterSpacing: '0.05em' }}>{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
                    style={{ position: 'absolute', bottom: '-48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'rgba(28,24,20,0.3)' }}
                >
                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>Scroll</span>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ChevronDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );

    return (
        <section
            id="home"
            onMouseMove={isMobile ? undefined : handleMouseMove}
            onMouseEnter={isMobile ? undefined : () => setIsHovered(true)}
            onMouseLeave={isMobile ? undefined : () => { setIsHovered(false); setIsClicked(false); }}
            onClick={isMobile ? undefined : () => setIsClicked(!isClicked)}
            style={{
                position: 'relative',
                minHeight: '100svh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#F5F0E8',
                cursor: isMobile ? 'default' : (isClicked ? 'default' : 'crosshair'),
                padding: HERO_PADDING,
            }}
        >
            {isMobile && <MobileSquareMesh />}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <BaseHeroContent />
            </div>

            {!isMobile && (
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 20,
                    pointerEvents: isClicked ? 'auto' : 'none',
                    maskImage: OVERLAY_MASK,
                    WebkitMaskImage: OVERLAY_MASK,
                }}
            >
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: '#ECE4D8',
                        clipPath,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: HERO_PADDING,
                    }}
                >
                    <RevealedHeroDesign />
                </motion.div>
            </div>
            )}
        </section>
    );
}
