import React from 'react';
import s from './Item.module.scss';

const Item = ({img, name, country, price}) => {
	return (
		<li>
			<a className={s.item} href={'/'}>
				<div className={s.img}>
					<img src={img} alt={name}/>
				</div>
				<h3 className={s.name}>{name}</h3>
				<p className={s.country}>{country}</p>
				<p className={s.price}>
					<strong>{price}</strong>
				</p>
			</a>
		</li>
	);
}

export default Item