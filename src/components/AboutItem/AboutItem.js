import React, {useContext, useEffect, useState} from 'react';
import s from "./AboutItem.module.scss";
import LineCoffee from "../LineCoffee/LineCoffee";
import {ServerContext} from "../../context/server/serverContext";
import Loader from "../Loader/Loader";
import {Redirect} from "react-router";

const AboutItem = ({url}) => {
	const [item, setItem] = useState([]);
	const {loading, fetchItems, coffee} = useContext(ServerContext);
	
	useEffect(() => {
		if(coffee.length < 1) {
			fetchItems('coffee')
		} else {
			setItem(() => coffee.find(({name}) => {
				const convertName = name.toLowerCase().replace(/\s+/g, '');
				return url === convertName;
			}));
		}
	}, [coffee, setItem, url, fetchItems])

	if(!item) return <Redirect to={'/page404'}/>

	
	return (
		<section className={s.aboutit}>
			<div className="wrap">

				{
					loading
						? <Loader/>
						: <MainContent data={item}/>
				}

			</div>
		</section>
	);
}

const MainContent = ({data}) => {
	const {name, country, url, price, description} = data;
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

export default AboutItem