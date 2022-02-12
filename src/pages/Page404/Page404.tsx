import React from "react";
import s from "./Page404.module.scss";
import Nav from "../../components/Nav/Nav";
import Image from "./404.jpg";
import Preloader from "../../components/Preloader/Preloader";

const Page404: React.FC = () => (
  <Preloader>
    <section className={s.bg}>
      <div className="wrap">
        <div className={s.main}>
          <Nav />
          <img src={Image} alt="Page 404" />
        </div>
      </div>
    </section>
  </Preloader>
);

export default Page404;
