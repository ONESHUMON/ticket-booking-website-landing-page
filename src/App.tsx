import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { Features } from './components/Features';
import { TrendingEvents } from './components/TrendingEvents';
import { PopularEvents } from './components/PopularEvents';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CategorySection />
      <Features />
      <TrendingEvents />
      <PopularEvents />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;