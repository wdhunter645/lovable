import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "I'm not concerned with your liking or disliking me... All I ask is that you respect me as a human being.",
    context: "On facing discrimination"
  },
  {
    text: "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
    context: "On taking action"
  },
  {
    text: "There's not an American in this country free until every one of us is free.",
    context: "On equality and justice"
  },
  {
    text: "I had to fight hard against loneliness, abuse, and the knowledge that any mistake I made would be magnified because I was the only black man out there.",
    context: "On breaking the color barrier"
  }
];

const Quotes = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Words of Wisdom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful quotes that reveal the character and conviction of Jackie Robinson
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-accent/30 mb-4" />
                <blockquote className="text-lg text-foreground leading-relaxed mb-4 italic">
                  "{quote.text}"
                </blockquote>
                <p className="text-sm text-muted-foreground font-medium">
                  {quote.context}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
