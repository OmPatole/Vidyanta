import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
} from 'lucide-react';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
    };

    const services = [
        'Website Development',
        'Ecommerce Development',
        'Website Migration',
        'Website Speed Boost',
        'Corporate Branding',
        'UI-UX Design',
        'Domain, Hosting & SSL',
        'Other',
    ];

    return (
        <section id="contact" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-label">Let's Talk</span>
                    <h2 className="section-title">
                        Ready to <span className="text-primary">Grow</span> Your Business?
                    </h2>
                    <p className="text-white/45 max-w-lg mx-auto mt-4 text-base leading-relaxed font-light">
                        Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-2 flex flex-col gap-8"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
                            <p className="text-white/45 text-sm leading-relaxed">
                                Have a project in mind? Reach out and let's build something great together.
                            </p>
                        </div>

                        {[
                            { icon: Mail, label: 'Email', value: 'hello@vidyantatech.com' },
                            { icon: Phone, label: 'Phone', value: '+91 797212 3806' },
                            { icon: MapPin, label: 'Location', value: 'India — Serving Worldwide' },
                        ].map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon size={17} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/30 font-medium tracking-wide uppercase mb-1">{label}</p>
                                    <p className="text-sm text-white/80 font-medium">{value}</p>
                                </div>
                            </div>
                        ))}

                        {/* Promise card */}
                        <div className="p-5 rounded-md bg-surface border border-white/5 mt-4">
                            <p className="text-sm font-semibold text-white mb-2">Our Promise</p>
                            {['Response within 24 hours', 'Free initial consultation', 'No hidden charges'].map((item) => (
                                <div key={item} className="flex items-center gap-2 text-sm text-white/50 mt-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center h-full gap-4 text-center py-20 bg-surface border border-white/5 rounded-xl"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                    <CheckCircle size={32} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Message Sent!</h3>
                                <p className="text-white/50 text-sm max-w-xs">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn-outline text-xs mt-2"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-surface border border-white/5 rounded-xl p-8 flex flex-col gap-5"
                                id="contact-form"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-xs text-white/40 font-semibold uppercase tracking-wide">
                                            Full Name *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/60 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-xs text-white/40 font-semibold uppercase tracking-wide">
                                            Email Address *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/60 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-xs text-white/40 font-semibold uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/60 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="service" className="text-xs text-white/40 font-semibold uppercase tracking-wide">
                                            Service Needed
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                                        >
                                            <option value="" className="bg-[#171717]">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s} value={s} className="bg-[#171717]">{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-xs text-white/40 font-semibold uppercase tracking-wide">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    id="contact-submit-btn"
                                    className="btn-primary w-full justify-center"
                                >
                                    Send Message
                                    <Send size={15} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
