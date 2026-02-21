import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    // Load Unicorn Studio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }

    // Handle scroll for indicator visibility
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowScrollIndicator(scrollPercent < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Unicorn Studio Animation */}
      <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center">
        <div 
          data-us-project="y5T0wP2VeCGKfyA0aNYH" 
          style={{ width: '100%', height: '100%', maxWidth: '1440px', maxHeight: '900px' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="animate-fade-in-slow">
          <h1 
            className="text-7xl md:text-9xl font-bold leading-none md:leading-tight tracking-tight text-white"
            style={{ marginBottom: '0px' }}
          >
            Kyle Coffelt
          </h1>
          <p 
            className="text-xl md:text-2xl text-white mb-12 max-w-2xl font-light tracking-wide md:mt-0"
            style={{ marginTop: '4px' }}
          >
            Marketing Manger
          </p>
        </div>

      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white animate-pulse" />
        </div>
      )}
    </section>
  );
};

export default Hero;
