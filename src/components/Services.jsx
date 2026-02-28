import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Code,
    ShoppingCart,
    ArrowLeftRight,
    Zap,
    Briefcase,
    Layout,
    Server,
} from 'lucide-react';

const services = [
    {
        id: 'website-dev',
        icon: Code,
        title: 'Website Development',
        description:
            'Custom, blazing-fast websites built with modern technologies. From landing pages to complex web apps.',
    },
    {
        id: 'ecommerce-dev',
        icon: ShoppingCart,
        title: 'Ecommerce Development',
        description:
            'Full-featured online stores with seamless UX, inventory management, and secure checkout flows.',
    },
    {
        id: 'website-migration',
        icon: ArrowLeftRight,
        title: 'Website Migration',
        description:
            'Seamless platform migrations with zero downtime. Move your site without losing traffic or data.',
    },
    {
        id: 'speed-boost',
        icon: Zap,
        title: 'Website Speed Boost',
        description:
            'Optimize Core Web Vitals, reduce load times, and dramatically improve user experience and SEO.',
    },
    {
        id: 'corporate-branding',
        icon: Briefcase,
        title: 'Corporate Branding',
        description:
            'Build a powerful brand identity — logos, brand guidelines, and visual systems that resonate.',
    },
    {
        id: 'ui-ux-design',
        icon: Layout,
        title: 'UI-UX Design',
        description:
            'User-centered design that blends aesthetics with functionality to drive engagement and conversions.',
    },
    {
        id: 'hosting-ssl',
        icon: Server,
        title: 'Domain, Hosting & SSL',
        description:
            'Reliable hosting infrastructure, domain management, and SSL certificates to keep you secure.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({ service, index }) {
    const Icon = service.icon;
    return (
        <motion.div
            variants={cardVariants}
            className="card group relative overflow-hidden"
            id={`service-card-${service.id}`}
        >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon */}
            <div className="w-11 h-11 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
                <Icon size={20} className="text-primary icon-glow" />
            </div>

            {/* Content */}
            <h3 className="text-base font-semibold text-white mb-2 tracking-tight">{service.title}</h3>
            <p className="text-sm text-white/45 leading-relaxed font-light">{service.description}</p>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
        </motion.div>
    );
}

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="services" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background */}
            <div className="absolute right-0 top-1/3 w-96 h-96 bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                    ref={ref}
                >
                    <span className="section-label">What We Do</span>
                    <h2 className="section-title mb-4">
                        Our <span className="text-primary">Solutions</span>
                    </h2>
                    <p className="text-white/45 max-w-xl mx-auto text-base leading-relaxed font-light">
                        A complete suite of digital services designed to transform your business and accelerate growth.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
