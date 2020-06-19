import React from 'react';
import s from './Best.module.scss';
import BestItem from "./BestItem/BestItem";
import nextId from "react-id-generator";
 
const Best = (props) => {
	
	const dataList = [
		{
			"name": "Solimo Coffee Beans 2 kg",
			"url": "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
			"price": "10.73$"
		},
		{
			"name": "Presto Coffee Beans 1 kg",
			"url": "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
			"price": "15.99$"
		},
		{
			"name": "AROMISTICO Coffee 1 kg",
			"url": "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
			"price": "6.99$"
		}
	]
	
	const items = dataList.map(item => 
		<BestItem key={nextId()} img={item.url} name={item.name} price={item.price}/>
	)
	
	return (
		<section className={s.best}>
			<div className="wrap">
				<h2 className={`gb-title`}>Our best</h2>
				<ul className={s.items}>
					{items}
				</ul>
			</div>
		</section>
	);
}

export default Best