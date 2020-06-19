import React, {useState} from 'react';
import Filter from "./Filter/Filter";
import Items from "./Items/Items";
import s from './Coffee.module.scss';
import {Route} from "react-router";

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

const unique = (arr) => {
	let result = [];
	for(let item of arr) {
		if(!result.includes(item)) result.push(item)
	}
	return result;
}

const Coffee = () => {
	
	const [state, setState] = useState({
		search: '',
		filter: [],
	})
	
	const filter = (filter) => {
		if(state.filter.indexOf(filter) === -1) {
			setState({
				...state,
				filter: [...state.filter, filter]
			})
		} else {
			setState({
				...state,
				filter: [...state.filter.filter(item => item !== filter)]
			})
		}
	}
	
	const search = (value) => {
		setState({...state, search: value});
	}
	
	const filterList = (search, list) => {
		
	}
	
	const countries = unique(data.map(coffee => coffee.country));
	
	return (
		<section className={s.coffee}>
			<div className="wrap">
				<Route path={"/ourcoffee"} exact render={() => (
					<Filter {...{countries, filter, search}}/>
				)}/>
				
				<Items list={data}/>
			</div>			
		</section>
	);
}

export default Coffee