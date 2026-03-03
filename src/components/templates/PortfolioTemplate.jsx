import { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import FontLoader from './FontLoader';
import useIsMobile from './useIsMobile';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap';

const projects = [
    { title: 'Opus Brand Identity', category: 'Branding', year: '2025', accent: '#E63946', light: '#FFF5F5' },
    { title: 'Helios UI System', category: 'Product Design', year: '2025', accent: '#2563EB', light: '#EFF6FF' },
    { title: 'Verde E-commerce', category: 'Web Design', year: '2024', accent: '#059669', light: '#ECFDF5' },
    { title: 'Monolith Art Direction', category: 'Motion', year: '2024', accent: '#9333EA', light: '#F5F3FF' },
    { title: 'Raven Editorial', category: 'Print', year: '2024', accent: '#D97706', light: '#FFFBEB' },
    { title: 'Solstice Mobile App', category: 'Product Design', year: '2023', accent: '#111111', light: '#F5F5F5' },
];

const skills = ['Figma', 'React', 'Framer', 'After Effects', 'Webflow', 'Illustrator', 'Blender', 'Spline'];

export default function PortfolioTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [active, setActive] = useState('All');
    const isMobile = useIsMobile();
    const filters = ['All', 'Branding', 'Web Design', 'Product Design', 'Motion'];
    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FFFFFF', color: '#111111', minHeight: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Nav */}
            <header style={{ borderBottom: '1px solid #EFEFEF', position: 'sticky', top: '0', zIndex: 50, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', letterSpacing: '-0.5px' }}>Aanya<span style={{ color: '#E63946' }}>.</span></span>
                    {!isMobile && (
                        <nav style={{ gap: '32px', fontSize: '14px', color: '#888', display: 'flex' }}>
                            {['Work', 'About', 'Services', 'Blog'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <button style={{ background: '#111111', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                            Hire Me
                        </button>
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
                            {['Work', 'About', 'Services', 'Blog'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ background: '#111111', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', width: 'min(240px, 90vw)' }}>
                                Hire Me
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px 60px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#E63946', marginBottom: '20px' }}>✦ Available for freelance</p>
                <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.06, margin: '0 0 24px', letterSpacing: '-1px', color: '#111111' }}>
                    I design<br />
                    <em style={{ fontStyle: 'italic', color: '#E63946' }}>beautiful</em><br />
                    digital things.
                </h1>
                <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#666', maxWidth: '520px', marginBottom: '36px' }}>
                    Senior designer with 7+ years crafting brand identities, product interfaces, and digital experiences for ambitious companies.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '56px' }}>
                    <button style={{ background: '#111111', color: '#fff', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>View Work →</button>
                    <button style={{ background: '#fff', color: '#111', border: '1.5px solid #DEDEDE', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Download CV</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', paddingTop: '32px', borderTop: '1px solid #EFEFEF' }}>
                    {[['7+', 'Years experience'], ['80+', 'Projects completed'], ['40+', 'Happy clients'], ['12', 'Design awards']].map(([v, l]) => (
                        <div key={l}>
                            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: '#111111', margin: 0 }}>{v}</p>
                            <p style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{l}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Work */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                    <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '36px', margin: 0 }}>Selected Work</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {filters.map(f => (
                            <button key={f} onClick={() => setActive(f)} style={{ fontSize: '12px', fontWeight: 600, padding: '6px 14px', borderRadius: '100px', border: '1.5px solid', borderColor: active === f ? '#111' : '#DEDEDE', background: active === f ? '#111' : '#fff', color: active === f ? '#fff' : '#888', cursor: 'pointer' }}>
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                    {projects.filter(p => active === 'All' || p.category === active).map(({ title, category, year, accent, light }) => (
                        <div key={title} style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', background: light, border: '1px solid #EFEFEF', transition: 'transform 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '160px', background: accent + '18', display: 'flex', alignItems: 'flex-end', padding: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: accent, marginBottom: '4px' }}>{category} · {year}</p>
                                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '18px', color: '#111', margin: 0 }}>{title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills strip */}
            <section style={{ background: '#F9F9F9', padding: '32px 24px', borderTop: '1px solid #EFEFEF', borderBottom: '1px solid #EFEFEF' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {skills.map(s => (
                        <span key={s} style={{ fontSize: '12px', fontWeight: 600, padding: '7px 16px', borderRadius: '100px', background: '#fff', border: '1px solid #DEDEDE', color: '#555', letterSpacing: '0.5px' }}>{s}</span>
                    ))}
                </div>
            </section>

            {/* About */}
            <section style={{ background: '#111111', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '20px', background: '#E63946', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Palette size={44} color="#fff" /></div>
                    <div style={{ flex: 1, minWidth: '280px' }}>
                        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '28px', color: '#fff', margin: '0 0 12px' }}>Hi, I'm Aanya Desai</h2>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 0 20px' }}>Based in Mumbai. I help startups and established brands build visual identity and digital presence through thoughtful, strategic design.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                            {[['7+', 'Years'], ['80+', 'Projects'], ['40+', 'Clients']].map(([v, l]) => (
                                <div key={l}>
                                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '26px', color: '#E63946', margin: 0 }}>{v}</p>
                                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button style={{ background: '#E63946', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}>Let's Talk →</button>
                </div>
            </section>

            {/* Services */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
                    <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '36px', margin: 0 }}>Services</h2>
                    <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>Tailored to your goals and budget</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                    {[
                        { title: 'Brand Identity', desc: 'Logo, typography, colour palette, brand guidelines and full visual language system.', from: '₹45,000', tag: 'Most popular' },
                        { title: 'UI / UX Design', desc: 'End-to-end product design — wireframes, prototypes, component libraries and handoff.', from: '₹60,000', tag: null },
                        { title: 'Web Design', desc: 'Custom responsive website design with animations, micro-interactions and CMS setup.', from: '₹35,000', tag: null },
                        { title: 'Motion & Video', desc: 'Brand films, explainer animations, social content and motion graphics.', from: '₹25,000', tag: null },
                    ].map(({ title, desc, from, tag }) => (
                        <div key={title} style={{ borderRadius: '16px', padding: '28px', background: '#fff', border: '1px solid #EFEFEF', position: 'relative', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                            {tag && <span style={{ position: 'absolute', top: '16px', right: '16px', background: '#E63946', color: '#fff', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{tag}</span>}
                            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: '#111', margin: '0 0 12px' }}>{title}</p>
                            <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#777', margin: '0 0 20px' }}>{desc}</p>
                            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px' }}>Starting from</p>
                            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', color: '#E63946', margin: 0 }}>{from}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section style={{ background: '#111111', padding: '72px 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#E63946', marginBottom: '12px' }}>How I Work</p>
                        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '36px', color: '#fff', margin: 0 }}>My process</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                        {[
                            { step: '01', title: 'Discovery', desc: 'We start with a deep-dive call to understand your goals, audience, and competitive landscape.' },
                            { step: '02', title: 'Strategy', desc: 'I map out the creative direction, moodboards, and project roadmap before a single pixel is moved.' },
                            { step: '03', title: 'Design', desc: 'Iterative design rounds with clear feedback loops. You see progress at every milestone.' },
                            { step: '04', title: 'Delivery', desc: 'Final files, brand guides, and handoff documentation — everything you need to launch.' },
                        ].map(({ step, title, desc }) => (
                            <div key={step}>
                                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '48px', color: '#E63946', opacity: 0.5, margin: '0 0 12px', lineHeight: 1 }}>{step}</p>
                                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: '#fff', margin: '0 0 10px' }}>{title}</p>
                                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px' }}>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}>Client love</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {[
                        { quote: 'Aanya brought our brand to life in a way we never imagined possible. The rebrand drove a 3× increase in inbound leads within two months.', name: 'Rohan Kapoor', company: 'Founder, Kairos Co.', initials: 'RK' },
                        { quote: 'The UI system she built is so solid that our dev team finished the app a full sprint early. Exceptional designer and collaborator.', name: 'Nisha Patel', company: 'CPO, Vela App', initials: 'NP' },
                        { quote: 'Our investors specifically called out the pitch deck design as exceptional. Aanya understood the story we needed to tell.', name: 'Samir Joshi', company: 'CEO, NovaTech', initials: 'SJ' },
                    ].map(({ quote, name, company, initials }) => (
                        <div key={name} style={{ background: '#F9F9F9', borderRadius: '16px', padding: '28px', border: '1px solid #EFEFEF' }}>
                            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: '#E63946', margin: '0 0 16px', lineHeight: 1 }}>"</p>
                            <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#555', margin: '0 0 24px', fontStyle: 'italic' }}>{quote}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{initials}</div>
                                <div>
                                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#111', margin: 0 }}>{name}</p>
                                    <p style={{ fontSize: '11px', color: '#E63946', margin: 0 }}>{company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section style={{ background: '#E63946', padding: 'clamp(40px, 6vw, 64px) 24px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '40px', color: '#fff', margin: '0 0 12px' }}>Have a project in mind?</h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginBottom: '32px' }}>I take on 3–4 projects per quarter. Let's see if we're a good fit.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <button style={{ background: '#fff', color: '#E63946', border: 'none', padding: '14px 32px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>Start a Project →</button>
                    <a href="mailto:hello@aanya.design" style={{ display: 'inline-block', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', padding: '14px 28px', borderRadius: '10px', fontSize: '14px', textDecoration: 'none' }}>hello@aanya.design</a>
                </div>
            </section>

            <footer style={{ padding: '28px', textAlign: 'center', fontSize: '12px', color: '#BBB', borderTop: '1px solid #EFEFEF' }}>
                © 2026 Aanya Desai · Designed with intention
            </footer>
        </div>
    );
}

