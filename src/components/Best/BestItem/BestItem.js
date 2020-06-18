import React from 'react';
import s from './BestItem.module.scss';

const BestItem = ({img, name, price}) => {
	return (
		<a className={s.item} href={'#'}>
			<div className={s.img}>
				<img src={img} alt={name}/>
			</div>
			<h3 className={s.name}>{name}</h3>
			<p className={s.price}>
				<strong>{price}</strong>
			</p>
		</a>
	);
}

export default BestItem