import React from "react";
import s from "./Page404.module.scss";
import Nav from "../../components/Nav/Nav";
import Image from "./404.jpg";

const Page404: React.FC = () => {
  return (
    <section className={s.bg}>
      <div className="wrap">
        <div className={s.main}>
          <Nav />
          <img src={Image} alt="Page 404" />
        </div>
      </div>
    </section>
  );
};

export default Page404;
