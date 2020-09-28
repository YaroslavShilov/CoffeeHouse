import React from "react";
import HomeSection from "../components/HomeSection/HomeSection";
import AboutSection from "../components/AboutSection/AboutSection";
import Best from "../components/Best/Best";
import Preloader from "../components/Preloader/Preloader";

const Home: React.FC = () => (
  <Preloader>
    <HomeSection />
    <AboutSection title={"About Us"}>
      <p>
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible. Afraid at highly months do things on at. Situation
        recommend objection do intention so questions. As greatly removed
        calling pleased improve an. Last ask him cold feel met spot shy want.
        Children me laughing we prospect answered followed. At it went is song
        that held help face.
      </p>
      <p>
        Now residence dash woods she excellent you. Shade being under his bed
        her, Much read on as draw. Blessing for ignorant exercise any yourself
        unpacked. Pleasant horrible but confined day end marriage. Eagerness
        furniture set preserved far recommend. Did even but nor are most gave
        hope. Secure active living depend son repair day ladies now.
      </p>
    </AboutSection>
    <Best />
  </Preloader>
);

export default Home;
