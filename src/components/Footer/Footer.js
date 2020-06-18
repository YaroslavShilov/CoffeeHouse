import React from 'react';
import s from './Footer.module.scss';
import Nav from "../Nav/Nav";
import LineCoffee from "../LineCoffee/LineCoffee";

const Footer = () => (
	<footer className={s.footer}>
		<div className="wrap">
			<div className={s.main}>
				<Nav modif={'__black'}/>
				<LineCoffee modif={'__black'}/>
			</div>
		</div>
	</footer>
);

export default Footer