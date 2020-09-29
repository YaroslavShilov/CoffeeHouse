import React, { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import Items from "./Items/Items";
import s from "./Goods.module.scss";
import Loader from "../Loader/Loader";
import { CoffeeItem } from "../../types/types";

const convertString = (string: string) => {
  return string.toUpperCase().replace(/\s+/g, "");
};

const uniqueCountries = (countries: Array<string>) => {
  const uniqueCountries = [] as Array<string>;
  for (let country of countries) {
    if (!uniqueCountries.includes(country)) uniqueCountries.push(country);
  }
  return uniqueCountries;
};

type Props = {
  list: Array<CoffeeItem>;
  isLink?: boolean;
  loading: boolean;
};

const GoodsWithFilter: React.FC<Props> = ({ list, isLink, loading }) => {
  const [state, setState] = useState({
    search: "",
    filter: [] as Array<string>,
    loading: true,
  });

  useEffect(() => {
    setState({ ...state, loading });
    // eslint-disable-next-line
  }, [loading]);

  const filter = (filter: string): void => {
    if (state.filter.indexOf(filter) === -1) {
      setState({
        ...state,
        filter: [...state.filter, filter],
      });
    } else {
      setState({
        ...state,
        filter: [...state.filter.filter((elemFilter) => elemFilter !== filter)],
      });
    }
  };

  const search = (value: string) => setState({ ...state, search: value });

  const filterList = (
    search: string,
    filter: Array<string>,
    list: Array<CoffeeItem>
  ) => {
    const checkSearch = (search: string, list: Array<CoffeeItem>) => {
      if (search.length === 0) return list;

      return list.filter(({ name }) => {
        return convertString(name).indexOf(convertString(search)) > -1;
      });
    };

    const checkFilter = (filter: Array<string>, list: Array<CoffeeItem>) => {
      if (filter.length === 0) return list;

      return list.filter(({ country }) => {
        return filter.find((elemFilter) => elemFilter === country);
      });
    };

    const resultCheckSearch = checkSearch(search, list);

    return checkFilter(filter, resultCheckSearch);
  };

  const countries = uniqueCountries(
    list.map((coffee: CoffeeItem) => coffee.country)
  );

  const visibleList = filterList(state.search, state.filter, list);

  return (
    <section className={s.coffee}>
      <div className="wrap">
        <Filter {...{ countries, filter, search }} />
        {state.loading ? (
          <Loader />
        ) : (
          <Items list={visibleList} isLink={isLink} />
        )}
      </div>
    </section>
  );
};

export default GoodsWithFilter;
