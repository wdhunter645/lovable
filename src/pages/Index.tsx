import Hero from "@/components/Hero";
import BaseballCareer from "@/components/BaseballCareer";
import CivilRightsImpact from "@/components/CivilRightsImpact";
import Timeline from "@/components/Timeline";
import Quotes from "@/components/Quotes";
import JoinFanClub from "@/components/JoinFanClub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BaseballCareer />
      <CivilRightsImpact />
      <Timeline />
      <Quotes />
      <JoinFanClub />
      <Footer />
    </div>
  );
};

export default Index;
