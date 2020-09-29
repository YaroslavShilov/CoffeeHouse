import React from "react";
import Items from "./Items/Items";
import s from "./Goods.module.scss";
import Loader from "../Loader/Loader";
import { GoodsItem } from "../../types/types";

type Props = {
  list: Array<GoodsItem>;
  isLink?: boolean;
  loading: boolean;
};

const Goods: React.FC<Props> = ({ list, isLink, loading }) => {
  return (
    <section className={s.coffee}>
      <div className="wrap">
        {loading ? <Loader /> : <Items list={list} isLink={isLink} />}
      </div>
    </section>
  );
};

export default Goods;
