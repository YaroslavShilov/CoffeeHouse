import React from "react";
import s from "./LineCoffee.module.scss";
import IconLine from "./icon/IconLine";

type Props = {
  modif?: string;
};

const LineCoffee: React.FC<Props> = ({ modif = "" }) => (
  <div className={`${s.line} ${s[modif]}`}>
    <span className={s.icon}>
      <IconLine />
    </span>
  </div>
);

export default LineCoffee;
