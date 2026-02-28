import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import pageLogo from '/public/assets/PageLogo.png';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass' : ''
                }`}
            style={!scrolled ? { background: 'transparent' } : {}}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                >
                    <img
                        src={pageLogo}
                        alt="vidyantatech logo"
                        style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            className="text-sm font-medium transition-colors duration-300 relative group"
                            style={{ color: 'rgba(28,24,20,0.65)' }}
                        >
                            {link.name}
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                                style={{ background: '#FF3D57' }}
                            />
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                    className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5"
                    id="nav-cta-btn"
                >
                    Get In Touch
                </a>

                {/* Mobile toggle */}
                <button
                    id="mobile-menu-toggle"
                    className="md:hidden transition-colors"
                    style={{ color: 'rgba(28,24,20,0.7)' }}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden nav-glass overflow-hidden"
                        style={{ borderTop: '1px solid rgba(28,24,20,0.08)' }}
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className="text-sm font-medium transition-colors py-1"
                                    style={{ color: 'rgba(28,24,20,0.65)' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                                className="btn-primary text-xs w-fit"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
