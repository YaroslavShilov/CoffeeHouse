import React from "react";
import s from "./Header.module.scss";
import defaultBg from "./img/bg.jpg";
import Nav from "../Nav/Nav";

type Props = {
  title: string;
  bgImg?: string;
};

const Header: React.FC<Props> = ({ title, bgImg = defaultBg }) => {
  return (
    <header className={s.header} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="wrap">
        <Nav />
        <h1 className={s.title}>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
