import { useState } from 'react';
import FontLoader from './FontLoader';
import { Menu, X, ShoppingCart, Search, Heart, Star, Truck, Shield, RotateCcw, ArrowRight, Headphones, Clock, Coffee, ShoppingBag } from 'lucide-react';
import useIsMobile from './useIsMobile';

/* ─── Clean white/orange e-commerce theme ─── */
/* Font: Nunito — friendly, rounded, commerce feel */

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap';
const font = "'Nunito', system-ui, sans-serif";
const orange = '#EA580C';
const dark   = '#1C1917';
const gray   = '#F5F5F4';
const muted  = '#78716C';

const products = [
    { name: 'Wireless Noise-Cancelling Headphones', price: '₹4,999', was: '₹7,999', rating: 4.8, reviews: 2140, Icon: Headphones, badge: 'Sale', badgeBg: orange },
    { name: 'Slim Leather Watch — Sand', price: '₹8,299', was: '₹11,500', rating: 4.9, reviews: 870, Icon: Clock, badge: 'Bestseller', badgeBg: '#16A34A' },
    { name: 'Portable Espresso Maker', price: '₹3,499', was: '₹4,999', rating: 4.7, reviews: 540, Icon: Coffee, badge: 'New', badgeBg: '#2563EB' },
    { name: 'Linen Tote Bag — Natural', price: '₹1,299', was: null, rating: 4.6, reviews: 398, Icon: ShoppingBag, badge: null, badgeBg: null },
];

function Stars({ n }) {
    return (
        <span style={{ display: 'inline-flex', gap: 1 }}>
            {[1,2,3,4,5].map(i => (
                <Star key={i} size={11} fill={i <= Math.round(n) ? orange : '#E7E5E4'} style={{ color: i <= Math.round(n) ? orange : '#E7E5E4' }} />
            ))}
        </span>
    );
}

export default function EcommerceTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [wish, setWish] = useState({});
    const isMobile = useIsMobile();
    return (
        <div style={{ fontFamily: font, background: '#fff', color: dark, minHeight: '100%' }}>
            <FontLoader href={FONT_URL} />

            {/* Offer bar */}
            <div style={{ background: orange, color: '#fff', fontSize: 12, fontWeight: 700, textAlign: 'center', padding: '8px 0', letterSpacing: '0.04em' }}>
                FREE DELIVERY on orders over ₹499 &nbsp;|&nbsp; 10-day hassle-free returns
            </div>

            {/* Navbar */}
            <header style={{ borderBottom: '1px solid #E7E5E4', background: '#fff' }}>
                <div style={{ maxWidth: 1140, margin: '0 auto', padding: '16px 24px', minHeight: 64, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
                    <span style={{ fontSize: 22, fontWeight: 900, color: dark, letterSpacing: '-0.03em', flexShrink: 0 }}>
                        Zap<span style={{ color: orange }}>Mart</span>
                    </span>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#A8A29E' }} />
                        <input readOnly placeholder="Search products…" style={{ width: '100%', paddingLeft: 36, paddingRight: 12, height: 40, borderRadius: 8, border: '1.5px solid #E7E5E4', fontSize: 13, outline: 'none', background: gray, color: dark, boxSizing: 'border-box' }} />
                    </div>
                    {!isMobile && (
                        <nav style={{ gap: 28, fontSize: 13, fontWeight: 600, color: muted, display: 'flex' }}>
                            {['Men', 'Women', 'Tech', 'Home'].map(n => <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>)}
                        </nav>
                    )}
                    {!isMobile && (
                        <button style={{ background: orange, color: '#fff', fontSize: 13, fontWeight: 700, padding: '9px 18px', borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7 }}>
                            <ShoppingCart size={15} /> Cart (3)
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
                            {['Men', 'Women', 'Tech', 'Home'].map(n => <a key={n} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{n}</a>)}
                        </nav>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 16 }}>
                            <button style={{ background: orange, color: '#fff', fontSize: 13, fontWeight: 700, padding: '9px 18px', borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, width: 'min(240px, 90vw)', justifyContent: 'center' }}>
                                <ShoppingCart size={15} /> Cart (3)
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ background: gray, padding: '0 24px' }}>
                <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, minHeight: 380, flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 280 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: orange, background: '#FFF7ED', padding: '4px 10px', borderRadius: 20 }}>New Season Arrivals</span>
                        <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.08, marginTop: 16, marginBottom: 16, color: dark }}>
                            Style that<br /><span style={{ color: orange }}>moves you.</span>
                        </h1>
                        <p style={{ fontSize: 16, color: muted, lineHeight: 1.65, marginBottom: 28, maxWidth: 400 }}>
                            Curated products that blend quality and everyday functionality — delivered fast and priced honestly.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                            <button style={{ background: orange, color: '#fff', fontSize: 14, fontWeight: 700, padding: '12px 28px', borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                                Shop Now <ArrowRight size={15} />
                            </button>
                            <button style={{ background: '#fff', color: dark, fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 8, border: '1.5px solid #E7E5E4', cursor: 'pointer' }}>
                                View Sale
                            </button>
                        </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 200, display: 'flex', justifyContent: 'flex-end' }}>
                        <div style={{ width: 240, height: 240, borderRadius: 20, background: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShoppingBag size={80} style={{ color: orange }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust bar */}
            <div style={{ borderTop: '1px solid #E7E5E4', borderBottom: '1px solid #E7E5E4' }}>
                <div style={{ maxWidth: 1140, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'center', gap: 40, fontSize: 12, fontWeight: 700, color: muted, flexWrap: 'wrap' }}>
                    {[[Truck,'Free delivery above ₹499'],[Shield,'Secure payments'],[RotateCcw,'10-day easy returns'],[Star,'4.9★ · 50,000+ reviews']].map(([Icon,txt]) => (
                        <span key={txt} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                            <Icon size={14} style={{ color: orange }} /> {txt}
                        </span>
                    ))}
                </div>
            </div>

            {/* Products */}
            <section style={{ maxWidth: 1140, margin: '0 auto', padding: '56px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', marginBottom: 32 }}>
                    <h2 style={{ fontSize: 26, fontWeight: 800, color: dark }}>Featured Products</h2>
                    <button style={{ fontSize: 13, color: orange, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                        View all <ArrowRight size={13} />
                    </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
                    {products.map(({ name, price, was, rating, reviews, Icon, badge, badgeBg }) => (
                        <div key={name} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E7E5E4', background: '#fff' }}>
                            <div style={{ height: 200, background: gray, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Icon size={64} style={{ color: badgeBg || muted }} />
                                {badge && <span style={{ position: 'absolute', top: 12, left: 12, background: badgeBg, color: '#fff', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 20 }}>{badge}</span>}
                                <button
                                    onClick={() => setWish(w => ({ ...w, [name]: !w[name] }))}
                                    style={{ position: 'absolute', top: 10, right: 10, background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                >
                                    <Heart size={15} fill={wish[name] ? '#EF4444' : 'none'} style={{ color: wish[name] ? '#EF4444' : muted }} />
                                </button>
                            </div>
                            <div style={{ padding: '16px' }}>
                                <p style={{ fontSize: 14, fontWeight: 700, color: dark, marginBottom: 6, lineHeight: 1.35 }}>{name}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                                    <Stars n={rating} />
                                    <span style={{ fontSize: 11, color: muted }}>({reviews})</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                                    <span style={{ fontSize: 17, fontWeight: 800, color: dark }}>{price}</span>
                                    {was && <span style={{ fontSize: 12, color: muted, textDecoration: 'line-through' }}>{was}</span>}
                                </div>
                                <button style={{ width: '100%', background: dark, color: '#fff', fontSize: 13, fontWeight: 700, padding: '10px 0', borderRadius: 7, border: 'none', cursor: 'pointer' }}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section style={{ background: dark, padding: '56px 24px', textAlign: 'center' }}>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Get 10% off your first order</h2>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 24 }}>Join 100,000+ subscribers for exclusive deals and early access.</p>
                <div style={{ display: 'flex', maxWidth: 400, margin: '0 auto', gap: 8 }}>
                    <input readOnly placeholder="Your email address" style={{ flex: 1, padding: '11px 14px', borderRadius: 8, border: 'none', fontSize: 13, background: 'rgba(255,255,255,0.08)', color: '#fff', outline: 'none' }} />
                    <button style={{ background: orange, color: '#fff', fontSize: 13, fontWeight: 700, padding: '11px 20px', borderRadius: 8, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>Subscribe</button>
                </div>
            </section>

            {/* Categories */}
            <section style={{ maxWidth: 1140, margin: '0 auto', padding: '56px 24px' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: dark, marginBottom: 28 }}>Shop by Category</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 14 }}>
                    {[
                        { label: 'Electronics', count: '240+', bg: '#FFF7ED' },
                        { label: 'Fashion', count: '580+', bg: '#F0FDF4' },
                        { label: 'Home & Kitchen', count: '310+', bg: '#EFF6FF' },
                        { label: 'Sports', count: '190+', bg: '#FDF4FF' },
                        { label: 'Beauty', count: '420+', bg: '#FFF1F2' },
                        { label: 'Books', count: '1,200+', bg: '#FFFBEB' },
                    ].map(({ label, count, bg }) => (
                        <div key={label} style={{ background: bg, borderRadius: 12, padding: '20px 16px', cursor: 'pointer', border: '1px solid #E7E5E4', textAlign: 'center', transition: 'transform 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <p style={{ fontSize: 14, fontWeight: 800, color: dark, margin: '0 0 4px' }}>{label}</p>
                            <p style={{ fontSize: 11, color: muted, margin: 0 }}>{count} items</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Flash Sale Banner */}
            <section style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px 56px' }}>
                <div style={{ borderRadius: 16, background: `linear-gradient(120deg, ${dark} 0%, #292524 100%)`, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', gap: 24 }}>
                    <div>
                        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: orange, margin: '0 0 8px' }}>Limited Time Deal</p>
                        <h3 style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: '0 0 8px' }}>Up to <span style={{ color: orange }}>50% off</span> on Tech</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Today only — over 120 products on sale right now.</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                        {[['08', 'Hrs'], ['34', 'Min'], ['17', 'Sec']].map(([v, l]) => (
                            <div key={l} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '12px 18px', textAlign: 'center', minWidth: 60 }}>
                                <p style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1 }}>{v}</p>
                                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', margin: '4px 0 0', textTransform: 'uppercase' }}>{l}</p>
                            </div>
                        ))}
                        <button style={{ background: orange, color: '#fff', fontSize: 14, fontWeight: 700, padding: '14px 28px', borderRadius: 10, border: 'none', cursor: 'pointer', marginLeft: 8 }}>Shop Sale →</button>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section style={{ background: gray, padding: '56px 24px' }}>
                <div style={{ maxWidth: 1140, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', marginBottom: 32 }}>
                        <h2 style={{ fontSize: 22, fontWeight: 800, color: dark }}>What customers say</h2>
                        <span style={{ fontSize: 13, color: muted }}>4.9 avg · 50,000+ reviews</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        {[
                            { name: 'Meera S.', item: 'Headphones', review: 'Absolutely love these! The noise cancellation is incredible — I use them every day for work and travel. Worth every rupee.', rating: 5 },
                            { name: 'Ashwin K.', item: 'Leather Watch', review: 'Elegant and understated. Exactly what I wanted. The strap quality is premium and the packaging was beautiful.', rating: 5 },
                            { name: 'Tanya R.', item: 'Espresso Maker', review: 'Made my morning coffee ritual so much better. Compact, easy to use, and makes barista-quality espresso anywhere.', rating: 4 },
                        ].map(({ name, item, review, rating }) => (
                            <div key={name} style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #E7E5E4' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 10 }}>
                                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill={i <= rating ? orange : '#E7E5E4'} style={{ color: i <= rating ? orange : '#E7E5E4' }} />)}
                                </div>
                                <p style={{ fontSize: 13, lineHeight: 1.65, color: dark, margin: '0 0 14px', fontStyle: 'italic' }}>"{review}"</p>
                                <p style={{ fontSize: 12, fontWeight: 700, color: dark, margin: '0 0 2px' }}>{name}</p>
                                <p style={{ fontSize: 11, color: orange, margin: 0 }}>Verified purchase · {item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer style={{ background: '#0C0A09', padding: '24px', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                © 2026 ZapMart · All rights reserved
            </footer>
        </div>
    );
}


