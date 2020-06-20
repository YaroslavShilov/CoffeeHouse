import React, {useContext} from 'react';
import s from "./AboutItem.module.scss";
import LineCoffee from "../LineCoffee/LineCoffee";
import {ServerContext} from "../../context/server/serverContext";

const AboutItem = ({match}) => {
	
	const {loading, fetchItem, coffee} = useContext(ServerContext);
	
	//**TODO: work here**/
	
	const urlName = match.params.name;
	
	const item = data.find(({name}) => {
		const convertName = name.toLowerCase().replace(/\s+/g, '');
		return urlName === convertName;
	})

	const {name, country, url, price, description} = item;
	
	return (
		<section className={s.aboutit}>
			<div className="wrap">
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

			</div>
		</section>
	);
}

export default AboutItem