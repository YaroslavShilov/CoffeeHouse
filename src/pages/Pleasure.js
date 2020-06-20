import React from 'react';
import Header from "../components/Header/Header";
import About from "../components/About/About";
import PleasureImg from "../img/pleasurePage.jpg";
import AboutOurGoods from "../img/aboutOurGoods.jpg"
import Goods from "../components/Goods/Goods";
//** TODO: get db*/
const data = [
	{
		"name": "Electric Spice and Coffee Grinder",
		"url": "https://images-na.ssl-images-amazon.com/images/I/41qvqWRCm3L.jpg",
		"price": "36.99$"
	},
	{
		"name": "Manual Coffee Grinder",
		"url": "https://images-na.ssl-images-amazon.com/images/I/91gR5HFtmaL._SL1500_.jpg",
		"price": "25.99$"
	},
	{
		"name": "Coffee Cup with Lid",
		"url": "https://images-na.ssl-images-amazon.com/images/I/71L5Ut1HHSL._SL1500_.jpg",
		"price": "15.99$"
	},
	{
		"name": "Pour Over Coffee Maker",
		"url": "https://images-na.ssl-images-amazon.com/images/I/916TPwGqfML._SL1500_.jpg",
		"price": "45.99$"
	}
];

const Pleasure = () => {
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
			<Goods list={data}/>
		</>
	);
}

export default Pleasure