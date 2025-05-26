import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { Loader } from './components/Loader';
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="w-full">
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <AboutSection />
          <TeamSection />
          <ReviewsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}