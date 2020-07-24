import React, {useContext, useEffect} from 'react';
import s from './Best.module.scss';
import BestItem from "./BestItem/BestItem";
import nextId from "react-id-generator";
import {ServerContext} from "../../context/server/serverContext";
import Loader from "../Loader/Loader";
 
const Best = () => {
	
	const {loading, fetchItems, bestsellers} = useContext(ServerContext);
	
	useEffect(() => {
		fetchItems('bestsellers')
		// eslint-disable-next-line
	}, [])
	
	const items = bestsellers.map(item => 
		<BestItem key={nextId()} img={item.url} name={item.name} price={item.price}/>
	)
	
	return (
		<section className={s.best}>
			<div className="wrap">
				<h2 className={`gb-title`}>Our best</h2>
				{
					loading
					? <Loader/>
					: <ul className={s.items}>{items}</ul>
				}
				
			</div>
		</section>
	);
}

export default Best