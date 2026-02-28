import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const INK = '#1C1814';
const MUTED = '#6B6057';
const CREAM2 = '#EDE8DF';

const inputStyle = {
    background: '#F5F0E8',
    border: '1.5px solid rgba(28,24,20,0.15)',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '14px',
    color: INK,
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
};

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

    const services = [
        'Website Development', 'Ecommerce Development', 'Website Migration',
        'Website Speed Boost', 'Corporate Branding', 'UI-UX Design', 'Domain, Hosting & SSL', 'Other',
    ];

    return (
        <section id="contact" style={{ background: '#F5F0E8', padding: 'clamp(56px, 8vw, 112px) clamp(20px, 6vw, 48px)', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
                    <span className="section-label">Let's Talk</span>
                    <h2 className="section-title" style={{ marginTop: '12px' }}>
                        Ready to{' '}
                        <span style={{ background: '#5B4FE9', color: '#fff', padding: '2px 16px', borderRadius: '16px', display: 'inline-block' }}>Grow</span>{' '}
                        Your Business?
                    </h2>
                    <p style={{ maxWidth: '500px', margin: 'clamp(12px,2vw,20px) auto 0', fontSize: 'clamp(14px,1.3vw,17px)', color: MUTED, lineHeight: 1.7 }}>
                        Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(32px, 5vw, 64px)' }}>
                    {/* Info */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 32px)' }}>
                        <div>
                            <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 700, color: INK, marginBottom: '8px' }}>Get In Touch</h3>
                            <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: MUTED, lineHeight: 1.7 }}>Have a project in mind? Reach out and let's build something great together.</p>
                        </div>

                        {[
                            { icon: Mail, label: 'Email', value: 'hello@vidyantatech.com' },
                            { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                            { icon: MapPin, label: 'Location', value: 'India — Serving Worldwide' },
                        ].map(({ icon: Icon, label, value }) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={17} color="#fff" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED, marginBottom: '4px' }}>{label}</p>
                                    <p style={{ fontSize: 'clamp(13px, 1.2vw, 14px)', fontWeight: 600, color: INK }}>{value}</p>
                                </div>
                            </div>
                        ))}

                        {/* Promise */}
                        <div style={{ padding: 'clamp(16px, 2vw, 20px)', borderRadius: '18px', background: CREAM2, border: '1.5px solid rgba(28,24,20,0.1)' }}>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: INK, marginBottom: '12px' }}>Our Promise</p>
                            {['Response within 24 hours', 'Free initial consultation', 'No hidden charges'].map((item, i) => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: MUTED, marginTop: '8px' }}>
                                    <CheckCircle size={14} color={['#5B4FE9', '#FF3D57', '#00C896'][i]} style={{ flexShrink: 0 }} />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
                        {submitted ? (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '360px', gap: '16px', textAlign: 'center', padding: 'clamp(32px, 5vw, 56px)', borderRadius: '22px', background: CREAM2, border: '1.5px solid rgba(28,24,20,0.1)' }}
                            >
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle size={32} color="#fff" />
                                </div>
                                <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 700, color: INK }}>Message Sent!</h3>
                                <p style={{ fontSize: '14px', color: MUTED, maxWidth: '280px', lineHeight: 1.6 }}>Thank you. We'll get back to you within 24 hours.</p>
                                <button onClick={() => setSubmitted(false)} className="btn-outline" style={{ fontSize: '13px', marginTop: '8px' }}>Send Another Message</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} id="contact-form"
                                style={{ background: CREAM2, border: '1.5px solid rgba(28,24,20,0.1)', borderRadius: '22px', padding: 'clamp(24px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 20px)' }}
                            >
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(12px, 2vw, 20px)' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="name" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Full Name *</label>
                                        <input id="name" name="name" type="text" required placeholder="John Doe" value={formData.name} onChange={handleChange} style={inputStyle} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="email" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Email Address *</label>
                                        <input id="email" name="email" type="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} style={inputStyle} />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(12px, 2vw, 20px)' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="phone" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Phone Number</label>
                                        <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} style={inputStyle} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="service" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Service Needed</label>
                                        <select id="service" name="service" value={formData.service} onChange={handleChange} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                                            <option value="">Select a service</option>
                                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label htmlFor="message" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Your Message *</label>
                                    <textarea id="message" name="message" required rows={4} placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
                                </div>
                                <button type="submit" id="contact-submit-btn" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Message <Send size={15} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
