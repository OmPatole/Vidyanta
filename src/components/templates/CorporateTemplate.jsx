import { useState } from 'react';
import FontLoader from './FontLoader';
import { Menu, X, ArrowRight, Globe, TrendingUp, Users, Award, ChevronRight, Phone } from 'lucide-react';
import useIsMobile from './useIsMobile';

/* ─── Classic navy/gold corporate theme ─── */
/* Font: Playfair Display (headlines) + Inter (body) */

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap';
const headFont = "'Playfair Display', Georgia, serif";
const navy = '#0F2545';
const gold  = '#B8962E';
const cream = '#FAFAF7';
const muted = '#6B7280';

const services = [
    { icon: TrendingUp, title: 'Strategy & Growth',  desc: 'Data-led roadmaps that accelerate sustainable business growth.' },
    { icon: Globe,       title: 'Market Expansion',  desc: 'Enter new geographies with confidence and local intelligence.' },
    { icon: Users,       title: 'People & Culture',  desc: 'Build high-performance teams with proven talent frameworks.' },
    { icon: Award,       title: 'Brand Authority',   desc: 'Establish a brand that commands trust and commands a premium.' },
];

const team = [
    { name: 'Arjun Mehta',    role: 'CEO & Founder',      initials: 'AM' },
    { name: 'Priya Sharma',   role: 'Head of Strategy',   initials: 'PS' },
    { name: 'Rahul Verma',    role: 'Operations Director', initials: 'RV' },
];

export default function CorporateTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: cream, color: navy, minHeight: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Top info bar */}
            <div style={{ background: navy, color: 'rgba(255,255,255,0.6)', fontSize: 12, padding: '7px 0', textAlign: 'center' }}>
                Trusted by 200+ enterprises globally &nbsp;·&nbsp; <span style={{ color: gold }}>Schedule a free discovery call →</span>
            </div>

            {/* Navbar */}
            <header style={{ borderBottom: `1px solid ${navy}20`, background: cream }}>
                <div style={{ maxWidth: 1140, margin: '0 auto', padding: '16px 24px', minHeight: 64, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <span style={{ fontFamily: headFont, fontSize: 22, fontWeight: 700, color: navy, letterSpacing: '-0.02em' }}>Nexus<span style={{ color: gold }}>.</span></span>
                    {!isMobile && (
                        <nav style={{ gap: 32, fontSize: 14, color: muted, display: 'flex', flexWrap: 'wrap' }}>
                            {['About', 'Services', 'Case Studies', 'Team', 'Contact'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <button style={{ background: navy, color: '#fff', fontSize: 13, fontWeight: 600, padding: '9px 20px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>
                            Get In Touch
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
                            {['About', 'Services', 'Case Studies', 'Team', 'Contact'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ background: navy, color: '#fff', fontSize: 13, fontWeight: 600, padding: '9px 20px', borderRadius: 6, border: 'none', cursor: 'pointer', width: 'min(240px, 90vw)' }}>
                                Get In Touch
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ maxWidth: 1140, margin: '0 auto', padding: 'clamp(40px, 8vw, 80px) 24px', display: 'flex', flexWrap: 'wrap', gap: 64, alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: "100%" }}>
                    <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: gold, marginBottom: 16 }}>
                        Strategic Business Consulting
                    </p>
                    <h1 style={{ fontFamily: headFont, fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: navy, marginBottom: 20 }}>
                        Building businesses<br />that endure.
                    </h1>
                    <p style={{ fontSize: 17, lineHeight: 1.7, color: muted, maxWidth: 460, marginBottom: 32 }}>
                        Nexus partners with ambitious companies to accelerate growth, optimise operations, and build brands that command authority in their markets.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        <button style={{ background: navy, color: '#fff', fontSize: 14, fontWeight: 600, padding: '12px 24px', borderRadius: 6, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                            Start a Project <ArrowRight size={15} />
                        </button>
                        <button style={{ background: 'transparent', color: navy, fontSize: 14, fontWeight: 600, padding: '12px 24px', borderRadius: 6, border: `1.5px solid ${navy}30`, cursor: 'pointer' }}>
                            View Case Studies
                        </button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, paddingTop: 32, borderTop: `1px solid ${navy}12` }}>
                        {[['200+','Clients'], ['$2B+','Revenue Generated'], ['98%','Retention Rate']].map(([v,l]) => (
                            <div key={l}>
                                <p style={{ fontFamily: headFont, fontSize: 28, fontWeight: 700, color: navy }}>{v}</p>
                                <p style={{ fontSize: 12, color: muted, marginTop: 2 }}>{l}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ background: navy, borderRadius: 12, padding: 36, width: '100%', maxWidth: 400 }}>
                        <p style={{ fontFamily: headFont, fontSize: 18, color: '#fff', marginBottom: 24 }}>Quarterly Performance</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 16 }}>
                            {[['Revenue Growth','+142%'],['Efficiency','+89%'],['Client NPS','4.9 / 5'],['Markets','24 entered']].map(([l,v]) => (
                                <div key={l} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '14px 16px' }}>
                                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{l}</p>
                                    <p style={{ fontSize: 20, fontWeight: 700, color: gold, marginTop: 4 }}>{v}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '16px', display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
                            {[40,60,48,80,70,95,88].map((h,i) => (
                                <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0', background: i===5 ? gold : 'rgba(255,255,255,0.2)' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section style={{ background: '#F3F4F6', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: 1140, margin: '0 auto' }}>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: gold, marginBottom: 10, textAlign: 'center' }}>What We Do</p>
                    <h2 style={{ fontFamily: headFont, fontSize: 36, fontWeight: 700, color: navy, textAlign: 'center', marginBottom: 40 }}>Services built for growth</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                        {services.map(({ icon: Icon, title, desc }) => (
                            <div key={title} style={{ background: '#fff', borderRadius: 10, padding: '28px 24px', borderTop: `3px solid ${navy}` }}>
                                <Icon size={22} style={{ color: gold, marginBottom: 14 }} />
                                <p style={{ fontFamily: headFont, fontSize: 16, fontWeight: 600, color: navy, marginBottom: 8 }}>{title}</p>
                                <p style={{ fontSize: 13, lineHeight: 1.6, color: muted }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section style={{ background: navy, padding: 'clamp(40px, 6vw, 64px) 24px', textAlign: 'center' }}>
                <div style={{ maxWidth: 720, margin: '0 auto' }}>
                    <p style={{ fontFamily: headFont, fontSize: 22, fontStyle: 'italic', color: '#fff', lineHeight: 1.6, marginBottom: 28 }}>
                        "Nexus transformed our go-to-market strategy. Revenue doubled within 8 months and we entered three new verticals with zero friction."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                        <span style={{ width: 38, height: 38, borderRadius: '50%', background: gold, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: navy }}>SK</span>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>Sandeep Kumar</p>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>CEO, BrightScale Technologies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section style={{ maxWidth: 1140, margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: headFont, fontSize: 32, fontWeight: 700, color: navy, marginBottom: 36 }}>The people behind the work</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                    {team.map(({ name, role, initials }) => (
                        <div key={name} style={{ width: 180, textAlign: 'center' }}>
                            <div style={{ width: 72, height: 72, borderRadius: 10, background: navy, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: gold, margin: '0 auto 12px' }}>{initials}</div>
                            <p style={{ fontWeight: 600, fontSize: 14, color: navy }}>{name}</p>
                            <p style={{ fontSize: 12, color: muted, marginTop: 2 }}>{role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#F3F4F6', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
                    <div>
                        <h2 style={{ fontFamily: headFont, fontSize: 30, fontWeight: 700, color: navy, marginBottom: 6 }}>Ready to grow faster?</h2>
                        <p style={{ color: muted, fontSize: 15 }}>Let's schedule a 30-minute discovery call — no commitment required.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        <button style={{ background: navy, color: '#fff', fontSize: 14, fontWeight: 600, padding: '12px 24px', borderRadius: 6, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                            Book a Call <ChevronRight size={15} />
                        </button>
                        <button style={{ background: 'transparent', color: navy, fontSize: 14, fontWeight: 500, padding: '12px 24px', borderRadius: 6, border: `1.5px solid ${navy}30`, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Phone size={14} /> +91 98765 43210
                        </button>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8962E', marginBottom: '12px' }}>Our People</p>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#0F2545', margin: 0 }}>Leadership Team</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
                    {[
                        { name: 'Arjun Mehta', role: 'Chief Executive Officer', exp: '22 yrs', initials: 'AM', bg: '#0F2545' },
                        { name: 'Priya Krishnan', role: 'Chief Operating Officer', exp: '18 yrs', initials: 'PK', bg: '#1A3560' },
                        { name: 'Rahul Singhania', role: 'VP — Business Development', exp: '15 yrs', initials: 'RS', bg: '#B8962E' },
                        { name: 'Sneha Iyer', role: 'Head of Client Relations', exp: '12 yrs', initials: 'SI', bg: '#0F2545' },
                    ].map(({ name, role, exp, initials, bg }) => (
                        <div key={name} style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', border: '1px solid rgba(15,37,69,0.08)', boxShadow: '0 2px 16px rgba(15,37,69,0.05)', textAlign: 'center' }}>
                            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, color: '#fff', margin: '0 auto 16px', fontFamily: "'Playfair Display', serif" }}>{initials}</div>
                            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', color: '#0F2545', margin: '0 0 4px', fontWeight: 600 }}>{name}</p>
                            <p style={{ fontSize: '12px', color: '#B8962E', fontWeight: 600, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{role}</p>
                            <p style={{ fontSize: '12px', color: 'rgba(15,37,69,0.4)', margin: 0 }}>{exp} experience</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ background: '#F4F7FC', padding: '72px 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8962E', marginBottom: '12px' }}>Client Stories</p>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#0F2545', margin: 0 }}>What our clients say</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {[
                            { quote: 'Nexus Corp completely transformed how we approach our global markets. Their strategic insight is unmatched — revenue grew 38% in the first year.', name: 'Deepak Verma', company: 'CEO, InfraBuild Ltd', initials: 'DV' },
                            { quote: 'Working with Nexus has been the single best business decision we made. Their team is professional, responsive, and genuinely invested in our success.', name: 'Anita Sharma', company: 'MD, Horizon Finance', initials: 'AS' },
                            { quote: 'From initial consultation to full implementation, the experience was seamless. They understood our industry inside-out and delivered beyond expectations.', name: 'Vikram Nair', company: 'COO, TeleDynamics', initials: 'VN' },
                        ].map(({ quote, name, company, initials }) => (
                            <div key={name} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(15,37,69,0.07)', boxShadow: '0 2px 16px rgba(15,37,69,0.04)' }}>
                                <p style={{ fontSize: '32px', color: '#B8962E', margin: '0 0 16px', fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>"</p>
                                <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(15,37,69,0.65)', margin: '0 0 24px', fontStyle: 'italic' }}>{quote}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(15,37,69,0.06)', paddingTop: '16px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0F2545', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{initials}</div>
                                    <div>
                                        <p style={{ fontSize: '13px', fontWeight: 700, color: '#0F2545', margin: 0 }}>{name}</p>
                                        <p style={{ fontSize: '11px', color: '#B8962E', margin: 0 }}>{company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8962E', marginBottom: '12px' }}>Our Foundation</p>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#0F2545', margin: 0 }}>What drives us</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {[
                        { title: 'Integrity First', desc: 'Every recommendation we make is in your best interest — full stop. No hidden agendas, no conflicting incentives.' },
                        { title: 'Long-Term Thinking', desc: 'We measure success in years, not quarters. Sustainable growth built on solid foundations.' },
                        { title: 'Global Perspective', desc: 'With offices in 18 cities, we bring local expertise and international insight to every engagement.' },
                        { title: 'Result-Driven', desc: 'We back every strategy with measurable KPIs and accountability. Our success is tied to yours.' },
                    ].map(({ title, desc }) => (
                        <div key={title} style={{ borderLeft: '3px solid #B8962E', paddingLeft: '20px' }}>
                            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', color: '#0F2545', margin: '0 0 10px', fontWeight: 600 }}>{title}</p>
                            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(15,37,69,0.55)', margin: 0 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer style={{ background: '#0A1A35', padding: '28px 24px', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                © 2026 Nexus Corp · <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a> · <a href="#" style={{ color: 'inherit' }}>Terms</a>
            </footer>
        </div>
    );
}


