import React, {useState} from 'react';
import Filter from "./Filter/Filter";
import Items from "./Items/Items";
import s from './Goods.module.scss';

const Goods = ({list, showFilter, link}) => {
	
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
	
	const search = (value) => setState({...state, search: value});
	
	const filterList = (search, filter, list) => {
		const convert = (string) => {
			return string.toUpperCase().replace(/\s+/g, '');
		}
		
		const checkSearch = (search, list) => {
			if(search.length === 0) return list;
			
			return list.filter(({name}) => {
				return convert(name).indexOf(convert(search)) > -1
			})
		}
		
		const checkFilter = (filter, list) => {
			if(filter.length === 0) return list;
			
			return list.filter(({country}) => {
				return filter.find((item) => item === country);
			})
		}
		
		const resultCheckSearch = checkSearch(search, list);
		
		return checkFilter(filter, resultCheckSearch);
	}

	const unique = (arr) => {
		let result = [];
		for(let item of arr) {
			if(!result.includes(item)) result.push(item)
		}
		return result;
	}
	
	const countries = unique(list.map(coffee => coffee.country));
	const visibleList = filterList(state.search, state.filter, list);
	
	return (
		<section className={s.coffee}>
			<div className="wrap">
				{showFilter && <Filter {...{countries, filter, search}}/>}
				<Items list={visibleList} link={link}/>
			</div>			
		</section>
	);
}

export default Goods