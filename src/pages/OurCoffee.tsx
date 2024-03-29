import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import AboutSection from "../components/AboutSection/AboutSection";
import AboutOurBeans from "../img/aboutOurBeans.jpg";
import { useSeverContext } from "../context/server/serverContext";
import Preloader from "../components/Preloader/Preloader";
import GoodsWithFilter from "../components/Goods/GoodsWithFilter";

const OurCoffee: React.FC = () => {
  const { loading, fetchItems, coffee } = useSeverContext();

  useEffect(() => {
    fetchItems("coffee");
  }, [fetchItems]);

  return (
    <Preloader>
      <Header title={"Our Coffee"} />
      <AboutSection title={"About Us"} img={AboutOurBeans}>
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
        </p>
        <p>
          Afraid at highly months do things on at. Situation recommend objection
          do intention so questions.
        </p>
        <p>
          so questions. As greatly removed calling pleased improve an. Last ask
          him cold feel met spot shy want. Children me laughing we prospect
          answered followed. At it went is song that held help face.
        </p>
      </AboutSection>
      <GoodsWithFilter isLink list={coffee} loading={loading} />
    </Preloader>
  );
};

export default OurCoffee;
