import React, { useEffect } from "react";
import s from "./Best.module.scss";
import BestItem from "./BestItem/BestItem";
import nextId from "react-id-generator";
import { useSeverContext } from "../../context/server/serverContext";
import Loader from "../Loader/Loader";

const Best = () => {
  const { loading, fetchItems, bestsellers } = useSeverContext();

  useEffect(() => {
    fetchItems("bestsellers");
  }, [fetchItems]);

  const items = bestsellers.map(({ url, name, price }) => (
    <BestItem key={nextId()} img={url} name={name} price={price} />
  ));

  return (
    <section className={s.best}>
      <div className="wrap">
        <h2 className="gb-title">Our best</h2>
        {loading ? <Loader /> : <ul className={s.items}>{items}</ul>}
      </div>
    </section>
  );
};

export default Best;
