import { Button } from "@/components/ui/button";
import heroImage from "@/assets/jackie-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block bg-accent/20 backdrop-blur-sm px-6 py-2 rounded-full border border-accent/30">
            <p className="text-accent text-sm font-semibold tracking-wide">EST. 1947 • FOREVER 42</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight">
            Jackie Robinson
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light italic max-w-3xl mx-auto">
            The Man Who Changed Baseball and America
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Breaking barriers, inspiring generations, and proving that courage and talent know no color. 
            Celebrating the legacy of a true American hero.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg">
              Join the Fan Club
            </Button>
            <Button variant="legacy" size="lg">
              Explore His Legacy
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-primary-foreground/60" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
