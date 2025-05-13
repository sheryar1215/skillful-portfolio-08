
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Implement any initialization logic or analytics here
    document.title = "Sheryar Khan - Computer Science Graduate & Full-Stack Developer";

    // Add animation classes to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Apply animation to mobile menu items
    const applyMobileAnimations = () => {
      const menuItems = document.querySelectorAll('.animate-in');
      menuItems.forEach((item, index) => {
        (item as HTMLElement).style.transitionDelay = `${index * 0.05}s`;
      });
    };
    
    applyMobileAnimations();
    window.addEventListener('resize', applyMobileAnimations);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', applyMobileAnimations);
    };
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
