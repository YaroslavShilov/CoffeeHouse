import React, {useContext, useEffect} from 'react';
import s from "./AboutItem.module.scss";
import LineCoffee from "../LineCoffee/LineCoffee";
import {ServerContext} from "../../context/server/serverContext";
import Loader from "../Loader/Loader";

const AboutItem = ({match}) => {

	const {loading, fetchItems, coffee} = useContext(ServerContext);

	useEffect(() => {
		fetchItems('coffee')
		// eslint-disable-next-line
	}, [])

	const urlName = match.params.name;

	const item = coffee.find(({name}) => {
		const convertName = name.toLowerCase().replace(/\s+/g, '');
		return urlName === convertName;
	})

	function haveItem(item) {
		const {name, country, url, price, description} = item;
		return (
			<div className={s.main}>

				<div className={s.img}>
					<img src={url} alt={name}/>
				</div>

				<div className={s.cont}>
					<h2 className={`gb-title ${s.title}`}>{name}</h2>
					<LineCoffee modif={'__black'}/>
					<ul className={s.desc}>
						<li>
							<strong>Country: </strong> {country}
						</li>
						<li>
							<strong>Description: </strong>{description}
						</li>
						<li>
							<strong>Price: </strong> <span className={s.price}>{price}</span>
						</li>
					</ul>
				</div>

			</div>
		)

	}

	const mainContent = item ? haveItem(item) : <div>Item didn't found</div>;


	return (
		<section className={s.aboutit}>
			<div className="wrap">

				{
					loading
						? <Loader/>
						: mainContent
				}

			</div>
		</section>
	);
}

export default AboutItem