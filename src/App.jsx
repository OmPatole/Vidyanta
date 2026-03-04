import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}
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
import Explore from './components/Explore';
// import Pricing from './components/Pricing';
import CorporateTemplate from './components/templates/CorporateTemplate';
import EcommerceTemplate from './components/templates/EcommerceTemplate';
import PortfolioTemplate from './components/templates/PortfolioTemplate';
import SaasTemplate from './components/templates/SaasTemplate';
import FoodTemplate from './components/templates/FoodTemplate';
import RealEstateTemplate from './components/templates/RealEstateTemplate';
import HealthcareTemplate from './components/templates/HealthcareTemplate';
import EducationTemplate from './components/templates/EducationTemplate';
import TemplateViewer from './components/templates/TemplateViewer';

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
const ContactPage  = () => <Layout><Contact /></Layout>;
const ExplorePage  = () => <Layout><Explore /></Layout>;
// const PricingPage  = () => <Layout><Pricing /></Layout>;

// Standalone template previews (wrapped in TemplateViewer)
const TemplatePages = {
    corporate:   () => <TemplateViewer templateName="Corporate / Business"><CorporateTemplate /></TemplateViewer>,
    ecommerce:   () => <TemplateViewer templateName="E-Commerce"><EcommerceTemplate /></TemplateViewer>,
    portfolio:   () => <TemplateViewer templateName="Portfolio / Creative"><PortfolioTemplate /></TemplateViewer>,
    saas:        () => <TemplateViewer templateName="SaaS / Product"><SaasTemplate /></TemplateViewer>,
    food:        () => <TemplateViewer templateName="Restaurant / Food"><FoodTemplate /></TemplateViewer>,
    realestate:  () => <TemplateViewer templateName="Real Estate"><RealEstateTemplate /></TemplateViewer>,
    healthcare:  () => <TemplateViewer templateName="Healthcare / Medical"><HealthcareTemplate /></TemplateViewer>,
    education:   () => <TemplateViewer templateName="Education / Course"><EducationTemplate /></TemplateViewer>,
};

export default function App() {
    const [loading, setLoading] = useState(true);
    const handleComplete = useCallback(() => setLoading(false), []);

    return (
        <>
            <AnimatePresence>
                {loading && <Loader onComplete={handleComplete} />}
            </AnimatePresence>
            {!loading && (
                <>
                <ScrollToTop />
                <Routes>
                    <Route path="/"          element={<HomePage />} />
                    <Route path="/about"     element={<AboutPage />} />
                    <Route path="/services"  element={<ServicesPage />} />
                    <Route path="/stats"     element={<StatsPage />} />
                    <Route path="/ecommerce" element={<EcommercePage />} />
                    <Route path="/clients"   element={<ClientsPage />} />
                    <Route path="/contact"   element={<ContactPage />} />
                    <Route path="/explore"   element={<ExplorePage />} />
                    {/* <Route path="/pricing"   element={<PricingPage />} /> */}
                    {/* Template previews */}
                    <Route path="/templates/corporate"  element={<TemplatePages.corporate />} />
                    <Route path="/templates/ecommerce"  element={<TemplatePages.ecommerce />} />
                    <Route path="/templates/portfolio"  element={<TemplatePages.portfolio />} />
                    <Route path="/templates/saas"       element={<TemplatePages.saas />} />
                    <Route path="/templates/food"       element={<TemplatePages.food />} />
                    <Route path="/templates/realestate" element={<TemplatePages.realestate />} />
                    <Route path="/templates/healthcare" element={<TemplatePages.healthcare />} />
                    <Route path="/templates/education"  element={<TemplatePages.education />} />
                    <Route path="*"          element={<NotFound />} />
                </Routes>
                </>
            )}
        </>
    );
}
