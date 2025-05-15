
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

    // Apply animation to mobile menu items with staggered delay
    const applyMobileAnimations = () => {
      const menuItems = document.querySelectorAll('.animate-in');
      menuItems.forEach((item, index) => {
        (item as HTMLElement).style.transitionDelay = `${index * 0.05}s`;
      });
      
      // Add staggered animations to mobile buttons
      const mobileNavButtons = document.querySelectorAll('nav button');
      mobileNavButtons.forEach((button, index) => {
        (button as HTMLElement).style.animationDelay = `${index * 0.1}s`;
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
      <Navbar /> {/* Now this works without the name prop */}
      <Hero profileImage="/lovable-uploads/ae2bbb29-4f54-44a5-b7e2-84be873b79b4.png" />
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
