import { useState } from 'react';
import FontLoader from './FontLoader';
import { Menu, X, Trophy, Search, Code2, BarChart2, Brush, Cloud, PlayCircle, Clock } from 'lucide-react';
import useIsMobile from './useIsMobile';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap';

const courses = [
    { title: 'Full-Stack Web Development', instructor: 'Karan Mehta', rating: '4.9', students: '12,400', duration: '48 hrs', price: '₹1,999', badge: 'Bestseller', color: '#7C3AED', Icon: Code2 },
    { title: 'Data Science with Python', instructor: 'Priya Gupta', rating: '4.8', students: '9,200', duration: '36 hrs', price: '₹2,499', badge: 'Top Rated', color: '#DC2626', Icon: BarChart2 },
    { title: 'UI/UX Design Bootcamp', instructor: 'Anika Roy', rating: '4.9', students: '7,800', duration: '24 hrs', price: '₹1,799', badge: 'New', color: '#059669', Icon: Brush },
    { title: 'Cloud & DevOps Master', instructor: 'Suresh Rao', rating: '4.7', students: '5,600', duration: '52 hrs', price: '₹3,299', badge: null, color: '#D97706', Icon: Cloud },
];

const categories = ['Web Dev', 'Data Science', 'Design', 'Cloud', 'AI & ML', 'Mobile', 'Cyber Security', 'Business'];

export default function EducationTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", background: '#FAFAFA', color: '#1A1033', minHeight: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Nav */}
            <header style={{ position: 'sticky', top: '0', zIndex: 50, background: 'rgba(250,250,250,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(26,16,51,0.07)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '12px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '12px', flexShrink: 0 }}>
                        <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#7C3AED', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '16px' }}>L</span>
                        <span style={{ fontWeight: 700, fontSize: '16px' }}>LearnUp</span>
                    </div>
                    <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', background: '#F0EFF5', borderRadius: '10px', padding: '8px 14px', gap: '8px' }}>
                        <span style={{ fontSize: '14px', color: 'rgba(26,16,51,0.4)', display: 'flex' }}><Search size={14} /></span>
                        <input readOnly placeholder="Search 5,000+ courses…" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '13px', color: '#1A1033' }} />
                    </div>
                    {!isMobile && (
                        <nav style={{ gap: '20px', fontSize: '13px', color: 'rgba(26,16,51,0.55)', fontWeight: 500, display: 'flex' }}>
                            {['Courses', 'Paths', 'Teams'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flexShrink: 0 }}>
                            <button style={{ background: 'none', border: 'none', fontSize: '13px', color: 'rgba(26,16,51,0.55)', fontWeight: 500, padding: '9px 14px', cursor: 'pointer' }}>Log in</button>
                            <button style={{ background: '#7C3AED', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Start Free</button>
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
                            {['Courses', 'Paths', 'Teams'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ background: 'none', border: '1px solid rgba(26,16,51,0.2)', fontSize: '13px', color: 'rgba(26,16,51,0.7)', fontWeight: 500, padding: '9px 18px', cursor: 'pointer', borderRadius: '8px', width: 'min(240px, 90vw)' }}>Log in</button>
                            <button style={{ background: '#7C3AED', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', width: 'min(240px, 90vw)' }}>Start Free</button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg,#7C3AED 0%,#5B21B6 100%)', padding: '72px 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px', color: '#fff' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#FDE68A', fontSize: '12px', fontWeight: 600, padding: '5px 14px', borderRadius: '100px', marginBottom: '20px', letterSpacing: '0.5px' }}>
                            50,000+ learners this month
                        </span>
                        <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2, fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.5px' }}>
                            Learn skills that<br />
                            <span style={{ color: '#F59E0B' }}>pay the bills.</span>
                        </h1>
                        <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', margin: '0 0 28px', maxWidth: '420px' }}>
                            Industry-led, mentor-supported courses. Build real projects, earn verified certificates, and land the job you want.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                            <button style={{ background: '#F59E0B', color: '#1A1033', border: 'none', padding: '13px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>Explore Courses →</button>
                            <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)', padding: '13px 24px', borderRadius: '10px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}><PlayCircle size={14} /> Watch Intro</button>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                            {[['5K+', 'Courses'], ['200+', 'Mentors'], ['95%', 'Placement'], ['4.8★', 'Rating']].map(([v, l]) => (
                                <div key={l}>
                                    <p style={{ fontSize: '22px', fontWeight: 700, color: '#F59E0B', margin: 0 }}>{v}</p>
                                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{l}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificate mockup */}
                    <div style={{ flex: '0 0 280px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '24px', textAlign: 'center' }}>
                        <Trophy size={40} style={{ color: '#F59E0B', marginBottom: '12px' }} />
                        <p style={{ fontWeight: 700, color: '#fff', fontSize: '14px', margin: '0 0 4px' }}>Certificate of Completion</p>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', margin: '0 0 16px' }}>Full-Stack Web Development</p>
                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '16px' }} />
                        <p style={{ fontWeight: 700, fontSize: '18px', color: '#fff', margin: '0 0 4px' }}>Rohan Sharma</p>
                        <p style={{ fontSize: '12px', color: '#F59E0B', margin: '0 0 16px' }}>Issued by LearnUp Academy</p>
                        {['React & Node.js', 'MongoDB & SQL', 'REST APIs'].map(s => (
                            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', textAlign: 'left' }}>
                                <span style={{ color: '#F59E0B', fontSize: '13px' }}>✓</span>
                                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px 16px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {categories.map((c, i) => (
                        <button key={c} style={{ fontSize: '12px', fontWeight: 600, padding: '8px 16px', borderRadius: '100px', background: i === 0 ? '#7C3AED' : '#EDE9F6', color: i === 0 ? '#fff' : 'rgba(26,16,51,0.65)', border: 'none', cursor: 'pointer' }}>{c}</button>
                    ))}
                </div>
            </section>

            {/* Courses */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 24px 64px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>Most Popular Courses</h2>
                    <button style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>All courses →</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                    {courses.map(({ title, instructor, rating, students, duration, price, badge, color, Icon }) => (
                        <div key={title} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(26,16,51,0.07)', boxShadow: '0 2px 12px rgba(124,58,237,0.05)', cursor: 'pointer', transition: 'transform 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '120px', background: color + '14', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Icon size={48} style={{ color }} />
                                {badge && <span style={{ position: 'absolute', top: '10px', left: '10px', background: color, color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '100px' }}>{badge}</span>}
                            </div>
                            <div style={{ padding: '16px' }}>
                                <p style={{ fontWeight: 600, fontSize: '14px', margin: '0 0 4px', lineHeight: 1.4, color: '#1A1033' }}>{title}</p>
                                <p style={{ fontSize: '12px', color: 'rgba(26,16,51,0.45)', margin: '0 0 8px' }}>{instructor}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 700, color: color }}>★ {rating}</span>
                                    <span style={{ fontSize: '11px', color: 'rgba(26,16,51,0.4)' }}>({students})</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'rgba(26,16,51,0.4)', margin: '0 0 12px' }}>
                                    <Clock size={11} />{duration}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                                    <span style={{ fontWeight: 700, fontSize: '16px', color: color }}>{price}</span>
                                    <button style={{ background: color, color: '#fff', border: 'none', padding: '7px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}>Enroll</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Teams CTA */}
            <section style={{ background: '#1A1033', padding: 'clamp(40px, 6vw, 64px) 24px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Your team learns better, together.</h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>LearnUp for Teams: bulk licences, progress dashboards, and dedicated mentors.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <button style={{ background: '#7C3AED', color: '#fff', border: 'none', padding: '13px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>Get Team Plan →</button>
                    <button style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.2)', padding: '13px 24px', borderRadius: '10px', fontSize: '14px', cursor: 'pointer' }}>Talk to Sales</button>
                </div>
            </section>

            {/* How It Works */}
            <section style={{ background: '#FAFAFA', padding: '72px 24px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#7C3AED', marginBottom: '12px' }}>Simple Steps</p>
                        <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#1A1033', margin: 0 }}>How LearnUp works</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '32px' }}>
                        {[
                            { step: '01', title: 'Pick a Course', desc: 'Browse 2,000+ courses across tech, business, design, and more — all curated by industry experts.' },
                            { step: '02', title: 'Learn at Your Pace', desc: 'Stream lessons on any device, pause and resume anytime. Subtitles in 12 languages included.' },
                            { step: '03', title: 'Build Real Projects', desc: 'Every course includes hands-on projects reviewed by mentors so you leave with actual portfolio-ready work.' },
                            { step: '04', title: 'Earn & Share', desc: 'Complete assessments, earn a verified certificate, and share your achievement directly on LinkedIn.' },
                        ].map(({ step, title, desc }) => (
                            <div key={step} style={{ position: 'relative', paddingTop: '12px' }}>
                                <p style={{ fontSize: '72px', fontWeight: 800, color: '#EDE9F6', position: 'absolute', top: 0, left: 0, lineHeight: 1, margin: 0 }}>{step}</p>
                                <div style={{ paddingTop: '0' }}>
                                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#7C3AED', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{step}</p>
                                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1A1033', margin: '0 0 10px' }}>{title}</h3>
                                    <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(26,16,51,0.5)', margin: 0 }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instructors */}
            <section style={{ background: 'linear-gradient(180deg, #EDE9F6 0%, #FAFAFA 100%)', padding: '72px 24px' }}>
                <div style={{ maxWidth: '880px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#7C3AED', marginBottom: '12px' }}>Your Mentors</p>
                        <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#1A1033', margin: 0 }}>Learn from the best</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '24px' }}>
                        {[
                            { name: 'Karan Mehta', role: 'Full-Stack Engineering', students: '42,800', rating: '4.9', bg: '#7C3AED' },
                            { name: 'Priya Gupta', role: 'Data Science & AI', students: '38,500', rating: '4.8', bg: '#F59E0B' },
                            { name: 'Anika Roy', role: 'UX Design & Research', students: '29,100', rating: '4.9', bg: '#10B981' },
                            { name: 'Suresh Rao', role: 'Product Management', students: '24,600', rating: '4.8', bg: '#3B82F6' },
                        ].map(({ name, role, students, rating, bg }) => (
                            <div key={name} style={{ background: '#fff', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 12px rgba(124,58,237,0.07)' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: bg, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, color: '#fff' }}>{name[0]}</div>
                                <p style={{ fontWeight: 700, fontSize: '15px', color: '#1A1033', margin: '0 0 4px' }}>{name}</p>
                                <p style={{ fontSize: '12px', color: 'rgba(26,16,51,0.45)', margin: '0 0 14px' }}>{role}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', fontSize: '12px', borderTop: '1px solid rgba(26,16,51,0.06)', paddingTop: '12px', color: 'rgba(26,16,51,0.5)' }}>
                                    <span>{students} students</span>
                                    <span style={{ color: '#F59E0B', fontWeight: 700 }}>★ {rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Testimonials */}
            <section style={{ background: '#FAFAFA', padding: '72px 24px' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#7C3AED', marginBottom: '12px' }}>Success Stories</p>
                        <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#1A1033', margin: 0 }}>What our learners say</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {[
                            { name: 'Rohit Sharma', course: 'Full-Stack Web Dev', review: 'I went from zero coding knowledge to landing a ₹12 LPA role in 9 months. Karan\'s teaching style is incredibly clear, and the projects made my portfolio stand out.' },
                            { name: 'Kavya Nair', course: 'Data Science with Python', review: 'The curriculum is thorough and always up-to-date. I aced my data analyst interview because every topic they asked about was covered in depth on LearnUp.' },
                            { name: 'Tanvi Shah', course: 'UX Design Fundamentals', review: 'As a self-taught designer, I was missing structure. This course gave me a professional framework and the confidence to charge twice my previous freelance rate.' },
                        ].map(({ name, course, review }) => (
                            <div key={name} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(26,16,51,0.07)', display: 'flex', flexWrap: 'wrap', gap: '18px', alignItems: 'flex-start' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{name[0]}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                        <p style={{ fontWeight: 700, fontSize: '15px', color: '#1A1033', margin: 0 }}>{name}</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>{[...Array(5)].map((_, i) => <span key={i} style={{ color: '#F59E0B', fontSize: '14px' }}>★</span>)}</div>
                                    </div>
                                    <p style={{ fontSize: '11px', color: '#7C3AED', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px' }}>{course}</p>
                                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(26,16,51,0.55)', margin: 0 }}>"{review}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer style={{ padding: '24px', textAlign: 'center', fontSize: '12px', color: 'rgba(26,16,51,0.35)', background: '#FAFAFA', borderTop: '1px solid rgba(26,16,51,0.07)' }}>
                © 2026 LearnUp Academy · Privacy · Terms · Sitemap
            </footer>
        </div>
    );
}

