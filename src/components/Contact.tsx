import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    { icon: Mail, href: "mailto:krcoffelt@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kyle-coffelt-6bb10b57/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-16 font-light">
          Contact
        </h2>

        <div className="space-y-1">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-center justify-between py-6 border-t border-border last:border-b hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-6">
                <link.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-2xl md:text-4xl font-light tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.label}
                </span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:translate-x-2 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
