import React from "react";
import s from "./Items.module.scss";
import Item from "./Item/Item";
import nextId from "react-id-generator";
import { CoffeeItem, GoodsItem } from "../../../types/types";

type Props = {
  list: Array<(CoffeeItem | GoodsItem) & { country?: string }>;
  isLink?: boolean;
};

const Items: React.FC<Props> = ({ list, isLink }) => {
  const listItems = list.map(({ url, name, country, price }) => (
    <Item key={nextId()} {...{ url, name, country, price, isLink }} />
  ));

  return <ul className={s.items}>{listItems}</ul>;
};

export default Items;
