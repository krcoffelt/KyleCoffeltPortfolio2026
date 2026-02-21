const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-16 font-light">
          About
        </h2>

        <div className="max-w-4xl">
          <p className="text-3xl md:text-5xl font-light leading-relaxed text-foreground/90 mb-8">
            I am a marketing manager and web specialist with 5+ years of experience building
            fast, modern websites and growth-focused marketing that converts. I combine design,
            SEO, and analytics to turn traffic into customers and keep brands consistent across
            web, email, and social.
          </p>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Based in Kansas City. Available for select projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
