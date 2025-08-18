import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Research from './components/sections/Research';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling polyfill for better browser support
    if (typeof window !== 'undefined') {
      const smoothScroll = (target: Element) => {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start: number | null = null;

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t: number, b: number, c: number, d: number) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
      };

      // Handle smooth scrolling for hash links
      const handleHashLinks = () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            setTimeout(() => smoothScroll(element), 100);
          }
        }
      };

      // Handle initial load
      handleHashLinks();

      // Handle hash changes
      window.addEventListener('hashchange', handleHashLinks);

      return () => {
        window.removeEventListener('hashchange', handleHashLinks);
      };
    }
  }, []);

  // Home page component with all sections
  const HomePage: React.FC = () => (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Research />
      <Contact />
    </>
  );

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
