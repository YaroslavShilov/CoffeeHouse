import React from 'react';
import s from './Nav.module.scss';
import nextId from "react-id-generator";
import IconCoffee from "./icon/IconCoffee";

const Nav = ({modif=''}) => {
	
	const dataList = [
		{label: 'Coffee house', link: '#'},
		{label: 'Our coffee', link: '#'},
		{label: 'For your pleasure', link: '#'},
	];
	
	const list = dataList.map((item) => {
		return (
			<li className={s.item} key={nextId()}>
				<a href={item.link} className={s.link}>{item.label}</a>
			</li>
		)
	})
	
	return (
		<nav className={`${s.nav} ${s[modif]}`}>
			<span className={s.icon}>
				<IconCoffee/>
			</span>
			<ul className={s.list}>
				{list}
			</ul>
		</nav>
	);
}

export default Nav