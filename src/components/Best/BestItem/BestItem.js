import React from 'react';
import s from './BestItem.module.scss';
import {Link} from "react-router-dom";

const BestItem = ({img, name, price}) => {
	const urlName = name.toLowerCase().replace(/\s+/g, '');
	return (
		<li>
			<Link className={s.item} to={`/aboutit/${urlName}`}>
				<div className={s.img}>
					<img src={img} alt={name}/>
				</div>
				<h3 className={s.name}>{name}</h3>
				<p className={s.price}>
					<strong>{price}</strong>
				</p>
			</Link>
		</li>
	);
}

export default BestItem