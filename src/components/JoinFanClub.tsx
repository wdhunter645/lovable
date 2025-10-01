import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, Heart } from "lucide-react";

const JoinFanClub = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
            <Heart className="w-10 h-10 text-accent-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Fan Club
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Connect with fellow admirers, share stories, and keep Jackie Robinson's legacy alive
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <Mail className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Monthly Newsletter</h3>
              <p className="text-primary-foreground/80">
                Exclusive stories, historical insights, and updates about Jackie Robinson's enduring impact
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-primary-foreground/80">
                Join commemorations, discussions, and educational programs celebrating his legacy
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
              <p className="text-primary-foreground/80">
                Access rare photos, videos, and articles about Jackie Robinson's life and impact
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-primary-foreground text-card-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Become a Member Today
              </h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="h-12"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Join the Fan Club
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  By joining, you're helping preserve and promote Jackie Robinson's legacy for future generations
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinFanClub;
