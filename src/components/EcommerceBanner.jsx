import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Payment method SVG icons (inline)
const PaymentIcons = () => (
    <div className="flex flex-wrap items-center gap-4">
        {/* Google Pay */}
        <div className="h-9 px-3 bg-white/10 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/15 transition-colors">
            <svg height="24" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="12" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">G Pay</text>
            </svg>
        </div>

        {/* PayPal */}
        <div className="h-9 px-3 bg-white/10 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/15 transition-colors">
            <svg height="20" viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="15" fill="#00B2E3" fontSize="12" fontWeight="800" fontFamily="Inter, sans-serif">Pay</text>
                <text x="28" y="15" fill="#002C8A" fontSize="12" fontWeight="800" fontFamily="Inter, sans-serif">Pal</text>
            </svg>
        </div>

        {/* Stripe */}
        <div className="h-9 px-3 bg-white/10 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/15 transition-colors">
            <svg height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="15" fill="#635BFF" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">stripe</text>
            </svg>
        </div>

        {/* Apple Pay */}
        <div className="h-9 px-3 bg-white/10 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/15 transition-colors">
            <svg height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="15" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif"> Pay</text>
            </svg>
        </div>

        {/* Visa */}
        <div className="h-9 px-3 bg-white/10 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/15 transition-colors">
            <svg height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="15" fill="#1A1F71" fontSize="14" fontWeight="900" fontFamily="Georgia, serif" letterSpacing="1">VISA</text>
            </svg>
        </div>

        {/* Razorpay */}
        <div className="h-9 px-3 bg-white/10 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/15 transition-colors">
            <svg height="20" viewBox="0 0 70 20" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="15" fill="#2D9EE0" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Razorpay</text>
            </svg>
        </div>
    </div>
);

export default function EcommerceBanner() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="ecommerce" className="py-20 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-2xl bg-surface border border-white/5 p-8 md:p-14"
                >
                    {/* Background gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

                    {/* Corner decoration */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        {/* Left: Text */}
                        <div className="flex flex-col gap-5 max-w-xl">
                            {/* Badge */}
                            <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent border border-accent/30 bg-accent/10 px-3 py-1.5 rounded-full">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                Special Offer
                            </span>

                            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                                eCommerce Development
                                <br />
                                <span className="gradient-text">starts at just Rs. 45000*</span>
                            </h2>

                            <p className="text-white/55 text-base leading-relaxed font-light">
                                Integrate payment gateways and skyrocket your sales. We get your store online
                                in no-time with everything you need to succeed.
                            </p>

                            {/* Payment icons */}
                            <div>
                                <p className="text-xs text-white/30 mb-3 font-medium tracking-wide uppercase">Supported Payment Gateways</p>
                                <PaymentIcons />
                            </div>

                            <div className="mt-2">
                                <button
                                    id="ecommerce-cta-btn"
                                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="btn-primary"
                                >
                                    Let's Start
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="hidden lg:flex flex-col items-center justify-center gap-3">
                            <div className="w-44 h-44 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden">
                                {/* Cart icon visual */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                                <div className="text-center relative z-10">
                                    <div className="text-5xl mb-2">🛒</div>
                                    <p className="text-xs text-white/60 font-semibold tracking-wide">Your Store</p>
                                    <p className="text-xs text-white/30">Online, Fast</p>
                                </div>
                            </div>
                            <p className="text-xs text-white/30 text-center">*T&C apply. Pricing may vary based on requirements.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
