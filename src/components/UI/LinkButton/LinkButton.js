import React from 'react';
import s from './LinkButton.module.scss';
import {Link} from "react-router-dom";

const LinkButton = ({href, onClick, traget, children}) => (
	<Link className={s.link} to={href} onClick={onClick} target={traget}>
		{children}
	</Link>
);

export default LinkButton