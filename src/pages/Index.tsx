import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
      
      {/* Bottom blur fade effect */}
      <div className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none z-10" 
           style={{
             background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 15%, hsl(var(--background) / 0.75) 30%, hsl(var(--background) / 0.5) 45%, hsl(var(--background) / 0.25) 65%, hsl(var(--background) / 0.1) 80%, transparent 100%)',
             backdropFilter: 'blur(16px)',
             WebkitBackdropFilter: 'blur(16px)',
             maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
           }} 
      />
    </div>
  );
};

export default Index;
