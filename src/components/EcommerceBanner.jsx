import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PaymentIcons = ({ isInView }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {['G Pay', 'PayPal', 'Stripe', 'Apple Pay', 'VISA', 'Razorpay'].map((name, i) => (
            <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -2, transition: { duration: 0.18 } }}
                style={{ height: '36px', padding: '0 14px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', letterSpacing: '0.03em', background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'default' }}
            >
                {name}
            </motion.div>
        ))}
    </div>
);

export default function EcommerceBanner() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 40, scale: 0.88 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="ecommerce" style={{ background: '#F5F0E8', padding: 'clamp(48px, 6vw, 80px) clamp(20px, 6vw, 48px)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', background: '#FF3D57', padding: 'clamp(32px, 6vw, 72px)' }}
                >
                    {/* Decorative shapes — animated */}
                    <motion.div
                        animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'absolute', width: 'clamp(120px, 18vw, 256px)', height: 'clamp(120px, 18vw, 256px)', border: '2px solid rgba(255,255,255,0.12)', borderRadius: '48px', top: '-15%', right: '-5%', pointerEvents: 'none' }}
                    />
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ position: 'absolute', width: 'clamp(80px, 12vw, 160px)', height: 'clamp(80px, 12vw, 160px)', borderRadius: '28px', background: 'rgba(255,255,255,0.06)', bottom: '-10%', left: '30%', pointerEvents: 'none' }}
                    />

                    {/* Shimmer line */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)', pointerEvents: 'none', zIndex: 0 }}
                    />

                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(24px, 4vw, 48px)' }}>
                        {/* Left — staggered */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 24px)', maxWidth: '600px', flex: '1 1 300px' }}
                        >
                            <motion.span variants={itemVariants} style={{ display: 'inline-flex', width: 'fit-content', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', background: '#FFD23F', color: '#1C1814', padding: '6px 16px', borderRadius: '999px' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(28,24,20,0.35)' }} />
                                Special Offer
                            </motion.span>

                            <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(26px, 4.5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#fff', margin: 0 }}>
                                eCommerce Development
                                <br />
                                <span style={{ display: 'inline-block', background: '#FFD23F', color: '#1C1814', padding: '2px clamp(12px, 2vw, 24px)', borderRadius: 'clamp(10px, 1.5vw, 18px)', marginTop: '8px' }}>
                                    starts at just Rs. 45000*
                                </span>
                            </motion.h2>

                            <motion.p variants={itemVariants} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(14px, 1.3vw, 17px)', lineHeight: 1.7, fontWeight: 400 }}>
                                Integrate payment gateways and skyrocket your sales. We get your store online in no time with everything you need to succeed.
                            </motion.p>

                            <motion.div variants={itemVariants}>
                                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Supported Payment Gateways</p>
                                <PaymentIcons isInView={isInView} />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <motion.button
                                    id="ecommerce-cta-btn"
                                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#FFD23F', color: '#1C1814', padding: '14px 28px', borderRadius: '14px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                                >
                                    Let's Start <ArrowRight size={16} />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right visual */}
                        <motion.div
                            variants={rightVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
                                style={{ width: 'clamp(120px, 14vw, 176px)', height: 'clamp(120px, 14vw, 176px)', borderRadius: '28px', background: 'rgba(255,255,255,0.14)', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    <motion.div
                                        animate={{ rotate: [0, -8, 8, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '6px' }}
                                    >🛒</motion.div>
                                    <p style={{ fontSize: '12px', color: '#fff', fontWeight: 700, letterSpacing: '0.05em' }}>Your Store</p>
                                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Online, Fast</p>
                                </div>
                            </motion.div>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>*T&C apply. Pricing may vary.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
