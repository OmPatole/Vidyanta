import { useState } from 'react';
import FontLoader from './FontLoader';
import { Menu, X, Zap, BarChart2, Lock, Globe, Users, RefreshCw } from 'lucide-react';
import useIsMobile from './useIsMobile';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap';

const features = [
    { Icon: Zap, title: 'Instant Automation', desc: 'Build workflows in minutes with our no-code drag-and-drop editor. No engineers required.' },
    { Icon: BarChart2, title: 'Live Analytics', desc: 'Real-time dashboards surface the insights that drive decisions.' },
    { Icon: Lock, title: 'Enterprise Security', desc: 'SOC 2 Type II, end-to-end encryption and SSO built in from day one.' },
    { Icon: Globe, title: 'Global CDN', desc: 'Sub-100ms response times for users anywhere on the planet.' },
    { Icon: Users, title: '24/7 Human Support', desc: 'Real people — no bots — ready to help whenever you need them.' },
    { Icon: RefreshCw, title: 'Deep Integrations', desc: 'Connect to 150+ tools including Slack, HubSpot and Zapier in one click.' },
];

const plans = [
    { name: 'Free', price: '₹0', note: 'forever', items: ['1 workspace', '5 members', '1 GB storage', 'Community support'], hot: false },
    { name: 'Pro', price: '₹999', note: '/month', items: ['Unlimited workspaces', '25 members', '50 GB storage', 'Priority support', 'Analytics'], hot: true },
    { name: 'Scale', price: '₹3,499', note: '/month', items: ['Everything in Pro', 'Unlimited members', '500 GB storage', 'Dedicated CSM', 'SLA guarantee'], hot: false },
];

export default function SaasTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#0B1120', color: '#F1F5F9', minHeight: '100%', minWidth: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Nav */}
            <header style={{ position: 'sticky', top: '0', zIndex: 50, background: 'rgba(11,17,32,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Zap size={14} color="#fff" /></span>
                        <span style={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>FlowForge</span>
                    </div>
                    {!isMobile && (
                        <nav style={{ gap: '28px', fontSize: '14px', color: 'rgba(255,255,255,0.5)', display: 'flex' }}>
                            {['Features', 'Pricing', 'Blog', 'Docs'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.55)', fontSize: '14px', padding: '9px 16px', cursor: 'pointer' }}>Log in</button>
                            <button style={{ background: '#3B82F6', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Start Free →</button>
                        </div>
                    )}

                    {isMobile && (
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', color: 'inherit' }}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
                {isMobile && isMobileMenuOpen && (
                    <div style={{ width: '100%', padding: '16px 0 20px', borderTop: '1px solid rgba(128,128,128,0.2)' }}>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', fontSize: '15px' }}>
                            {['Features', 'Pricing', 'Blog', 'Docs'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.75)', fontSize: '14px', padding: '9px 18px', cursor: 'pointer', borderRadius: '8px', width: 'min(240px, 90vw)' }}>Log in</button>
                            <button style={{ background: '#3B82F6', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', width: 'min(240px, 90vw)' }}>Start Free →</button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px 60px', textAlign: 'center' }}>
                <span style={{ display: 'inline-block', background: 'rgba(59,130,246,0.15)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.3)', fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', marginBottom: '24px', letterSpacing: '1px' }}>
                    Now with AI-powered workflows
                </span>
                <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.08, fontWeight: 800, margin: '0 0 20px', letterSpacing: '-1px' }}>
                    The workflow tool<br />
                    your team will{' '}
                    <span style={{ background: 'linear-gradient(90deg,#3B82F6,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        actually love.
                    </span>
                </h1>
                <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto 36px' }}>
                    FlowForge replaces 6 tools with one. Automate repetitive work, ship faster, and keep your whole team in sync.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <button style={{ background: '#3B82F6', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>Start for Free →</button>
                    <button style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', cursor: 'pointer' }}>Watch Demo</button>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>No credit card · 14-day trial · Cancel anytime</p>

                {/* Dashboard mockup */}
                <div style={{ marginTop: '56px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(59,130,246,0.2)', background: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        {['#FF5F57','#FEBC2E','#28C840'].map(c => <span key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                        <span style={{ flex: 1, height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginLeft: '8px', maxWidth: '200px', display: 'inline-block' }} />
                    </div>
                    <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                        {[['Active Flows','24','+3','#3B82F6'],['Tasks Done','1,847','+12%','#06B6D4'],['Time Saved','48 hrs','This week','#A78BFA'],['Uptime','99.98%','SLA met','#34D399']].map(([l,v,c,col]) => (
                            <div key={l} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
                                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: '0 0 6px' }}>{l}</p>
                                <p style={{ fontSize: '22px', fontWeight: 700, color: col, margin: '0 0 2px' }}>{v}</p>
                                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>{c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, marginBottom: '48px' }}>Everything you need, nothing you don't</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '16px' }}>
                        {features.map(({ Icon, title, desc }) => (
                            <div key={title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '24px' }}>
                                <Icon size={28} style={{ color: '#93C5FD', marginBottom: '14px', display: 'block' }} />
                                <p style={{ fontWeight: 700, marginBottom: '8px', fontSize: '15px' }}>{title}</p>
                                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, marginBottom: '48px' }}>Simple, transparent pricing</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '16px' }}>
                    {plans.map(({ name, price, note, items, hot }) => (
                        <div key={name} style={{ borderRadius: '20px', padding: '28px', background: hot ? 'linear-gradient(135deg,#3B82F6,#1D4ED8)' : 'rgba(255,255,255,0.04)', border: hot ? 'none' : '1px solid rgba(255,255,255,0.08)', outline: hot ? '2px solid #06B6D4' : 'none', outlineOffset: '4px' }}>
                            <p style={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>{name}</p>
                            <div style={{ marginBottom: '20px' }}>
                                <span style={{ fontSize: '32px', fontWeight: 800 }}>{price}</span>
                                <span style={{ fontSize: '13px', color: hot ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.35)', marginLeft: '4px' }}>{note}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {items.map(it => (
                                    <li key={it} style={{ fontSize: '13px', color: hot ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: hot ? '#93C5FD' : '#3B82F6' }}>✓</span> {it}
                                    </li>
                                ))}
                            </ul>
                            <button style={{ width: '100%', padding: '11px', borderRadius: '10px', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer', background: hot ? '#fff' : '#3B82F6', color: hot ? '#1D4ED8' : '#fff' }}>
                                {name === 'Free' ? 'Get Started' : name === 'Pro' ? 'Start Free Trial' : 'Contact Sales'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trusted by */}
            <section style={{ padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '24px' }}>Trusted by teams at</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {['Razorpay', 'Freshworks', 'Zepto', 'BharatPe', 'Groww', 'Meesho'].map(name => (
                        <span key={name} style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.5px' }}>{name}</span>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 700, marginBottom: '40px' }}>What our users say</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '16px' }}>
                    {[
                        { quote: "FlowForge cut our onboarding process from 3 days to 4 hours. The automation builder is the most intuitive I've ever used.", name: 'Ankur Jain', role: 'Head of Ops, Swiggy', initials: 'AJ', color: '#3B82F6' },
                        { quote: 'We replaced 5 different SaaS tools with FlowForge. Our team is more productive and our infrastructure bill dropped by 40%.', name: 'Pooja Mehta', role: 'CTO, Kira Health', initials: 'PM', color: '#06B6D4' },
                        { quote: 'The analytics alone are worth the price. We surface insights in real time that used to take our BI team a full week to compile.', name: 'Rahul Dev', role: 'VP Product, Lendbox', initials: 'RD', color: '#A78BFA' },
                    ].map(({ quote, name, role, initials, color }) => (
                        <div key={name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '24px' }}>
                            <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', margin: '0 0 24px', fontStyle: 'italic' }}>"{quote}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{initials}</div>
                                <div>
                                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: 0 }}>{name}</p>
                                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>{role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 700, marginBottom: '40px' }}>Frequently asked questions</h2>
                    {[
                        { q: 'Is there a free plan?', a: 'Yes — our Free plan supports 1 workspace, 5 members, and 1 GB storage with no credit card required.' },
                        { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade, downgrade, or cancel at any time from your account settings. Prorated billing applies.' },
                        { q: 'How does the 14-day trial work?', a: 'Sign up for any paid plan and get full access for 14 days free. No credit card needed until the trial ends.' },
                        { q: 'Do you offer discounts for startups?', a: 'Yes — startups under 2 years old with fewer than 20 employees qualify for 40% off the Pro plan. Contact us to apply.' },
                        { q: 'What integrations are available?', a: 'We integrate with 150+ tools including Slack, Notion, HubSpot, Salesforce, Zapier, Google Workspace and more.' },
                    ].map(({ q, a }) => (
                        <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '20px 0' }}>
                            <p style={{ fontWeight: 700, fontSize: '15px', margin: '0 0 10px', color: '#F1F5F9' }}>{q}</p>
                            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer style={{ textAlign: 'center', padding: '28px', fontSize: '12px', color: 'rgba(255,255,255,0.25)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                © 2026 FlowForge Inc. · Privacy · Terms · Status
            </footer>
        </div>
    );
}

