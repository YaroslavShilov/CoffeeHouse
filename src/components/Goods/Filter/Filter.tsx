import React from "react";
import s from "./Filter.module.scss";

type Props = {
  search: (value: string) => void;
  filter: (value: string) => void;
  countries: Array<string>;
};

const Filter: React.FC<Props> = ({ search, filter, countries }) => {
  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
    filter(e.target.value);
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    search(e.target.value);

  const listButtons = countries.map((country) => (
    <li className={s.button} key={country}>
      <input
        type="checkbox"
        value={country}
        id={country}
        name={"country"}
        onChange={onFilter}
      />
      <label htmlFor={country}>{country}</label>
    </li>
  ));

  return (
    <form className={s.filter} onSubmit={(e) => e.preventDefault()}>
      <div className={s.search}>
        <label htmlFor="search" className={s.label}>
          Looking for
        </label>
        <input
          type="text"
          id={"search"}
          className={s.input}
          placeholder={"start typing here..."}
          onChange={onSearch}
        />
      </div>

      <div className={s.filters}>
        <label className={s.label}>Or filter</label>

        <ul className={s.buttons}>{listButtons}</ul>
      </div>
    </form>
  );
};

export default Filter;
