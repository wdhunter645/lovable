import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "1919",
    title: "Born in Cairo, Georgia",
    description: "Jackie Roosevelt Robinson was born on January 31, 1919, the youngest of five children."
  },
  {
    year: "1942-1944",
    title: "Military Service",
    description: "Served as a second lieutenant in the United States Army during World War II."
  },
  {
    year: "1945",
    title: "Negro Leagues",
    description: "Played for the Kansas City Monarchs in the Negro American League."
  },
  {
    year: "1947",
    title: "Breaking the Color Barrier",
    description: "Made his MLB debut with the Brooklyn Dodgers on April 15, breaking baseball's color line."
  },
  {
    year: "1949",
    title: "National League MVP",
    description: "Won the NL MVP Award, batting .342 with 16 home runs and leading the league in stolen bases."
  },
  {
    year: "1955",
    title: "World Series Champion",
    description: "Helped the Brooklyn Dodgers win their first and only World Series championship."
  },
  {
    year: "1957",
    title: "Retirement",
    description: "Retired from baseball to pursue business opportunities and civil rights activism."
  },
  {
    year: "1962",
    title: "Hall of Fame",
    description: "Inducted into the Baseball Hall of Fame in his first year of eligibility."
  },
  {
    year: "1972",
    title: "Legacy Lives On",
    description: "Jackie Robinson passed away on October 24, but his impact continues to inspire generations."
  },
  {
    year: "1997",
    title: "Number 42 Retired",
    description: "MLB permanently retired #42 across all teams, the first time any sport honored a player this way."
  }
];

const Timeline = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Life of Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key moments in the extraordinary journey of Jackie Robinson
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 hidden lg:block" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} hidden lg:block`}>
                  {index % 2 === 0 && (
                    <Card className="inline-block hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-accent mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
                </div>
                
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'} lg:hidden`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-accent mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'} hidden lg:block`}>
                  {index % 2 === 1 && (
                    <Card className="inline-block hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-accent mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
