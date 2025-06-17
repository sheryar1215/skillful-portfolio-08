
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ManualThemeCustomizer from '@/components/ManualThemeCustomizer';
import { useLanguage } from '@/hooks/useLanguage';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ArrowUp, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { currentLanguage, isTranslating } = useLanguage();

  useEffect(() => {
    // SEO: Set title and meta description
    document.title = "Sheryar Khan - Full Stack Developer & Computer Science Graduate";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    // Set meta description content
    metaDescription.setAttribute('content', 
      'Full Stack Developer with expertise in MERN stack, PHP, Laravel, and more. Computer Science graduate from the University of Peshawar specializing in responsive web applications.'
    );
    
    // Create or update Open Graph tags
    const updateOpenGraphTag = (property, content) => {
      let tag = document.querySelector(`meta[property="og:${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', `og:${property}`);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    updateOpenGraphTag('title', 'Sheryar Khan - Full Stack Developer');
    updateOpenGraphTag('description', 'Portfolio showcasing web development projects and skills');
    updateOpenGraphTag('type', 'website');
    updateOpenGraphTag('url', window.location.href);
    
    // Fix hash link navigation by manually handling it
    const handleScrollToSection = (hash: string) => {
      if (!hash) return;
      
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        setTimeout(() => {
          window.scrollTo({
            top: elementPosition - navbarHeight - 20,
            behavior: 'smooth'
          });
        }, 100);
      }
    };

    // Handle initial hash if present on page load
    if (window.location.hash) {
      handleScrollToSection(window.location.hash);
    }

    // Add event listener for hash changes
    const handleHashChange = () => {
      handleScrollToSection(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);

    // Setup animations for scrolling elements
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

    // Apply staggered animations to mobile menu items
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
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Show toast when language changes
  useEffect(() => {
    if (currentLanguage !== 'en') {
      toast({
        title: "Language Changed",
        description: `The content is now being translated to ${
          currentLanguage === 'fr' ? 'French' : 
          currentLanguage === 'de' ? 'German' : 
          currentLanguage === 'ps' ? 'Pashto' : 
          currentLanguage === 'es' ? 'Spanish' : 'the selected language'
        }.`,
        duration: 3000,
      });
    }
  }, [currentLanguage]);

  // Function to handle scrolling to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero profileImage="/lovable-uploads/ae2bbb29-4f54-44a5-b7e2-84be873b79b4.png" />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ManualThemeCustomizer />
      
      {/* Home button for easy navigation */}
      <Button
        asChild
        className="fixed top-20 right-4 p-2 rounded-full shadow-lg hover:bg-primary/90 transition-transform hover:scale-110 z-40"
        size="icon"
        variant="default"
        aria-label="Home"
      >
        <Link to="/">
          <HomeIcon className="h-5 w-5" />
        </Link>
      </Button>
      
      {/* Loading indicator for translations */}
      {isTranslating && (
        <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground py-2 px-4 rounded-md shadow-md animate-pulse z-40">
          Translating...
        </div>
      )}
      
      {/* Scroll to top button */}
      <Button 
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 p-2 rounded-full shadow-lg hover:bg-primary/90 transition-transform hover:scale-110 z-40"
        variant="default"
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </main>
  );
};

export default Index;
