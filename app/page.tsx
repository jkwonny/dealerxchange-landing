import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fcfb] text-black">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
