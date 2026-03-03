import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Check, Minus, ArrowRight, Zap, Star, Shield,
    ChevronDown, HelpCircle,
} from 'lucide-react';

/* ── Plan data ──────────────────────────────────────── */
const plans = [
    {
        id: 'starter',
        name: 'Starter',
        badge: null,
        icon: Zap,
        tagline: 'Perfect for small businesses & personal brands.',
        price: { min: 15000, max: 25000 },
        deliverables: [
            'Up to 5 pages',
            'Responsive design',
            'Basic SEO setup',
            'Contact form',
            'Google Analytics',
            '1-round of revisions',
        ],
        notIncluded: [
            'E-commerce / payment gateway',
            'Custom animations',
            'CMS / blog integration',
            'Priority support',
        ],
        bg: '#EDE8DF',
        accentBg: '#5B4FE9',
        textColor: '#1C1814',
        muted: 'rgba(28,24,20,0.55)',
        cta: 'Get Started',
    },
    {
        id: 'business',
        name: 'Business',
        badge: 'Most Popular',
        icon: Star,
        tagline: 'For growing companies that want to stand out.',
        price: { min: 35000, max: 65000 },
        deliverables: [
            'Up to 12 pages',
            'Custom UI / UX design',
            'Advanced SEO + sitemap',
            'Blog / CMS integration',
            'Animations & interactions',
            'Lead capture & CRM hook',
            '3-rounds of revisions',
            '3 months post-launch support',
        ],
        notIncluded: [
            'E-commerce / payment gateway',
            'Multi-language support',
        ],
        bg: '#5B4FE9',
        accentBg: '#FFD23F',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.65)',
        cta: 'Start Project',
    },
    {
        id: 'ecommerce',
        name: 'E-commerce',
        badge: 'Best Value',
        icon: Shield,
        tagline: 'Full-featured store, ready to sell from day one.',
        price: { min: 55000, max: 110000 },
        deliverables: [
            'Unlimited product listings',
            'Secure payment gateway',
            'Cart & checkout flow',
            'Inventory management',
            'Customer accounts',
            'Order tracking',
            'Admin dashboard',
            '5-rounds of revisions',
            '6 months post-launch support',
        ],
        notIncluded: [],
        bg: '#FF3D57',
        accentBg: '#FFD23F',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.65)',
        cta: 'Build My Store',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        badge: null,
        icon: Shield,
        tagline: 'Complex platforms, portals & custom integrations.',
        price: null,
        deliverables: [
            'Everything in E-commerce',
            'Multi-language / multi-currency',
            'Custom API integrations',
            'Role-based access control',
            'Performance SLA',
            'Dedicated project manager',
            'Unlimited revisions',
            '12 months priority support',
        ],
        notIncluded: [],
        bg: '#1C1814',
        accentBg: '#5B4FE9',
        textColor: '#fff',
        muted: 'rgba(255,255,255,0.55)',
        cta: "Let's Talk",
    },
];

/* ── Add-ons ────────────────────────────────────────── */
const addons = [
    { name: 'Extra design revision round', price: '₹2,500' },
    { name: 'Speed / Core Web Vitals optimisation', price: '₹8,000' },
    { name: 'Domain + Hosting setup (1 year)', price: '₹5,000' },
    { name: 'SSL certificate installation', price: '₹1,500' },
    { name: 'Logo & brand identity kit', price: '₹12,000' },
    { name: 'WhatsApp / chatbot widget', price: '₹4,000' },
    { name: 'Google Ads landing page', price: '₹10,000' },
    { name: 'Monthly SEO retainer', price: '₹8,000 / mo' },
];

/* ── FAQ data ───────────────────────────────────────── */
const faqs = [
    {
        q: 'How do you calculate the final project cost?',
        a: 'We provide a fixed-price quote after a free discovery call. The range shown is our typical bracket — exact cost depends on number of pages, feature complexity, design requirements, and timeline.',
    },
    {
        q: 'Do you offer EMI or milestone-based payments?',
        a: 'Yes! We typically split into 3 milestones: 40% upfront, 40% at design approval, 20% on final delivery. For larger projects we can discuss custom payment schedules.',
    },
    {
        q: "What's included in post-launch support?",
        a: 'Bug fixes, minor content updates, performance monitoring, and one free security patch during the support window. Major feature additions are quoted separately.',
    },
    {
        q: "Can I upgrade my plan mid-project?",
        a: "Absolutely. You can upgrade at any stage — we'll prorate the difference and carry over completed work.",
    },
    {
        q: 'How long does a typical project take?',
        a: 'Starter: 1–2 weeks. Business: 3–5 weeks. E-commerce: 4–8 weeks. Enterprise: scoped per project. Timeline depends heavily on how quickly feedback is provided.',
    },
    {
        q: 'Do you work with clients outside India?',
        a: 'Yes! We work with clients globally. Pricing for international projects is quoted in USD and follows the same tier structure.',
    },
];

/* ─── Helper: format currency ───────────────────────── */
function fmt(n) {
    return '₹' + n.toLocaleString('en-IN');
}

/* ─── Price display ─────────────────────────────────── */
function PriceDisplay({ price, textColor, accentBg }) {
    if (!price) {
        return (
            <div>
                <span className="text-4xl font-bold" style={{ color: textColor }}>Custom</span>
                <p className="text-xs mt-1 font-medium" style={{ color: textColor, opacity: 0.6 }}>
                    Scoped per project
                </p>
            </div>
        );
    }
    return (
        <div>
            <div className="flex items-end gap-1">
                <span className="text-4xl font-bold" style={{ color: textColor }}>
                    {fmt(price.min)}
                </span>
                <span className="text-base font-medium mb-1" style={{ color: textColor, opacity: 0.55 }}>
                    – {fmt(price.max)}
                </span>
            </div>
            <p className="text-xs mt-0.5 font-medium" style={{ color: textColor, opacity: 0.6 }}>
                one-time project fee
            </p>
        </div>
    );
}

/* ─── Plan Card ─────────────────────────────────────── */
function PlanCard({ plan, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });
    const Icon = plan.icon;
    const isFeatured = plan.badge === 'Most Popular';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
            className="relative rounded-3xl flex flex-col"
            style={{
                background: plan.bg,
                color: plan.textColor,
                outline: isFeatured ? '3px solid #FFD23F' : 'none',
                outlineOffset: isFeatured ? '3px' : '0',
            }}
        >
            {/* Badge */}
            {plan.badge && (
                <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow"
                    style={{ background: plan.accentBg, color: plan.bg === '#5B4FE9' ? '#1C1814' : '#fff' }}
                >
                    {plan.badge}
                </span>
            )}

            <div className="p-7 flex flex-col gap-5 flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <span
                            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                            style={{ background: plan.accentBg + '33', color: plan.accentBg }}
                        >
                            <Icon size={11} /> {plan.name}
                        </span>
                        <PriceDisplay
                            price={plan.price}
                            textColor={plan.textColor}
                            accentBg={plan.accentBg}
                        />
                    </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: plan.muted }}>{plan.tagline}</p>

                {/* Divider */}
                <div style={{ height: 1, background: plan.textColor === '#fff' ? 'rgba(255,255,255,0.12)' : 'rgba(28,24,20,0.1)' }} />

                {/* Included */}
                <ul className="flex flex-col gap-2.5">
                    {plan.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm font-medium">
                            <Check
                                size={15}
                                className="mt-0.5 shrink-0"
                                style={{ color: plan.accentBg }}
                            />
                            {d}
                        </li>
                    ))}
                    {plan.notIncluded.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm" style={{ color: plan.muted }}>
                            <Minus size={15} className="mt-0.5 shrink-0 opacity-50" />
                            {d}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 text-sm font-bold tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-95"
                    style={{ background: plan.accentBg, color: plan.bg === '#1C1814' ? '#fff' : '#1C1814' }}
                >
                    {plan.cta} <ArrowRight size={15} />
                </Link>
            </div>
        </motion.div>
    );
}

/* ─── FAQ Accordion Item ─────────────────────────────── */
function FaqItem({ q, a, index }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--surface)', border: '1px solid rgba(28,24,20,0.08)' }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
                <span className="font-semibold text-sm" style={{ color: '#1C1814' }}>{q}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                >
                    <ChevronDown size={18} style={{ color: '#5B4FE9' }} />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'rgba(28,24,20,0.65)' }}>
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Page ───────────────────────────────────────────── */
export default function Pricing() {
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
                    className="text-center mb-18"
                >
                    <span className="section-label">Transparent Pricing</span>
                    <h1 className="section-title mt-4 mb-5">
                        No hidden costs,<br />
                        <span style={{ color: '#5B4FE9' }}>just honest numbers.</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(28,24,20,0.6)' }}>
                        Every project gets a fixed-price quote after a free discovery call.
                        The ranges below reflect typical project scopes — complex requirements may vary.
                    </p>
                </motion.div>

                {/* ── Plans Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
                    {plans.map((plan, i) => (
                        <PlanCard key={plan.id} plan={plan} index={i} />
                    ))}
                </div>

                {/* ── What's in every project ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mt-20 rounded-3xl p-8 md:p-12"
                    style={{ background: 'var(--surface)', border: '1px solid rgba(28,24,20,0.08)' }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1C1814' }}>
                        What's included in every project
                    </h2>
                    <p className="text-sm mb-8" style={{ color: 'rgba(28,24,20,0.55)' }}>
                        Regardless of the plan, these core deliverables ship with every website we build.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { title: 'Mobile-responsive design', desc: 'Pixel-perfect on all screen sizes.' },
                            { title: 'Cross-browser tested', desc: 'Chrome, Firefox, Safari, Edge.' },
                            { title: 'Basic SEO foundation', desc: 'Meta tags, sitemap, robots.txt.' },
                            { title: 'Performance optimised', desc: 'Compressed assets, lazy loading.' },
                            { title: 'Secure HTTPS delivery', desc: 'SSL-ready deployment pipeline.' },
                            { title: 'Source code ownership', desc: 'You own 100% of your codebase.' },
                        ].map(({ title, desc }) => (
                            <div
                                key={title}
                                className="flex items-start gap-3 rounded-2xl p-4"
                                style={{ background: 'var(--bg)', border: '1px solid rgba(28,24,20,0.07)' }}
                            >
                                <Check size={16} className="mt-0.5 shrink-0" style={{ color: '#5B4FE9' }} />
                                <div>
                                    <p className="text-sm font-semibold" style={{ color: '#1C1814' }}>{title}</p>
                                    <p className="text-xs mt-0.5" style={{ color: 'rgba(28,24,20,0.5)' }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Add-ons ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mt-14"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1C1814' }}>
                        Optional add-ons
                    </h2>
                    <p className="text-sm mb-8" style={{ color: 'rgba(28,24,20,0.55)' }}>
                        Bolt on extra services at any time — at transparent, fixed prices.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {addons.map(({ name, price }) => (
                            <div
                                key={name}
                                className="flex items-center justify-between gap-3 rounded-2xl px-5 py-4"
                                style={{ background: 'var(--surface)', border: '1px solid rgba(28,24,20,0.08)' }}
                            >
                                <p className="text-sm font-medium" style={{ color: '#1C1814' }}>{name}</p>
                                <span
                                    className="text-sm font-bold shrink-0"
                                    style={{ color: '#5B4FE9' }}
                                >
                                    {price}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Process timeline ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mt-14"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1C1814' }}>
                        How it works
                    </h2>
                    <p className="text-sm mb-10" style={{ color: 'rgba(28,24,20,0.55)' }}>
                        From first call to launched website — here's our proven process.
                    </p>
                    <div className="relative">
                        {/* connecting line */}
                        <div
                            className="absolute top-6 left-0 right-0 h-px hidden md:block"
                            style={{ background: 'rgba(91,79,233,0.2)' }}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {[
                                { step: '01', title: 'Discovery Call', desc: 'Free 30-min call to understand your goals and scope.' },
                                { step: '02', title: 'Proposal & Quote', desc: 'Fixed-price proposal delivered within 24 hours.' },
                                { step: '03', title: 'Design Sprint', desc: 'Wireframes and UI designs sent for your review.' },
                                { step: '04', title: 'Development', desc: 'We build, test, and optimise your site.' },
                                { step: '05', title: 'Launch & Handoff', desc: 'Go live, training, and full source-code handover.' },
                            ].map(({ step, title, desc }) => (
                                <div key={step} className="flex flex-col items-center text-center gap-3">
                                    <span
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold z-10"
                                        style={{ background: '#5B4FE9', color: '#fff' }}
                                    >
                                        {step}
                                    </span>
                                    <div>
                                        <p className="font-bold text-sm" style={{ color: '#1C1814' }}>{title}</p>
                                        <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(28,24,20,0.55)' }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── FAQ ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mt-16"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <HelpCircle size={20} style={{ color: '#5B4FE9' }} />
                        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#1C1814' }}>
                            Common questions
                        </h2>
                    </div>
                    <p className="text-sm mb-8" style={{ color: 'rgba(28,24,20,0.55)' }}>
                        Everything you need to know before we start working together.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {faqs.map((faq, i) => (
                            <FaqItem key={faq.q} {...faq} index={i} />
                        ))}
                    </div>
                </motion.div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 rounded-3xl px-8 py-14 text-center"
                    style={{ background: '#1C1814', color: '#fff' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to get a quote?</h2>
                    <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Book a free 30-minute discovery call. No commitment, no hard sell — just an honest conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/contact" className="btn-primary">
                            Book Free Discovery Call <ArrowRight size={15} />
                        </Link>
                        <Link
                            to="/explore"
                            className="btn-outline"
                            style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
                        >
                            Browse Templates
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
