import React from "react";
import s from "./Preloader.module.scss";
import Loader from "../Loader/Loader";

const Preloader: React.FC = () => (
  <div className={s.bg}>
    <Loader absolute={true} />
  </div>
);

export default Preloader;
