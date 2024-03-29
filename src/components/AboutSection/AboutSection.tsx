import React from "react";
import s from "./AboutSection.module.scss";
import LineCoffee from "../LineCoffee/LineCoffee";

type Props = {
  title: string;
  img?: string;
};

const AboutSection: React.FC<Props> = ({ title, img, children }) => {
  const imgBlock = img && (
    <div className={s.img} style={{ backgroundImage: `url(${img})` }} />
  );

  return (
    <section className={s.about}>
      <div className="wrap">
        <div className={s.main}>
          {imgBlock}

          <div className={s.cont}>
            <h2 className={`gb-title ${s.title}`}>{title}</h2>

            <LineCoffee modif={"__black"} />

            <div className={s.desc}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
