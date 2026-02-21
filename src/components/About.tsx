const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-16 font-light">
          About
        </h2>

        <div className="max-w-4xl">
          <p className="text-3xl md:text-5xl font-light leading-relaxed text-foreground/90 mb-8">
            I'm a self-taught graphic designer with a Bachelor's degree in marketing and 
            5 years of experience in the field. I blend creative design with strategic 
            marketing thinking to create work that not only looks great, but drives results.
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
