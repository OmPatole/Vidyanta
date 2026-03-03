import { useState } from 'react';
import FontLoader from './FontLoader';
import { Menu, X, Building2, Home, Landmark, Warehouse, Building, MapPin } from 'lucide-react';
import useIsMobile from './useIsMobile';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@400;500;600;700&display=swap';

const listings = [
    { title: '3 BHK Sky Residence', location: 'Bandra West, Mumbai', price: '₹2.8 Cr', area: '1,450 sqft', type: 'Apartment', tag: 'Featured', Icon: Building2 },
    { title: 'Garden Villa With Pool', location: 'Jubilee Hills, Hyderabad', price: '₹4.5 Cr', area: '3,200 sqft', type: 'Villa', tag: 'Prime', Icon: Home },
    { title: 'Designer 2 BHK Flat', location: 'Koramangala, Bengaluru', price: '₹95 L', area: '980 sqft', type: 'Apartment', tag: 'New', Icon: Building },
    { title: 'Penthouse — Salt Lake', location: 'Kolkata', price: '₹3.1 Cr', area: '4,000 sqft', type: 'Penthouse', tag: 'Exclusive', Icon: Landmark },
    { title: 'Premium Office Suite', location: 'Cyber City, Gurugram', price: '₹1.2 Cr', area: '2,100 sqft', type: 'Commercial', tag: null, Icon: Warehouse },
    { title: 'Studio on Powai Lake', location: 'Mumbai', price: '₹68 L', area: '540 sqft', type: 'Studio', tag: null, Icon: Building2 },
];

export default function RealEstateTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#F8F7F4', color: '#1E293B', minHeight: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Nav */}
            <header style={{ position: 'sticky', top: '0', zIndex: 50, background: 'rgba(248,247,244,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(30,41,59,0.08)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#1E293B', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#B08D5B', fontWeight: 700, fontSize: '15px', fontFamily: "'Cormorant Garamond', serif" }}>P</span>
                        <div>
                            <p style={{ fontSize: '15px', fontWeight: 600, margin: 0, letterSpacing: '0.5px' }}>PropNest</p>
                            <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#B08D5B', margin: 0 }}>Premier Properties</p>
                        </div>
                    </div>
                    {!isMobile && (
                        <nav style={{ gap: '24px', fontSize: '13px', color: 'rgba(30,41,59,0.55)', fontWeight: 500, letterSpacing: '0.3px', display: 'flex' }}>
                            {['Buy', 'Rent', 'Sell', 'Agents', 'Blog'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            <button style={{ background: 'none', border: 'none', fontSize: '13px', color: 'rgba(30,41,59,0.55)', fontWeight: 500, padding: '9px 14px', cursor: 'pointer' }}>Log in</button>
                            <button style={{ background: '#1E293B', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '7px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>List Property</button>
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
                            {['Buy', 'Rent', 'Sell', 'Agents', 'Blog'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ background: 'none', border: '1px solid rgba(30,41,59,0.2)', fontSize: '13px', color: 'rgba(30,41,59,0.7)', fontWeight: 500, padding: '9px 18px', cursor: 'pointer', borderRadius: '7px', width: 'min(240px, 90vw)' }}>Log in</button>
                            <button style={{ background: '#1E293B', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '7px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', width: 'min(240px, 90vw)' }}>List Property</button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ background: '#1E293B', padding: '80px 24px 70px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', userSelect: 'none' }} />
                <div style={{ position: 'relative', maxWidth: '780px', margin: '0 auto' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#B08D5B', marginBottom: '20px' }}>12,000+ Verified Listings</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.1, fontWeight: 600, color: '#F8F7F4', margin: '0 0 20px', letterSpacing: '-0.5px' }}>
                        Find your perfect<br />
                        <em style={{ color: '#B08D5B' }}>home.</em>
                    </h1>
                    <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(248,247,244,0.55)', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>
                        Verified listings. Trusted agents. Zero brokerage surprises. Your dream property, discovered.
                    </p>

                    {/* Search bar */}
                    <div style={{ maxWidth: '580px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '8px', background: '#F8F7F4', borderRadius: '12px', padding: '8px', alignItems: 'center' }}>
                        <span style={{ padding: '0 8px', color: 'rgba(30,41,59,0.35)', display: 'flex' }}><MapPin size={16} /></span>
                        <input readOnly placeholder="City, locality or landmark…" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', color: '#1E293B' }} />
                        <select style={{ border: '1px solid rgba(30,41,59,0.12)', borderRadius: '7px', padding: '8px 12px', fontSize: '13px', background: '#fff', color: '#1E293B', outline: 'none', cursor: 'pointer' }}>
                            <option>Buy</option><option>Rent</option>
                        </select>
                        <button style={{ background: '#B08D5B', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Search</button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px', flexWrap: 'wrap' }}>
                        {['2 BHK in Mumbai', 'Villa in Goa', 'Office in Delhi', '1 BHK Bengaluru'].map(tag => (
                            <button key={tag} style={{ background: 'none', border: 'none', fontSize: '12px', color: 'rgba(248,247,244,0.4)', cursor: 'pointer' }}>{tag}</button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <div style={{ background: '#fff', borderBottom: '1px solid rgba(30,41,59,0.07)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                    {[['12K+', 'Properties Listed'], ['8K+', 'Happy Buyers'], ['500+', 'Verified Agents'], ['₹500Cr+', 'Deals Closed']].map(([v, l]) => (
                        <div key={l} style={{ textAlign: 'center' }}>
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#1E293B', margin: 0, fontWeight: 600 }}>{v}</p>
                            <p style={{ fontSize: '11px', color: 'rgba(30,41,59,0.45)', marginTop: '3px', letterSpacing: '0.5px' }}>{l}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Listings */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '32px' }}>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 600, margin: 0 }}>Featured Properties</h2>
                    <button style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: 600, color: '#B08D5B', cursor: 'pointer' }}>View all →</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {listings.map(({ title, location, price, area, type, tag, Icon }) => (
                        <div key={title} style={{ borderRadius: '16px', overflow: 'hidden', background: '#fff', border: '1px solid rgba(30,41,59,0.07)', boxShadow: '0 2px 16px rgba(30,41,59,0.05)', cursor: 'pointer', transition: 'transform 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '150px', background: '#F0EDE8', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Icon size={52} style={{ color: '#B08D5B' }} />
                                {tag && (
                                    <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#1E293B', color: '#B08D5B', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>{tag}</span>
                                )}
                            </div>
                            <div style={{ padding: '18px' }}>
                                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: '#1E293B', margin: '0 0 4px' }}>{title}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'rgba(30,41,59,0.45)', margin: '0 0 12px' }}>
                                    <MapPin size={11} />{location}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#1E293B', margin: 0 }}>{price}</p>
                                        <p style={{ fontSize: '11px', color: 'rgba(30,41,59,0.4)', margin: '2px 0 0' }}>{area} · {type}</p>
                                    </div>
                                    <button style={{ background: '#1E293B', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#1E293B', padding: 'clamp(40px, 6vw, 64px) 24px', textAlign: 'center' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#B08D5B', marginBottom: '16px' }}>For Sellers</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 600, color: '#F8F7F4', margin: '0 0 12px' }}>Sell your property faster</h2>
                <p style={{ fontSize: '15px', color: 'rgba(248,247,244,0.5)', marginBottom: '32px' }}>List for free. Get matched with verified buyers instantly.</p>
                <button style={{ background: '#B08D5B', color: '#fff', border: 'none', padding: '14px 36px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>List Your Property →</button>
            </section>

            {/* How It Works */}
            <section style={{ background: '#F8F7F4', padding: '72px 24px' }}>
                <div style={{ maxWidth: '880px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#B08D5B', marginBottom: '12px' }}>Simple Process</p>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 600, color: '#1E293B', margin: 0 }}>Your journey to a new home</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
                        {[
                            { step: '01', title: 'Search & Filter', desc: 'Browse thousands of verified listings filtered by location, budget, and property type.' },
                            { step: '02', title: 'Schedule a Visit', desc: 'Book in-person or virtual tours at times that suit you, managed online in seconds.' },
                            { step: '03', title: 'Close with Confidence', desc: 'Our legal and document-verification team guides you through every step to keys-in-hand.' },
                        ].map(({ step, title, desc }) => (
                            <div key={step} style={{ position: 'relative', paddingTop: '16px' }}>
                                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 700, color: 'rgba(176,141,91,0.12)', position: 'absolute', top: 0, left: 0, lineHeight: 1, margin: 0 }}>{step}</p>
                                <div style={{ paddingTop: '36px' }}>
                                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#B08D5B', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{step}</p>
                                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#1E293B', margin: '0 0 10px' }}>{title}</h3>
                                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(30,41,59,0.55)', margin: 0 }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Agents */}
            <section style={{ background: '#1E293B', padding: '72px 24px' }}>
                <div style={{ maxWidth: '880px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#B08D5B', marginBottom: '12px' }}>Our Team</p>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 600, color: '#F8F7F4', margin: 0 }}>Meet our top agents</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '28px' }}>
                        {[
                            { name: 'Kavitha Rajan', city: 'Chennai & Coimbatore', deals: '142 deals', rating: '4.9' },
                            { name: 'Arjun Sethi', city: 'Mumbai & Pune', deals: '118 deals', rating: '4.8' },
                            { name: 'Preethi Nambiar', city: 'Bengaluru', deals: '97 deals', rating: '4.9' },
                            { name: 'Suresh Pillai', city: 'Kochi & Thrissur', deals: '85 deals', rating: '4.7' },
                        ].map(({ name, city, deals, rating }) => (
                            <div key={name} style={{ background: 'rgba(248,247,244,0.04)', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px solid rgba(248,247,244,0.07)' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#B08D5B', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#fff' }}>{name[0]}</div>
                                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: '#F8F7F4', margin: '0 0 4px' }}>{name}</p>
                                <p style={{ fontSize: '12px', color: 'rgba(248,247,244,0.4)', margin: '0 0 14px' }}>{city}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '10px 0', borderTop: '1px solid rgba(248,247,244,0.07)' }}>
                                    <span style={{ fontSize: '12px', color: 'rgba(248,247,244,0.55)' }}>{deals}</span>
                                    <span style={{ fontSize: '12px', color: '#B08D5B', fontWeight: 700 }}>★ {rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Homeowner Testimonials */}
            <section style={{ background: '#F8F7F4', padding: '72px 24px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#B08D5B', marginBottom: '12px' }}>Testimonials</p>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 600, color: '#1E293B', margin: 0 }}>Happy homeowners</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        {[
                            { name: 'Rohan & Divya Mehta', location: 'Bought in Banjara Hills', review: 'From the first call to moving day, PropNest made every step effortless. Our agent Preethi found us our dream apartment within two weeks.' },
                            { name: 'Srinivas Rao', location: 'Sold in Jubilee Hills', review: 'I listed at 3 PM on a Monday. By Wednesday morning I had three serious buyers. The documentation support was exceptional.' },
                            { name: 'Smita Joshi', location: 'Invested in Whitefield', review: 'As a first-time investor, I was nervous. The team walked me through every detail. The yield on my flat has already exceeded projections.' },
                        ].map(({ name, location, review }) => (
                            <div key={name} style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid rgba(30,41,59,0.07)' }}>
                                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', lineHeight: 1.7, color: '#1E293B', margin: '0 0 18px', fontStyle: 'italic' }}>"{review}"</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 700, color: '#1E293B', margin: 0 }}>{name}</p>
                                    <p style={{ fontSize: '11px', color: '#B08D5B', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>{location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer style={{ padding: '24px', textAlign: 'center', fontSize: '12px', color: 'rgba(30,41,59,0.35)', borderTop: '1px solid rgba(30,41,59,0.07)', background: '#F8F7F4', letterSpacing: '0.3px' }}>
                © 2026 PropNest · RERA Registered · Privacy · Terms
            </footer>
        </div>
    );
}

