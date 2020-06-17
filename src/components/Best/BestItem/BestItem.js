import React from 'react';
import s from './BestItem.module.scss';

const BestItem = ({img, name, price}) => {
	return (
		<div className={s.item}>
			<img className={s.img} src={img} alt={name}/>
			<h3 className={s.name}>{name}</h3>
			<p className={s.price}>{price}$</p>
		</div>
	);
}

export default BestItem