import breakingBarriersImage from "@/assets/breaking-barriers.jpg";

const CivilRightsImpact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Beyond Baseball: A Civil Rights Pioneer
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Jackie Robinson's impact transcended sports. His dignified resistance to racism 
              and his refusal to accept second-class citizenship made him a symbol of the 
              Civil Rights Movement.
            </p>
            <div className="space-y-4 text-primary-foreground/80">
              <p>
                After retiring from baseball in 1957, Robinson became even more active in the 
                struggle for equality. He worked with the NAACP, participated in the March on 
                Washington, and used his fame to advocate for civil rights legislation.
              </p>
              <p>
                Robinson spoke out against discrimination, supported black-owned businesses, 
                and worked to create opportunities for African Americans in all areas of society. 
                His courage and determination inspired countless individuals to stand up against 
                injustice.
              </p>
              <p className="text-lg font-semibold text-accent">
                "A life is not important except in the impact it has on other lives."
              </p>
              <p className="text-sm italic">— Jackie Robinson</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/30">
              <img 
                src={breakingBarriersImage} 
                alt="Jackie Robinson breaking barriers - symbolic representation of his impact on civil rights"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-8 shadow-xl border-4 border-primary max-w-xs">
              <div className="text-6xl font-bold mb-2">42</div>
              <p className="text-sm font-semibold">
                Retired across all of Major League Baseball in 1997
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilRightsImpact;
