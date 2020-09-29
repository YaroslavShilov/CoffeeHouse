import React, { useContext, useEffect, useState } from "react";
import s from "./AboutItem.module.scss";
import LineCoffee from "../LineCoffee/LineCoffee";
import { ServerContext } from "../../context/server/serverContext";
import Loader from "../Loader/Loader";
import { Redirect } from "react-router";
import { CoffeeItemWithDesc } from "../../types/types";

type Props = {
  url: string;
};

const AboutItem: React.FC<Props> = ({ url }) => {
  const [item, setItem] = useState<CoffeeItemWithDesc | undefined>();
  const [isCheck, setIsCheck] = useState(true);
  const { loading, fetchItems, coffee } = useContext(ServerContext);

  useEffect(() => {
    if (coffee && coffee.length > 0) {
      setItem(
        coffee.find((item: CoffeeItemWithDesc) => {
          const convertName = item.name.toLowerCase().replace(/\s+/g, "");
          return url === convertName;
        })
      );
    } else {
      fetchItems("coffee");
    }

    setIsCheck(false);
  }, [coffee, setItem, url, fetchItems]);

  if (!item && !isCheck && !loading) return <Redirect to={"/page404"} />;

  return (
    <section className={s.aboutit}>
      <div className="wrap">
        {!loading && item ? <MainContent item={item} /> : <Loader />}
      </div>
    </section>
  );
};

const MainContent: React.FC<{ item: CoffeeItemWithDesc }> = ({ item }) => {
  const { name, country, url, price, description } = item;
  return (
    <div className={s.main}>
      <div className={s.img}>
        <img src={url} alt={name} />
      </div>

      <div className={s.cont}>
        <h2 className={`gb-title ${s.title}`}>{name}</h2>
        <LineCoffee modif={"__black"} />
        <ul className={s.desc}>
          <li>
            <strong>Country: </strong> {country}
          </li>
          <li>
            <strong>Description: </strong>
            {description}
          </li>
          <li>
            <strong>Price: </strong> <span className={s.price}>{price}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutItem;
