const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Kyle Coffelt
          </p>
          <p className="text-sm text-muted-foreground font-light">
            Website by Hometown Marketing Agency{" "}
            <a
              href="https://hometownkc.agency"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              hometownkc.agency
            </a>
          </p>
          <p className="text-sm text-muted-foreground font-light">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
