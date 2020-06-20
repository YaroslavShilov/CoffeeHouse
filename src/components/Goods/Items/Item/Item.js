import React from 'react';
import s from './Item.module.scss';
import {Link} from "react-router-dom";

const Item = ({img, name, country, price, link}) => {
	const urlName = name.toLowerCase().replace(/\s+/g, '');
	
	const ViewLink = ({children}) => (
		<Link className={s.item} to={`/aboutit/${urlName}`}>
			{children}
		</Link>
	)
	
	const ViewBlock = ({children}) => (
		<div className={s.item}>
			{children}
		</div>
	)
	
	const ViewMain = () => (
		<>
			<div className={s.img}>
				<img src={img} alt={name}/>
			</div>
			<h3 className={s.name}>{name}</h3>
			<p className={s.country}>{country}</p>
			<p className={s.price}>
				<strong>{price}</strong>
			</p>
		</>
	)
	
	const content = link ? <ViewLink><ViewMain/></ViewLink> : <ViewBlock><ViewMain/></ViewBlock>
	
	return (
		<li>
			{content}
		</li>
	);
}

export default Item