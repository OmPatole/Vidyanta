import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';
import pageLogo from '/public/assets/PageLogo.png';

const INK = '#1C1814';
const MUTED = '#6B6057';
const CREAM2 = '#EDE8DF';

const footerLinks = {
    company: [
        { name: 'About Us', href: '#about' },
        { name: 'Solutions', href: '#services' },
        { name: 'Clients', href: '#clients' },
        { name: 'Contact', href: '#contact' },
        { name: 'eCommerce', href: '#ecommerce' },
    ],
    services: [
        { name: 'Corporate Branding', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'Ecommerce Dev', href: '#services' },
        { name: 'Website Speed Boost', href: '#services' },
    ],
};

const scroll = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

function FooterLink({ href, children, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <motion.a
                href={href}
                onClick={(e) => { e.preventDefault(); scroll(href); }}
                whileHover={{ x: 6, color: INK }}
                style={{ fontSize: 'clamp(13px, 1vw, 14px)', color: MUTED, textDecoration: 'none', display: 'inline-block', transition: 'color 0.2s', cursor: 'pointer' }}
            >
                {children}
            </motion.a>
        </motion.div>
    );
}

export default function Footer() {
    return (
        <footer style={{ background: '#F5F0E8', borderTop: '2px solid #5B4FE9', overflow: 'hidden' }}>
            {/* Pre-footer CTA */}
            <div style={{ padding: 'clamp(56px, 8vw, 96px) clamp(20px, 6vw, 48px)', borderBottom: '1px solid rgba(28,24,20,0.1)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(16px, 2.5vw, 28px)' }}>
                        <span className="section-label">Start a Project</span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: INK, margin: 0, maxWidth: '800px' }}>
                            So what's next?{' '}
                            <motion.span
                                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ background: '#5B4FE9', color: '#fff', padding: '2px clamp(12px, 2vw, 24px)', borderRadius: 'clamp(10px, 1.5vw, 18px)', display: 'inline-block' }}
                            >
                                Let's Talk
                            </motion.span>
                            <br />About Your Idea.
                        </h2>
                        <p style={{ maxWidth: '480px', fontSize: 'clamp(14px, 1.3vw, 17px)', color: MUTED, lineHeight: 1.7 }}>
                            We're ready to bring your vision to life. Let's build something extraordinary together.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <motion.button id="footer-cta-btn" onClick={() => scroll('#contact')} className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ padding: 'clamp(12px,1.5vw,16px) clamp(28px,3vw,48px)' }}>
                                Let's Talk <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight size={16} /></motion.span>
                            </motion.button>
                            <motion.a href="mailto:hello@vidyantatech.com" className="btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ padding: 'clamp(12px,1.5vw,16px) clamp(20px,2.5vw,32px)', cursor: 'pointer' }}>
                                <Mail size={15} /> Email Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Grid */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 6vw, 48px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 'clamp(32px, 4vw, 48px)', marginBottom: 'clamp(32px, 4vw, 56px)' }}>

                    {/* Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', gridColumn: 'span 1' }}>
                        <motion.a href="#home" onClick={(e) => { e.preventDefault(); scroll('#home'); }} whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', width: 'fit-content' }}>
                            <img src={pageLogo} alt="vidyantatech logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                        </motion.a>
                        <p style={{ fontSize: 'clamp(12px, 1vw, 13px)', color: MUTED, lineHeight: 1.7 }}>A full-service Digital Agency focused on one ultimate goal: Your Business's Success.</p>
                        <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: MUTED, cursor: 'default' }}>
                            <Phone size={13} color="#5B4FE9" style={{ flexShrink: 0 }} /> +91 79 7212 3806
                        </motion.div>
                        <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: MUTED, cursor: 'default' }}>
                            <Mail size={13} color="#5B4FE9" style={{ flexShrink: 0 }} /> hello@vidyantatech.com
                        </motion.div>
                    </div>

                    {/* Company */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, color: INK, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>Company</h4>
                        {footerLinks.company.map((l, i) => <FooterLink key={l.name} href={l.href} delay={i * 0.1}>{l.name}</FooterLink>)}
                    </div>

                    {/* Services */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, color: INK, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>Services</h4>
                        {footerLinks.services.map((l, i) => <FooterLink key={l.name} href={l.href} delay={i * 0.1}>{l.name}</FooterLink>)}
                    </div>

                    {/* Social */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, color: INK, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Connect With Us</h4>
                        {[
                            { id: 'social-facebook', Icon: Facebook, color: '#1877F2', label: 'Facebook' },
                            { id: 'social-instagram', Icon: Instagram, color: '#E1306C', label: 'Instagram' },
                            { id: 'social-whatsapp', Icon: MessageCircle, color: '#25D366', label: 'WhatsApp', href: 'https://wa.me/917972123806', external: true },
                        ].map(({ id, Icon, color, label, href, external }, i) => (
                            <motion.a
                                key={id} id={id} href={href || '#'} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ x: 6, color: INK }}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: MUTED, textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                            >
                                <motion.div whileHover={{ rotate: 15, scale: 1.1 }} style={{ width: '36px', height: '36px', borderRadius: '10px', background: CREAM2, border: `1.5px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={15} color={color} />
                                </motion.div>
                                {label}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', paddingTop: 'clamp(16px, 2vw, 24px)', borderTop: '1px solid rgba(28,24,20,0.1)' }}>
                    <p style={{ fontSize: '12px', color: 'rgba(28,24,20,0.5)' }}>© 2026 vidyantatech. Made in India 🇮🇳</p>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '12px', color: 'rgba(28,24,20,0.5)' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
