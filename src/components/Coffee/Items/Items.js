import React from 'react';
import s from './Items.module.scss';
import Item from "./Item/Item";
import nextId from "react-id-generator";

const Items = ({list}) => {
	
	const listItems = list.map(({url, name, country, price}) => (
		<Item key={nextId()} {...{img: url, name, country, price}}/>
	))
	
	return (
		<ul className={s.items}>
			{listItems}
		</ul>
	);
}

export default Items