import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import AboutSection from "../components/AboutSection/AboutSection";
import PleasureImg from "../img/pleasurePage.jpg";
import AboutOurGoods from "../img/aboutOurGoods.jpg";
import Goods from "../components/Goods/Goods";
import { useSeverContext } from "../context/server/serverContext";
import Preloader from "../components/Preloader/Preloader";

const Pleasure: React.FC = () => {
  const { fetchItems, goods, loading } = useSeverContext();

  useEffect(() => {
    fetchItems("goods");
  }, [fetchItems]);

  return (
    <Preloader>
      <Header title={"For your pleasure"} bgImg={PleasureImg} />
      <AboutSection title={"About our goods"} img={AboutOurGoods}>
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
        </p>
        <p>
          Afraid at highly months do things on at. Situation recommend objection
          do intention so questions.
        </p>
        <p>
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed.
          At it went is song that held help face.
        </p>
      </AboutSection>
      <Goods list={goods} loading={loading} />
    </Preloader>
  );
};

export default Pleasure;
