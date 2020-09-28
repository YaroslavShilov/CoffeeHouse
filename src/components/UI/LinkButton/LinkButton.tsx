import React from "react";
import s from "./LinkButton.module.scss";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  onClick?: () => void;
  target?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<Props> = ({ href, onClick, target, children }) => (
  <Link className={s.link} to={href} onClick={onClick} target={target}>
    {children}
  </Link>
);

export default LinkButton;
