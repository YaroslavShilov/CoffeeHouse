import React, {useReducer} from 'react';
import {ServerContext} from "./serverContext";
import {serverReducer} from "./serverReducer";
import {FETCH_ITEMS, HIDE_LOADER, SHOW_LOADER} from "../types";
import {URL} from "../../API/URL";

const ServerState = ({children}) => {
	const initialState = {
		bestsellers: [],
		coffee: [],
		goods: [],
		loading: true,
	}
	
	const [state, dispatch] = useReducer(serverReducer, initialState);
	
	const showLoader = () => dispatch({type: SHOW_LOADER})
	const hideLoader = () => dispatch({type: HIDE_LOADER})
	
	const fetchItems = async (category) => {
		if(state[category].length > 1) {
			return hideLoader();
		}
		showLoader();
		const res = await fetch(`${URL}/${category}`)
		const data = await res.json();
		dispatch({type: FETCH_ITEMS, category, items: data})
		hideLoader();
	}
	
	
	return (
		<ServerContext.Provider value={{
			fetchItems, ...state,
		}}>
			{children}
		</ServerContext.Provider>
	);
}

export default ServerState