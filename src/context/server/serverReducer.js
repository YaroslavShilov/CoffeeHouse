import {FETCH_ITEMS, HIDE_LOADER, SHOW_LOADER} from "../types";


const handlers = {
	[SHOW_LOADER]: state => ({...state, loading: true}),
	[HIDE_LOADER]: state => ({...state, loading: false}),
	[FETCH_ITEMS]: (state, {category, items}) => ({...state, [category]: items}),
	DEFAULT: state => state,
}

export const serverReducer = (state, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action)
} 