import React from "react";
import s from "./Item.module.scss";
import { Link } from "react-router-dom";
import { CoffeeItem } from "../../../../types/types";

type Props = CoffeeItem & {
  isLink?: boolean;
};

const Item: React.FC<Props> = ({ url: img, name, country, price, isLink }) => {
  const urlName = name.toLowerCase().replace(/\s+/g, "");

  const ViewLink: React.FC<React.ReactNode> = ({ children }) => (
    <Link className={s.item} to={`/aboutit/${urlName}`}>
      {children}
    </Link>
  );

  const ViewBlock: React.FC<React.ReactNode> = ({ children }) => (
    <div className={s.item}>{children}</div>
  );

  const ViewMain = () => (
    <>
      <div className={s.img}>
        <img src={img} alt={name} />
      </div>
      <h3 className={s.name}>{name}</h3>
      <p className={s.country}>{country}</p>
      <p className={s.price}>
        <strong>{price}</strong>
      </p>
    </>
  );

  const content = isLink ? (
    <ViewLink>
      <ViewMain />
    </ViewLink>
  ) : (
    <ViewBlock>
      <ViewMain />
    </ViewBlock>
  );

  return <li>{content}</li>;
};

export default Item;
