import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

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

function FooterLink({ href, children }) {
    return (
        <a
            href={href}
            onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-1 group w-fit"
        >
            <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-primary">›</span>
            {children}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] footer-border relative">
            {/* Pre-footer CTA */}
            <div className="py-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <span className="section-label">Start a Project</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-3xl leading-tight">
                            So what's next?{' '}
                            <span className="gradient-text">Let's Talk</span>
                            <br />
                            About Your Idea.
                        </h2>
                        <p className="text-white/45 max-w-md text-base font-light leading-relaxed">
                            We're ready to bring your vision to life. Let's build something extraordinary together.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                            <button
                                id="footer-cta-btn"
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary px-10 py-4 text-sm"
                            >
                                Let's Talk
                                <ArrowRight size={16} />
                            </button>
                            <a
                                href="mailto:hello@vidyantatech.com"
                                className="btn-outline px-8 py-4 text-sm"
                            >
                                <Mail size={15} />
                                Email Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Grid */}
            <div className="py-14 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
                    {/* Col 1: Brand */}
                    <div className="flex flex-col gap-5">
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="text-2xl font-black tracking-tight text-white hover:text-primary transition-colors"
                        >
                            vidyantatech<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-white/40 leading-relaxed font-light">
                            A full-service Digital Agency focused on one ultimate goal: Your Business's Success.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-white/40">
                            <Phone size={14} className="text-primary flex-shrink-0" />
                            +91 98765 43210
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/40">
                            <Mail size={14} className="text-primary flex-shrink-0" />
                            hello@vidyantatech.com
                        </div>
                    </div>

                    {/* Col 2: Company */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-white tracking-wide">Company</h4>
                        {footerLinks.company.map((link) => (
                            <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
                        ))}
                    </div>

                    {/* Col 3: Services */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-white tracking-wide">Services</h4>
                        {footerLinks.services.map((link) => (
                            <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
                        ))}
                    </div>

                    {/* Col 4: Social */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-sm font-semibold text-white tracking-wide">Connect With Us</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="#"
                                id="social-facebook"
                                className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-md bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center group-hover:bg-[#1877F2]/20 transition-colors">
                                    <Facebook size={15} className="text-[#1877F2]" />
                                </div>
                                Facebook
                            </a>
                            <a
                                href="#"
                                id="social-instagram"
                                className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-md bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center group-hover:bg-[#E1306C]/20 transition-colors">
                                    <Instagram size={15} className="text-[#E1306C]" />
                                </div>
                                Instagram
                            </a>
                            <a
                                href="https://wa.me/919876543210"
                                id="social-whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-md bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                                    <MessageCircle size={15} className="text-[#25D366]" />
                                </div>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
                    <p className="text-xs text-white/25">
                        © 2026 vidyantatech. Made in India 🇮🇳
                    </p>
                    <div className="flex items-center gap-5 text-xs text-white/25">
                        <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
