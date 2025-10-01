import { Card, CardContent } from "@/components/ui/card";
import { Trophy, TrendingUp, Award, Star } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    label: "World Series Champion",
    value: "1955",
    description: "Brooklyn Dodgers"
  },
  {
    icon: Award,
    label: "Rookie of the Year",
    value: "1947",
    description: "First recipient"
  },
  {
    icon: Star,
    label: "All-Star Games",
    value: "6x",
    description: "1949-1954"
  },
  {
    icon: TrendingUp,
    label: "Career Batting Avg",
    value: ".311",
    description: "10 seasons"
  }
];

const BaseballCareer = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Baseball Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A ten-year career with the Brooklyn Dodgers that revolutionized the game
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-2 hover:border-accent transition-colors hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border-2 border-border">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-card-foreground leading-relaxed">
            <p>
              On <span className="font-bold text-primary">April 15, 1947</span>, Jackie Robinson broke baseball's color barrier 
              when he stepped onto Ebbets Field as the first African American to play in Major League Baseball in the modern era.
            </p>
            <p>
              Playing for the <span className="font-bold text-primary">Brooklyn Dodgers</span>, Robinson faced immense pressure 
              and hostility, yet responded with grace, determination, and exceptional play. His courage opened doors not just 
              in baseball, but across American society.
            </p>
            <p>
              Robinson's impact extended far beyond his impressive statistics. He was named <span className="font-bold text-accent">National League MVP in 1949</span>, 
              led the Dodgers to six pennants and a World Series championship in 1955, and was inducted into the 
              Baseball Hall of Fame in 1962.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseballCareer;
