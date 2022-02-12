import React from "react";
import s from "./Nav.module.scss";
import IconCoffee from "./icon/IconCoffee";
import { Link } from "react-router-dom";

type Props = {
  modif?: string;
};

const Nav: React.FC<Props> = ({ modif }) => (
  <nav className={`${s.nav} ${modif ? s[modif] : ""}`}>
    <ul className={s.list}>
      <li className={s.item}>
        <Link to={`/`}>
          <span className={s.icon}>
            <IconCoffee />
          </span>
          Coffee house
        </Link>
      </li>

      <li className={s.item}>
        <Link to={`/ourcoffee`}>Our coffee</Link>
      </li>

      <li className={s.item}>
        <Link to={`/pleasure`}>For your pleasure</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
