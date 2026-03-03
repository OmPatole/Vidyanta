import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Briefcase, ShoppingCart, UserCheck, Zap, Utensils,
    Home, Heart, GraduationCap, ArrowRight, ExternalLink,
} from 'lucide-react';

const templates = [
    {
        id: 'corporate',
        icon: Briefcase,
        category: 'Business / Corporate',
        tagline: 'Establish authority & trust',
        description:
            'Multi-page corporate sites with services, team bios, case studies, and lead capture. Built to convert visitors into clients.',
        features: ['Multi-page layout', 'Blog/News section', 'Lead capture forms', 'SEO optimised'],
        bg: '#5B4FE9',
        accent: '#FFD23F',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.65)',
        to: '/templates/corporate',
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        category: 'E-commerce Store',
        tagline: 'Sell products around the clock',
        description:
            'Full-featured online stores with product listings, cart, secure checkout, order tracking, and admin dashboard.',
        features: ['Product catalogue', 'Secure checkout', 'Inventory management', 'Mobile-first'],
        bg: '#FF3D57',
        accent: '#FFD23F',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.65)',
        to: '/templates/ecommerce',
    },
    {
        id: 'portfolio',
        icon: UserCheck,
        category: 'Portfolio / Creative',
        tagline: 'Showcase your work beautifully',
        description:
            'Stunning portfolio sites for agencies, designers, and freelancers — drag-and-drop galleries, smooth animations, and standout CTAs.',
        features: ['Gallery / lightbox', 'Case study pages', 'Contact & testimonials', 'Dark / light mode'],
        bg: '#1C1814',
        accent: '#5B4FE9',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.55)',
        to: '/templates/portfolio',
    },
    {
        id: 'saas',
        icon: Zap,
        category: 'SaaS / Product Landing',
        tagline: 'Launch & convert at scale',
        description:
            'High-converting SaaS landing pages with hero sections, feature highlights, pricing tables, FAQs, and onboarding flows.',
        features: ['Hero + feature sections', 'Pricing table', 'Animated demos', 'CTA funnels'],
        bg: '#FFD23F',
        accent: '#1C1814',
        textColor: '#1C1814',
        muted: 'rgba(28,24,20,0.55)',
        to: '/templates/saas',
    },
    {
        id: 'food',
        icon: Utensils,
        category: 'Restaurant / Food',
        tagline: 'Drive reservations & orders',
        description:
            'Mouth-watering food-business sites with online menus, reservation widgets, gallery, and delivery/takeaway integrations.',
        features: ['Online menu', 'Table reservations', 'Photo gallery', 'Google Maps integration'],
        bg: '#00C896',
        accent: '#1C1814',
        textColor: '#1C1814',
        muted: 'rgba(28,24,20,0.55)',
        to: '/templates/food',
    },
    {
        id: 'realestate',
        icon: Home,
        category: 'Real Estate',
        tagline: 'List, sell & close faster',
        description:
            'Property listing platforms with advanced search filters, virtual tours, agent profiles, and mortgage calculators.',
        features: ['Property listings', 'Search & filter', 'Agent profiles', 'Enquiry management'],
        bg: '#EDE8DF',
        accent: '#5B4FE9',
        textColor: '#1C1814',
        muted: 'rgba(28,24,20,0.55)',
        to: '/templates/realestate',
    },
    {
        id: 'healthcare',
        icon: Heart,
        category: 'Healthcare / Medical',
        tagline: 'Build patient confidence',
        description:
            'Professional clinic & hospital websites with appointment booking, doctor profiles, service listings, and HIPAA-friendly design.',
        features: ['Appointment booking', 'Doctor profiles', 'Service pages', 'Secure & accessible'],
        bg: '#5B4FE9',
        accent: '#00C896',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.65)',
        to: '/templates/healthcare',
    },
    {
        id: 'education',
        icon: GraduationCap,
        category: 'Education / E-learning',
        tagline: 'Engage & educate at scale',
        description:
            'Course platforms, tutoring sites, and school websites with class schedules, enrolment flows, quizzes, and progress tracking.',
        features: ['Course catalogue', 'Enrolment system', 'Student portal', 'Video integration'],
        bg: '#FF3D57',
        accent: '#FFD23F',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.65)',
        to: '/templates/education',
    },
];

/* ── Minimal browser mockup ────────────────────────── */
function BrowserMockup({ bg, accent }) {
    return (
        <div
            className="rounded-xl overflow-hidden shadow-lg"
            style={{ background: bg, border: '2px solid rgba(255,255,255,0.12)' }}
        >
            {/* Browser bar */}
            <div
                className="flex items-center gap-1.5 px-3 py-2"
                style={{ background: 'rgba(0,0,0,0.18)' }}
            >
                {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                    <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
                <div
                    className="ml-2 flex-1 h-3 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.15)' }}
                />
            </div>
            {/* Fake page content */}
            <div className="p-4 flex flex-col gap-2">
                <div className="h-12 rounded-lg" style={{ background: 'rgba(255,255,255,0.12)' }} />
                <div className="flex gap-2">
                    {[1, 1, 1].map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 h-16 rounded-lg"
                            style={{ background: i === 0 ? accent + '55' : 'rgba(255,255,255,0.08)' }}
                        />
                    ))}
                </div>
                <div className="h-4 rounded-full w-3/4" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="h-3 rounded-full w-1/2" style={{ background: 'rgba(255,255,255,0.08)' }} />
            </div>
        </div>
    );
}

/* ── Template Card ─────────────────────────────────── */
function TemplateCard({ template, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    const Icon = template.icon;

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden flex flex-col"
            style={{ background: template.bg, color: template.textColor }}
        >
            {/* Browser preview */}
            <div className="px-6 pt-6">
                <BrowserMockup bg={template.bg} accent={template.accent} />
            </div>

            {/* Content */}
            <div className="px-6 py-6 flex flex-col gap-4 flex-1">
                {/* Category pill */}
                <div className="flex items-center gap-2">
                    <span
                        className="flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{ background: template.accent + '33', color: template.accent }}
                    >
                        <Icon size={11} />
                        {template.category}
                    </span>
                </div>

                <div>
                    <p className="text-lg font-bold leading-snug">{template.tagline}</p>
                    <p className="text-sm mt-1.5 leading-relaxed" style={{ color: template.muted }}>
                        {template.description}
                    </p>
                </div>

                {/* Feature tags */}
                <ul className="flex flex-wrap gap-1.5 mt-auto">
                    {template.features.map((f) => (
                        <li
                            key={f}
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{ background: 'rgba(255,255,255,0.12)', color: template.textColor }}
                        >
                            {f}
                        </li>
                    ))}
                </ul>

                {/* CTAs */}
                <div className="mt-2 flex flex-wrap gap-2 items-center">
                    <Link
                        to={template.to}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl transition-all hover:scale-105"
                        style={{ background: template.accent, color: template.bg }}
                    >
                        Preview <ExternalLink size={11} />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-80"
                        style={{ color: template.accent }}
                    >
                        Request this <ArrowRight size={12} />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}

/* ── Page ──────────────────────────────────────────── */
export default function Explore() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <section className="min-h-screen pt-28 pb-24 px-4" style={{ background: 'var(--bg)' }}>
            <div className="max-w-7xl mx-auto">

                {/* ── Hero ── */}
                <motion.div
                    ref={heroRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <span className="section-label">Template Showcase</span>
                    <h1 className="section-title mt-4 mb-5">
                        Pick a template,<br />
                        <span style={{ color: '#5B4FE9' }}>we'll make it yours.</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(28,24,20,0.6)' }}>
                        Browse our curated template categories. Every project is custom-built from scratch —
                        these are starting points, not cookie-cutter themes.
                    </p>

                    {/* Stats row */}
                    <div className="flex justify-center gap-10 mt-10 flex-wrap">
                        {[
                            { val: '8+', label: 'Template Categories' },
                            { val: '100%', label: 'Custom Built' },
                            { val: '48hr', label: 'Design Turnaround' },
                        ].map(({ val, label }) => (
                            <div key={label} className="flex flex-col items-center">
                                <span className="text-3xl font-bold" style={{ color: '#5B4FE9' }}>{val}</span>
                                <span className="text-xs mt-0.5 font-medium" style={{ color: 'rgba(28,24,20,0.5)' }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {templates.map((t, i) => (
                        <TemplateCard key={t.id} template={t} index={i} />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 rounded-3xl px-8 py-14 text-center"
                    style={{ background: '#5B4FE9', color: '#fff' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Don't see your niche?</h2>
                    <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        We build custom websites for any industry. Tell us your vision and we'll bring it to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/contact" className="btn-primary" style={{ background: '#FFD23F', color: '#1C1814' }}>
                            Start a Custom Project <ArrowRight size={15} />
                        </Link>
                        <Link to="/pricing" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
                            View Pricing <ExternalLink size={14} />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
