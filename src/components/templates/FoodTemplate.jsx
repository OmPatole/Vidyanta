import { useState } from 'react';
import FontLoader from './FontLoader';
import { Menu, X, ChefHat, Clock, MapPin, Star } from 'lucide-react';
import useIsMobile from './useIsMobile';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Lato:wght@300;400;700&display=swap';

const dishes = [
    { name: 'Burrata & Heritage Tomatoes', desc: 'Fresh burrata, slow-roasted heirloom tomatoes, basil oil, aged balsamic', price: '₹680', tag: 'Antipasto' },
    { name: 'Truffle Risotto', desc: 'Carnaroli rice, black truffle, Parmigiano Reggiano, house butter', price: '₹1,200', tag: 'Primo' },
    { name: 'Branzino al Forno', desc: 'Whole sea bass, preserved lemon, capers, cherry tomatoes, olive oil', price: '₹1,600', tag: 'Secondo' },
    { name: 'Tiramisù Classico', desc: 'Mascarpone, Savoiardi, espresso, Marsala, cocoa — made in-house daily', price: '₹420', tag: 'Dolce' },
];

export default function FoodTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div style={{ fontFamily: "'Lato', sans-serif", background: '#FAF5F0', color: '#3D1D0C', minHeight: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Nav */}
            <header style={{ position: 'sticky', top: '0', zIndex: 50, background: 'rgba(250,245,240,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(61,29,12,0.1)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div>
                        <p style={{ fontFamily: "'Lora', serif", fontSize: '20px', fontWeight: 600, margin: 0 }}>Trattoria <em style={{ color: '#C25A29' }}>della</em> Valle</p>
                        <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(61,29,12,0.4)', margin: 0 }}>Ristorante Italiano · Est. 1987</p>
                    </div>
                    {!isMobile && (
                        <nav style={{ gap: '28px', fontSize: '14px', color: 'rgba(61,29,12,0.55)', display: 'flex' }}>
                            {['Menu', 'Chef', 'Wine', 'Reservations'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                    )}
                    {!isMobile && (
                        <button style={{ background: '#C25A29', color: '#fff', border: 'none', padding: '11px 22px', borderRadius: '6px', fontSize: '13px', fontWeight: 700, letterSpacing: '.5px', cursor: 'pointer' }}>
                            Reserve a Table
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
                            {['Menu', 'Chef', 'Wine', 'Reservations'].map(n => (
                                <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ background: '#C25A29', color: '#fff', border: 'none', padding: '11px 22px', borderRadius: '6px', fontSize: '13px', fontWeight: 700, letterSpacing: '.5px', cursor: 'pointer', width: 'min(240px, 90vw)' }}>
                                Reserve a Table
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ background: '#3D1D0C', padding: '80px 24px 70px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', userSelect: 'none' }} />
                <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '20px' }}>Milano · Roma · Mumbai</p>
                    <h1 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.15, fontWeight: 600, color: '#FAF5F0', margin: '0 0 20px' }}>
                        Where <em>la dolce vita</em><br />comes to your table.
                    </h1>
                    <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(250,245,240,0.6)', marginBottom: '36px' }}>
                        Authentic Italian cuisine crafted with imported ingredients, aged wines, and decades of tradition.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <button style={{ background: '#C25A29', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '6px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>Book for Tonight</button>
                        <button style={{ background: 'transparent', color: 'rgba(250,245,240,0.7)', border: '1px solid rgba(250,245,240,0.25)', padding: '14px 28px', borderRadius: '6px', fontSize: '14px', cursor: 'pointer' }}>View Menu</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '48px', flexWrap: 'wrap' }}>
                        {[[Clock, 'Tue–Sun, 7pm–11pm'], [MapPin, 'Juhu, Mumbai'], [Star, '4.9 on Dineout']].map(([InfoIcon, text]) => (
                            <p key={text} style={{ fontSize: '13px', color: 'rgba(250,245,240,0.4)', margin: 0, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <InfoIcon size={12} />{text}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ornament */}
            <div style={{ textAlign: 'center', padding: '20px', color: '#C25A29', letterSpacing: '14px', borderBottom: '1px solid rgba(61,29,12,0.08)' }}>· · ✦ · ·</div>

            {/* Menu */}
            <section style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '12px' }}>À La Carte</p>
                    <h2 style={{ fontFamily: "'Lora', serif", fontSize: '38px', fontWeight: 600, margin: 0 }}>Tonight's Menu</h2>
                </div>
                {dishes.map(({ name, desc, price, tag }, i) => (
                    <div key={name} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start', padding: '28px 0', borderBottom: i < dishes.length - 1 ? '1px solid rgba(61,29,12,0.08)' : 'none' }}>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '6px' }}>{tag}</p>
                            <p style={{ fontFamily: "'Lora', serif", fontSize: '20px', fontWeight: 600, color: '#3D1D0C', marginBottom: '8px' }}>{name}</p>
                            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(61,29,12,0.5)', margin: 0, maxWidth: '500px' }}>{desc}</p>
                        </div>
                        <p style={{ fontFamily: "'Lora', serif", fontSize: '22px', fontWeight: 600, color: '#3D1D0C', flexShrink: 0, margin: 0 }}>{price}</p>
                    </div>
                ))}
            </section>

            {/* Chef section */}
            <section style={{ background: '#3D1D0C', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
                    <div style={{ width: '110px', height: '110px', borderRadius: '50%', background: '#C25A29', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <ChefHat size={52} color="#fff" />
                    </div>
                    <div style={{ flex: 1, minWidth: '260px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '10px' }}>Executive Chef</p>
                        <h3 style={{ fontFamily: "'Lora', serif", fontSize: '28px', color: '#FAF5F0', margin: '0 0 12px' }}>Lorenzo Ferretti</h3>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(250,245,240,0.5)', margin: '0 0 20px', maxWidth: '460px' }}>
                            Trained in Bologna and Naples, Chef Ferretti brings 22 years of classical technique to every dish. He sources ingredients directly from Italian farms and local Mumbai markets.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                            {[['22+', 'Years'], ['3', 'Michelin Stars'], ['8', 'Restaurants']].map(([v, l]) => (
                                <div key={l}>
                                    <p style={{ fontFamily: "'Lora', serif", fontSize: '24px', color: '#C25A29', margin: 0 }}>{v}</p>
                                    <p style={{ fontSize: '11px', color: 'rgba(250,245,240,0.35)', marginTop: '2px' }}>{l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: "'Lora', serif", fontSize: '36px', fontWeight: 600, marginBottom: '12px' }}>Reserve your experience</h2>
                <p style={{ fontSize: '15px', color: 'rgba(61,29,12,0.5)', marginBottom: '32px' }}>Intimate seating, impeccable service. Reservations recommended.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <button style={{ background: '#C25A29', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '6px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>Book Online</button>
                    <button style={{ background: '#fff', color: '#3D1D0C', border: '1.5px solid rgba(61,29,12,0.2)', padding: '14px 28px', borderRadius: '6px', fontSize: '14px', cursor: 'pointer' }}>+91 98765 43210</button>
                </div>
            </section>

            <div style={{ textAlign: 'center', padding: '20px', color: '#C25A29', letterSpacing: '14px', borderBottom: '1px solid rgba(61,29,12,0.08)' }}>· · ✦ · ·</div>

            {/* Ambiance Gallery */}
            <section style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '12px' }}>The Space</p>
                    <h2 style={{ fontFamily: "'Lora', serif", fontSize: '34px', fontWeight: 600, margin: 0 }}>Atmosphere & Ambiance</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridTemplateRows: '200px 200px', gap: '12px' }}>
                    {[
                        { label: 'Main Dining Room', bg: '#6B3520', rowSpan: 'span 2' },
                        { label: 'Antipasto Bar', bg: '#7A4230', rowSpan: undefined },
                        { label: 'Private Terrace', bg: '#543018', rowSpan: undefined },
                        { label: 'Wine Cellar', bg: '#3D1D0C', rowSpan: undefined },
                        { label: 'Chef\'s Counter', bg: '#8A4D35', rowSpan: undefined },
                    ].map(({ label, bg, rowSpan }) => (
                        <div key={label} style={{ background: bg, borderRadius: '10px', display: 'flex', alignItems: 'flex-end', padding: '16px', gridRow: rowSpan }}>
                            <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(250,245,240,0.6)', letterSpacing: '1px', textTransform: 'uppercase' }}>{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Wine & Drinks */}
            <section style={{ background: '#3D1D0C', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '12px' }}>Cantina</p>
                        <h2 style={{ fontFamily: "'Lora', serif", fontSize: '34px', fontWeight: 600, color: '#FAF5F0', margin: 0 }}>Wines & Cocktails</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                        {[
                            { category: 'Wines by Glass', items: ['Brunello di Montalcino · ₹1,200', 'Barolo Riserva · ₹1,400', 'Pinot Grigio · ₹900', 'Prosecco DOC · ₹850'] },
                            { category: 'Signature Cocktails', items: ['Negroni della Valle · ₹780', 'Limoncello Spritz · ₹720', 'Campari Sour · ₹760', 'Aperol Lungo · ₹680'] },
                            { category: 'Non-Alcoholic', items: ['San Pellegrino · ₹180', 'Acqua Panna · ₹180', 'Italian Sodas · ₹220', 'Specialty Coffee · ₹280'] },
                        ].map(({ category, items }) => (
                            <div key={category}>
                                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '16px' }}>{category}</p>
                                {items.map(item => (
                                    <p key={item} style={{ fontFamily: "'Lora', serif", fontSize: '14px', color: 'rgba(250,245,240,0.55)', margin: '0 0 10px', borderBottom: '1px solid rgba(250,245,240,0.06)', paddingBottom: '10px' }}>{item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guest Reviews */}
            <section style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(40px, 6vw, 64px) 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#C25A29', marginBottom: '12px' }}>Guest Reviews</p>
                    <h2 style={{ fontFamily: "'Lora', serif", fontSize: '34px', fontWeight: 600, margin: 0 }}>What our guests say</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {[
                        { name: 'Priya & Arjun', occasion: 'Anniversary Dinner', review: 'An absolutely magical evening. Chef Ferretti came to our table and the food was beyond description — each course better than the last. The truffle risotto alone is worth the trip.' },
                        { name: 'Vikram Singhania', occasion: 'Business Dinner', review: 'I\'ve dined at Michelin-starred restaurants across Europe and Trattoria della Valle belongs in that company. The branzino was perfect and the sommelier\'s pairings were inspired.' },
                        { name: 'Meera Chandrasekhar', occasion: 'Birthday Celebration', review: 'The private terrace setting was stunning. Staff remembered my partner\'s wine preference from a previous visit. This is what hospitality should feel like.' },
                    ].map(({ name, occasion, review }) => (
                        <div key={name} style={{ borderBottom: '1px solid rgba(61,29,12,0.08)', paddingBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#C25A29', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: '#fff', flexShrink: 0, fontFamily: "'Lora', serif" }}>{name[0]}</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                    <p style={{ fontFamily: "'Lora', serif", fontSize: '16px', fontWeight: 600, color: '#3D1D0C', margin: 0 }}>{name}</p>
                                    <p style={{ fontSize: '11px', color: '#C25A29', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{occasion}</p>
                                </div>
                                <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(61,29,12,0.55)', margin: 0, fontStyle: 'italic' }}>"{review}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer style={{ padding: '24px', textAlign: 'center', fontSize: '12px', color: 'rgba(61,29,12,0.35)', borderTop: '1px solid rgba(61,29,12,0.08)' }}>
                © 2026 Trattoria della Valle · All rights reserved
            </footer>
        </div>
    );
}

