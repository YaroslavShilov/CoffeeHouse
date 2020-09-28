import React from "react";
import s from "./Loader.module.scss";
import IconCoffee from "./img/coffee.png";
import IconCup from "./img/cup.png";

type Props = {
  absolute?: boolean;
};

const Loader: React.FC<Props> = ({ absolute = false }) => {
  const modif = absolute && s.__absolute;

  return (
    <div className={`${s.loader} ${modif}`}>
      <div className={s.icon}>
        <img className={s.coffee} src={IconCoffee} alt="Coffee" />
        <div className={s.load} />
        <img className={s.cup} src={IconCup} alt="Cup" />
      </div>
    </div>
  );
};
export default Loader;
