import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, LayoutTemplate, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import pageLogo from '/public/assets/PageLogo.png';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const exploreItems = [
    {
        icon: LayoutTemplate,
        label: 'Templates',
        desc: 'Browse website template categories',
        to: '/explore',
    },
    // {
    //     icon: CreditCard,
    //     label: 'Pricing',
    //     desc: 'Transparent project pricing breakdown',
    //     to: '/pricing',
    // },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);
    const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
    const exploreRef = useRef(null);
    const navigate = useNavigate();
    const MOBILE_HEADER_OFFSET = 72;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close Explore dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (exploreRef.current && !exploreRef.current.contains(e.target)) {
                setExploreOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const scrollToHref = (href) => {
        if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.querySelector(href);
        if (!element) {
            window.location.hash = href;
            return;
        }

        const targetTop = element.getBoundingClientRect().top + window.pageYOffset - MOBILE_HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    };

    const handleNavClick = (href) => {
        const shouldDelayScroll = mobileOpen;
        setMobileOpen(false);

        // If we're not on the home page, navigate home first then scroll
        if (window.location.pathname !== '/') {
            navigate('/');
            window.setTimeout(() => scrollToHref(href), 350);
            return;
        }

        if (shouldDelayScroll) {
            window.setTimeout(() => scrollToHref(href), 220);
            return;
        }

        requestAnimationFrame(() => scrollToHref(href));
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass' : ''
                }`}
            style={{ ...(!scrolled ? { background: 'transparent' } : {}), zIndex: 1000 }}
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

                    {/* Explore dropdown */}
                    <div ref={exploreRef} className="relative">
                        <button
                            onClick={() => setExploreOpen(!exploreOpen)}
                            className="flex items-center gap-1 text-sm font-medium transition-colors duration-300 relative group"
                            style={{ color: exploreOpen ? '#5B4FE9' : 'rgba(28,24,20,0.65)', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Explore
                            <motion.span animate={{ rotate: exploreOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                                <ChevronDown size={14} />
                            </motion.span>
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                                style={{ background: '#FF3D57' }}
                            />
                        </button>

                        <AnimatePresence>
                            {exploreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 top-full mt-3 w-64 rounded-2xl overflow-hidden shadow-xl"
                                    style={{
                                        background: 'rgba(245,240,232,0.98)',
                                        border: '1px solid rgba(28,24,20,0.1)',
                                        backdropFilter: 'blur(16px)',
                                    }}
                                >
                                    {exploreItems.map(({ icon: Icon, label, desc, to }) => (
                                        <Link
                                            key={to}
                                            to={to}
                                            onClick={() => setExploreOpen(false)}
                                            className="flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-[#5B4FE9]/8 group"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <span
                                                className="mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ background: '#5B4FE9', color: '#fff' }}
                                            >
                                                <Icon size={14} />
                                            </span>
                                            <div>
                                                <p className="text-sm font-semibold" style={{ color: '#1C1814' }}>{label}</p>
                                                <p className="text-xs mt-0.5" style={{ color: 'rgba(28,24,20,0.5)' }}>{desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
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
                    type="button"
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
                        style={{ borderTop: '1px solid rgba(28,24,20,0.08)', position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1001 }}
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

                            {/* Mobile Explore expand */}
                            <div>
                                <button
                                    onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                                    className="flex items-center gap-1 text-sm font-medium py-1 w-full"
                                    style={{ color: mobileExploreOpen ? '#5B4FE9' : 'rgba(28,24,20,0.65)', background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    Explore
                                    <motion.span animate={{ rotate: mobileExploreOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                                        <ChevronDown size={14} />
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {mobileExploreOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.22 }}
                                            className="overflow-hidden pl-3 mt-1 flex flex-col gap-1"
                                        >
                                            {exploreItems.map(({ icon: Icon, label, to }) => (
                                                <Link
                                                    key={to}
                                                    to={to}
                                                    onClick={() => { setMobileOpen(false); setMobileExploreOpen(false); }}
                                                    className="flex items-center gap-2 text-sm font-medium py-1.5"
                                                    style={{ color: '#5B4FE9', textDecoration: 'none' }}
                                                >
                                                    <Icon size={13} />
                                                    {label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

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
