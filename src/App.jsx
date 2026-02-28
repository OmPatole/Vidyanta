import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import EcommerceBanner from './components/EcommerceBanner';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-bg text-[#1C1814]">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Stats />
                <EcommerceBanner />
                <Clients />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
