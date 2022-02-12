import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import Best from "../../components/Best/Best";
import Preloader from "../../components/Preloader/Preloader";
import s from "./Home.module.scss";
import Nav from "../../components/Nav/Nav";
import LineCoffee from "../../components/LineCoffee/LineCoffee";
import LinkButton from "../../components/UI/LinkButton/LinkButton";

const Home: React.FC = () => (
  <Preloader>
    <section className={s.bg}>
      <div className={s.bg_filter}>
        <div className="wrap">
          <div className={s.main}>
            <Nav />
            <h1 className={s.title}>Everything You Love About Coffee</h1>
            <LineCoffee />
            <div className={s.desc}>
              <p>We makes every day full of energy and taste</p>
              <p>Want to try our beans?</p>
            </div>
            <LinkButton href={"/ourcoffee"}>More</LinkButton>
          </div>
        </div>
      </div>
    </section>

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
