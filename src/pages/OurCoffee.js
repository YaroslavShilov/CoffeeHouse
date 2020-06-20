import React from 'react';
import Header from "../components/Header/Header";
import About from "../components/About/About";
import AboutOurBeans from "../img/aboutOurBeans.jpg";
import Goods from "../components/Goods/Goods";

/**TODO: get db*/

const data = [
	{
		"name": "Death Wish Bean",
		"country": "Brazil",
		"url": "https://images-na.ssl-images-amazon.com/images/I/91DlZZBjxzL._SX522_.jpg",
		"price": "12.99$",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	},
	{
		"name": "AROMISTICO Coffee 1 kg",
		"country": "Brazil",
		"url": "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
		"price": "6.99$",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	},
	{
		"name": "Solimo Coffee Beans 2 kg",
		"country": "Kenya",
		"url": "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
		"price": "10.73$",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	},
	{
		"name": "Black Rifle Coffee",
		"country": "Kenya",
		"url": "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
		"price": "19.75$",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	},
	{
		"name": "Presto Coffee Beans 1 kg",
		"country": "Columbia",
		"url": "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
		"price": "15.99$",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	},
	{
		"name": "Organic Coffee One Cup",
		"country": "Columbia",
		"url": "https://images-na.ssl-images-amazon.com/images/I/51M2fmEXTIL.jpg",
		"price": "24.99$",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	}
];

const OurCoffee = () => {
	return (
		<>
			<Header title={'Our Coffee'}/>
			<About title={'About Us'} img={AboutOurBeans}>
				<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
				</p>
				<p>
					Afraid at highly months do things on at. Situation recommend objection do intention
					so questions.
				</p>
				<p>
					so questions.
					As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.
				</p>
			</About>
			<Goods showFilter link list={data}/>
		</>
	);
}

export default OurCoffee