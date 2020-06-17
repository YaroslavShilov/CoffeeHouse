import React from 'react';
import s from './LinkButton.module.scss';

const LinkButton = ({href, onClick, traget, children}) => {
	return (
		<a className={s.link} href={href} onClick={onClick} target={traget}>
			{children}
		</a>
	);
}

export default LinkButton