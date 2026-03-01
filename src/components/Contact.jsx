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
    transition: 'border-color 0.2s, background-color 0.2s',
};

const inputFocusStyle = {
    background: '#fff',
    borderColor: '#5B4FE9',
};

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('There was a problem sending the message. Please try again.');
            }
        } catch (error) {
            console.error('Submission failed', error);
            alert('Could not reach the server. Please ensure the backend is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        'Website Development', 'Ecommerce Development', 'Website Migration',
        'Website Speed Boost', 'Corporate Branding', 'UI-UX Design', 'Domain, Hosting & SSL', 'Other',
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section id="contact" style={{ background: '#F5F0E8', padding: 'clamp(56px, 8vw, 112px) clamp(20px, 6vw, 48px)', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
                    <span className="section-label">Let's Talk</span>
                    <h2 className="section-title" style={{ marginTop: '12px' }}>
                        Ready to{' '}
                        <motion.span
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ background: '#5B4FE9', color: '#fff', padding: '2px 16px', borderRadius: '16px', display: 'inline-block' }}
                        >
                            Grow
                        </motion.span>{' '}
                        Your Business?
                    </h2>
                    <p style={{ maxWidth: '500px', margin: 'clamp(12px,2vw,20px) auto 0', fontSize: 'clamp(14px,1.3vw,17px)', color: MUTED, lineHeight: 1.7 }}>
                        Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(32px, 5vw, 64px)' }}>
                    {/* Info */}
                    <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 32px)' }}>
                        <motion.div variants={itemVariants}>
                            <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 700, color: INK, marginBottom: '8px' }}>Get In Touch</h3>
                            <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: MUTED, lineHeight: 1.7 }}>Have a project in mind? Reach out and let's build something great together.</p>
                        </motion.div>

                        {[
                            { icon: Mail, label: 'Email', value: 'Vidyantatech@proton.me' },
                            { icon: Phone, label: 'Phone', value: '+91 84465 76377' },
                            { icon: MapPin, label: 'Location', value: 'India — Serving Worldwide' },
                        ].map(({ icon: Icon, label, value }) => (
                            <motion.div
                                key={label}
                                variants={itemVariants}
                                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.4)' }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '10px', borderRadius: '16px', marginLeft: '-10px', transition: 'background-color 0.2s', cursor: 'pointer' }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                                >
                                    <Icon size={17} color="#fff" />
                                </motion.div>
                                <div>
                                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED, marginBottom: '4px' }}>{label}</p>
                                    <p style={{ fontSize: 'clamp(13px, 1.2vw, 14px)', fontWeight: 600, color: INK }}>{value}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Promise */}
                        <motion.div variants={itemVariants} whileHover={{ y: -4, boxShadow: '0 10px 30px -10px rgba(91,79,233,0.1)' }} style={{ padding: 'clamp(16px, 2vw, 20px)', borderRadius: '18px', background: CREAM2, border: '1.5px solid rgba(28,24,20,0.1)', transition: 'box-shadow 0.3s' }}>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: INK, marginBottom: '12px' }}>Our Promise</p>
                            {['Response within 24 hours', 'Free initial consultation', 'No hidden charges'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: MUTED, marginTop: '8px' }}
                                >
                                    <CheckCircle size={14} color={['#5B4FE9', '#FF3D57', '#00C896'][i]} style={{ flexShrink: 0 }} />
                                    {item}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
                        {submitted ? (
                            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '360px', gap: '16px', textAlign: 'center', padding: 'clamp(32px, 5vw, 56px)', borderRadius: '22px', background: CREAM2, border: '1.5px solid rgba(28,24,20,0.1)' }}
                            >
                                <motion.div
                                    animate={{ scale: [0, 1.2, 1] }}
                                    transition={{ duration: 0.5, type: 'spring' }}
                                    style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CheckCircle size={32} color="#fff" />
                                </motion.div>
                                <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 700, color: INK }}>Message Sent!</motion.h3>
                                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ fontSize: '14px', color: MUTED, maxWidth: '280px', lineHeight: 1.6 }}>Thank you. We'll get back to you within 24 hours.</motion.p>
                                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} onClick={() => setSubmitted(false)} className="btn-outline" style={{ fontSize: '13px', marginTop: '8px' }}>Send Another Message</motion.button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} id="contact-form"
                                style={{ background: CREAM2, border: '1.5px solid rgba(28,24,20,0.1)', borderRadius: '22px', padding: 'clamp(24px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 20px)', position: 'relative', overflow: 'hidden' }}
                            >
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(12px, 2vw, 20px)' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="name" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: focusedField === 'name' ? '#5B4FE9' : MUTED, transition: 'color 0.2s' }}>Full Name *</label>
                                        <input id="name" name="name" type="text" required placeholder="John Doe" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} style={{ ...inputStyle, ...(focusedField === 'name' ? inputFocusStyle : {}) }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="email" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: focusedField === 'email' ? '#5B4FE9' : MUTED, transition: 'color 0.2s' }}>Email Address *</label>
                                        <input id="email" name="email" type="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} style={{ ...inputStyle, ...(focusedField === 'email' ? inputFocusStyle : {}) }} />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(12px, 2vw, 20px)' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="phone" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: focusedField === 'phone' ? '#5B4FE9' : MUTED, transition: 'color 0.2s' }}>Phone Number</label>
                                        <input id="phone" name="phone" type="tel" placeholder="+91 84465 76377" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} style={{ ...inputStyle, ...(focusedField === 'phone' ? inputFocusStyle : {}) }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <label htmlFor="service" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: focusedField === 'service' ? '#5B4FE9' : MUTED, transition: 'color 0.2s' }}>Service Needed</label>
                                        <select id="service" name="service" value={formData.service} onChange={handleChange} onFocus={() => setFocusedField('service')} onBlur={() => setFocusedField(null)} style={{ ...inputStyle, ...(focusedField === 'service' ? inputFocusStyle : {}), appearance: 'none', cursor: 'pointer' }}>
                                            <option value="">Select a service</option>
                                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label htmlFor="message" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: focusedField === 'message' ? '#5B4FE9' : MUTED, transition: 'color 0.2s' }}>Your Message *</label>
                                    <textarea id="message" name="message" required rows={4} placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} style={{ ...inputStyle, ...(focusedField === 'message' ? inputFocusStyle : {}), resize: 'none' }} />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    id="contact-submit-btn"
                                    className="btn-primary"
                                    disabled={isSubmitting}
                                    style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Send size={15} /></motion.span>}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
