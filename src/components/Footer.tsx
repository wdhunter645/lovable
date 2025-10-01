const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-accent mb-4">42</div>
          <h3 className="text-2xl font-bold">Jackie Robinson Fan Club</h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Honoring the legacy of a true American hero who changed baseball and inspired a nation
          </p>
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Jackie Robinson Fan Club. Celebrating a legend, inspiring future generations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
