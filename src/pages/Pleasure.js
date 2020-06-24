import React, {useContext, useEffect} from 'react';
import Header from "../components/Header/Header";
import About from "../components/About/About";
import PleasureImg from "../img/pleasurePage.jpg";
import AboutOurGoods from "../img/aboutOurGoods.jpg"
import Goods from "../components/Goods/Goods";
import {ServerContext} from "../context/server/serverContext";

const Pleasure = () => {
	
	const {fetchItems, goods, loading} = useContext(ServerContext);
	
	useEffect(() => {
		fetchItems('goods');
		// eslint-disable-next-line
	}, [])
	
	return (
		<>
			<Header title={'For your pleasure'} bgImg={PleasureImg}/>
			<About title={'About our goods'} img={AboutOurGoods}>
				<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
				</p>
				<p>
					Afraid at highly months do things on at. Situation recommend objection do intention
					so questions.
				</p>
				<p>As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.</p>
			</About>
			<Goods list={goods} loading={loading}/>
		</>
	);
}

export default Pleasure