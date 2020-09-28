import React from "react";
import s from "./HomeSection.module.scss";
import LineCoffee from "../LineCoffee/LineCoffee";
import Nav from "../Nav/Nav";
import LinkButton from "../UI/LinkButton/LinkButton";

const HomeSection = () => {
  return (
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
  );
};

export default HomeSection;
