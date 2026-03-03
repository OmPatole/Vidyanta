import { useState } from 'react';
import FontLoader from './FontLoader';
import { Menu, X, Heart, Activity, Brain, Baby, Sparkles, Stethoscope, AlertTriangle, Calendar, Shield, CheckCircle, Star, Phone } from 'lucide-react';
import useIsMobile from './useIsMobile';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap';

const services = [
    { name: 'Cardiology', Icon: Heart, desc: 'Advanced cardiac care with 24/7 monitoring and intervention' },
    { name: 'Orthopaedics', Icon: Activity, desc: 'Joint replacement, spine surgery & sports medicine' },
    { name: 'Neurology', Icon: Brain, desc: 'Comprehensive brain & nervous system diagnosis and care' },
    { name: 'Paediatrics', Icon: Baby, desc: 'Specialised care from newborns through adolescence' },
    { name: 'Dermatology', Icon: Sparkles, desc: 'Medical, cosmetic & laser skin treatments' },
    { name: 'Oncology', Icon: Stethoscope, desc: 'Early detection, precision treatment & holistic support' },
];

const doctors = [
    { name: 'Dr. Anita Rao', specialty: 'Cardiologist', exp: '18 yrs', rating: '4.9', initials: 'AR', bg: '#0D9488' },
    { name: 'Dr. Vikas Nair', specialty: 'Neurologist', exp: '14 yrs', rating: '4.8', initials: 'VN', bg: '#0891B2' },
    { name: 'Dr. Preethi Menon', specialty: 'Oncologist', exp: '20 yrs', rating: '5.0', initials: 'PM', bg: '#059669' },
];

export default function HealthcareTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div style={{ fontFamily: "'Noto Sans', sans-serif", background: '#FFFFFF', color: '#0F172A', minHeight: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Emergency bar */}
            <div style={{ background: '#0D9488', padding: '8px 24px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#fff', letterSpacing: '0.3px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <AlertTriangle size={14} /> Emergency Helpline: <strong>+91 1800 MEDPLEX</strong> · Open 24 / 7
            </div>

            {/* Nav */}
            <header style={{ paddingTop: '0px', position: 'sticky', top: '0', zIndex: 50, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 1px 8px rgba(13,148,136,0.06)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#0D9488', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '16px' }}>M</span>
                        <div>
                            <p style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#0F172A' }}>MedPlex Hospital</p>
                            <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#0D9488', margin: 0 }}>JCI Accredited</p>
                        </div>
                    </div>
                    {!isMobile && (
                        <nav style={{ gap: '24px', fontSize: '14px', color: 'rgba(15,23,42,0.55)', fontWeight: 500, display: 'flex' }}>
                            {['Services', 'Doctors', 'About', 'Blog', 'Contact'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0D9488', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                            <Calendar size={14} /> Book Appointment
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
                            {['Services', 'Doctors', 'About', 'Blog', 'Contact'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0D9488', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', width: 'min(240px, 90vw)', justifyContent: 'center' }}>
                                <Calendar size={14} /> Book Appointment
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #F0FDFA 0%, #ECFEFF 100%)', padding: '72px 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(13,148,136,0.1)', color: '#0D9488', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '100px', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            JCI Accredited Hospital
                        </span>
                        <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.15, fontWeight: 700, margin: '0 0 18px', color: '#0F172A' }}>
                            Your health is<br />
                            our <span style={{ color: '#0D9488' }}>highest priority.</span>
                        </h1>
                        <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(15,23,42,0.6)', margin: '0 0 28px', maxWidth: '440px' }}>
                            30+ specialities. 200+ expert doctors. Cutting-edge diagnostics. All under one roof.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0D9488', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Book Appointment →</button>
                            <button style={{ background: '#fff', color: '#0F172A', border: '1.5px solid rgba(15,23,42,0.15)', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px' }}><Phone size={14} /> Call Us</button>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                            {[['200+', 'Doctors'], ['30+', 'Specialities'], ['50K+', 'Patients/yr'], ['4.9★', 'Rating']].map(([v, l]) => (
                                <div key={l}>
                                    <p style={{ fontSize: '22px', fontWeight: 700, color: '#0D9488', margin: 0 }}>{v}</p>
                                    <p style={{ fontSize: '11px', color: 'rgba(15,23,42,0.45)', marginTop: '3px' }}>{l}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Appointment card */}
                    <div style={{ flex: '0 0 310px', background: '#fff', borderRadius: '20px', padding: '24px', boxShadow: '0 8px 40px rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.1)' }}>
                        <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px', color: '#0F172A' }}>Quick Appointment</p>
                        {['Select Department', 'Choose Doctor', 'Pick Date & Time'].map((label, i) => (
                            <div key={label} style={{ marginBottom: '12px' }}>
                                <label style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(15,23,42,0.45)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</label>
                                <div style={{ background: '#F1FBF9', border: '1px solid rgba(13,148,136,0.15)', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: 'rgba(15,23,42,0.5)' }}>
                                    {i === 0 ? 'Cardiology' : i === 1 ? 'Dr. Anita Rao' : 'Tomorrow, 10:30 AM'}
                                </div>
                            </div>
                        ))}
                        <button style={{ marginTop: '8px', width: '100%', padding: '12px', borderRadius: '10px', background: '#0D9488', color: '#fff', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                            Confirm Appointment
                        </button>
                    </div>
                </div>
            </section>

            {/* Trust strip */}
            <div style={{ background: '#0D9488' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
                    {[[Shield, 'NABH Certified'], [CheckCircle, 'ISO 9001:2015'], [Heart, '24/7 Emergency'], [Star, 'Best Hospital 2025']].map(([TrustIcon, text]) => (
                        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '13px', fontWeight: 500 }}>
                            <TrustIcon size={16} style={{ color: '#fff' }} />{text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Services */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span style={{ display: 'inline-block', background: '#0D9488', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '4px', marginBottom: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Specialities</span>
                    <h2 style={{ fontSize: '32px', fontWeight: 700, margin: 0, color: '#0F172A' }}>World-class care across every department</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                        {services.map(({ name, Icon, desc }) => (
                            <div key={name} style={{ background: '#fff', border: '1px solid rgba(13,148,136,0.1)', borderRadius: '14px', padding: '22px', boxShadow: '0 2px 12px rgba(13,148,136,0.05)', cursor: 'pointer', transition: 'transform 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                <Icon size={32} style={{ color: '#0D9488', marginBottom: '12px', display: 'block' }} />
                            <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px', color: '#0F172A' }}>{name}</p>
                            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(15,23,42,0.5)', margin: 0 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Doctors */}
            <section style={{ background: '#F0FDFA', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, marginBottom: '40px', color: '#0F172A' }}>Meet our specialists</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        {doctors.map(({ name, specialty, exp, rating, initials, bg }) => (
                            <div key={name} style={{ background: '#fff', borderRadius: '18px', padding: '24px 20px', textAlign: 'center', width: '220px', boxShadow: '0 4px 20px rgba(13,148,136,0.08)' }}>
                                <div style={{ width: '64px', minHeight: '64px', borderRadius: '16px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, color: '#fff', margin: '0 auto 12px' }}>{initials}</div>
                                <p style={{ fontWeight: 700, fontSize: '15px', margin: '0 0 4px', color: '#0F172A' }}>{name}</p>
                                <p style={{ fontSize: '13px', color: 'rgba(15,23,42,0.5)', margin: '0 0 12px' }}>{specialty}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '12px', color: 'rgba(15,23,42,0.45)', marginBottom: '14px' }}>
                                    <span>{exp} exp</span><span>{rating}★</span>
                                </div>
                                <button style={{ width: '100%', padding: '9px', background: '#0D9488', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ background: '#0F172A', padding: '72px 24px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#0D9488', marginBottom: '12px' }}>Our Advantage</p>
                        <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#fff', margin: 0 }}>Why patients choose MedPlex</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                        {[
                            { title: 'Shortest Wait Times', stat: '< 8 min', desc: 'Our triage system ensures you are seen by a doctor faster than any comparable hospital in the city.' },
                            { title: 'International Standards', stat: 'NABH + JCI', desc: 'Dual accreditation ensures clinical protocols, hygiene, and patient safety meet the highest global benchmarks.' },
                            { title: 'Transparent Billing', stat: '0 hidden fees', desc: 'Full cost estimates before every procedure. Our billing team will walk you through every line item.' },
                            { title: 'Digital-First Care', stat: '24/7 access', desc: 'Access reports, prescriptions, and follow-up consultations entirely through our app or web portal.' },
                        ].map(({ title, stat, desc }) => (
                            <div key={title} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.06)' }}>
                                <p style={{ fontSize: '28px', fontWeight: 800, color: '#0D9488', margin: '0 0 8px', letterSpacing: '-0.5px' }}>{stat}</p>
                                <p style={{ fontWeight: 700, fontSize: '15px', color: '#fff', margin: '0 0 10px' }}>{title}</p>
                                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patient Testimonials */}
            <section style={{ background: '#F0FDFA', padding: '72px 24px' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#0D9488', marginBottom: '12px' }}>Patient Stories</p>
                        <h2 style={{ fontSize: '34px', fontWeight: 700, color: '#0F172A', margin: 0 }}>Trusted by thousands of patients</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {[
                            { name: 'Sunita Krishnamurthy', dept: 'Cardiac Care', review: 'After my bypass surgery, the recovery guidance from the MedPlex team was extraordinary. They called to check on me every day for two weeks. I can\'t thank them enough.' },
                            { name: 'Ramesh Gupta', dept: 'Orthopaedics', review: 'I was treated for a complex knee replacement. The physiotherapy program was exceptional and I was walking without support in just 6 weeks.' },
                            { name: 'Ananya Bose', dept: 'Maternity & Newborn', review: 'From my first prenatal visit to the delivery and postnatal care, every staff member made me feel safe and supported. My daughter is healthy and happy!' },
                        ].map(({ name, dept, review }) => (
                            <div key={name} style={{ background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(13,148,136,0.08)', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{name[0]}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                                        <p style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A', margin: 0 }}>{name}</p>
                                        <span style={{ background: '#CCFBF1', color: '#0D9488', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>{dept}</span>
                                    </div>
                                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(15,23,42,0.55)', margin: 0 }}>"{review}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurance & Facilities */}
            <section style={{ background: '#fff', padding: '56px 24px' }}>
                <div style={{ maxWidth: '880px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#0D9488', marginBottom: '24px' }}>Insurance Partners</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '56px' }}>
                        {['Star Health', 'HDFC ERGO', 'Niva Bupa', 'Bajaj Allianz', 'ICICI Lombard', 'New India Assurance'].map(ins => (
                            <div key={ins} style={{ padding: '10px 20px', border: '1.5px solid rgba(13,148,136,0.2)', borderRadius: '8px', fontSize: '13px', fontWeight: 600, color: 'rgba(15,23,42,0.6)' }}>{ins}</div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#0D9488', marginBottom: '24px' }}>Our Facilities</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px' }}>
                        {[
                            { stat: '400+', label: 'Beds' },
                            { stat: '5', label: 'ICU Units' },
                            { stat: '12', label: 'OT Theatres' },
                            { stat: '24/7', label: 'Blood Bank' },
                            { stat: 'In-house', label: 'Pharmacy' },
                            { stat: 'On-site', label: 'Imaging' },
                        ].map(({ stat, label }) => (
                            <div key={label} style={{ background: '#F0FDFA', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                                <p style={{ fontSize: '22px', fontWeight: 800, color: '#0D9488', margin: '0 0 4px' }}>{stat}</p>
                                <p style={{ fontSize: '12px', color: 'rgba(15,23,42,0.55)', fontWeight: 600, margin: 0 }}>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer style={{ padding: '24px', textAlign: 'center', fontSize: '12px', background: '#0F172A', color: 'rgba(255,255,255,0.35)' }}>
                © 2026 MedPlex Hospital · NABH Certified · Privacy · Terms
            </footer>
        </div>
    );
}

