import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import EcommerceBanner from './components/EcommerceBanner';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import NotFound from './components/NotFound';

// Shared layout wrapper
function Layout({ children }) {
    return (
        <div className="min-h-screen bg-bg text-[#1C1814]">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

// Individual pages
const HomePage    = () => <Layout><Hero /><About /><Services /><Stats /><EcommerceBanner /><Clients /><Contact /></Layout>;
const AboutPage   = () => <Layout><About /></Layout>;
const ServicesPage = () => <Layout><Services /></Layout>;
const StatsPage   = () => <Layout><Stats /></Layout>;
const EcommercePage = () => <Layout><EcommerceBanner /></Layout>;
const ClientsPage = () => <Layout><Clients /></Layout>;
const ContactPage = () => <Layout><Contact /></Layout>;

export default function App() {
    const [loading, setLoading] = useState(true);
    const handleComplete = useCallback(() => setLoading(false), []);

    return (
        <>
            <AnimatePresence>
                {loading && <Loader onComplete={handleComplete} />}
            </AnimatePresence>
            {!loading && (
                <Routes>
                    <Route path="/"          element={<HomePage />} />
                    <Route path="/about"     element={<AboutPage />} />
                    <Route path="/services"  element={<ServicesPage />} />
                    <Route path="/stats"     element={<StatsPage />} />
                    <Route path="/ecommerce" element={<EcommercePage />} />
                    <Route path="/clients"   element={<ClientsPage />} />
                    <Route path="/contact"   element={<ContactPage />} />
                    <Route path="*"          element={<NotFound />} />
                </Routes>
            )}
        </>
    );
}
