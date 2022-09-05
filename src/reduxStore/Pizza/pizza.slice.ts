import { createSlice } from "@reduxjs/toolkit";
import { pizzaCardType } from "../../utils/types";
import {pizzaGetThunk} from './pizza.thunk'
const pizzaSlice = createSlice({
	name: 'cards',
	initialState: {
		pizza: [] as pizzaCardType[],
		page: 1,
		isLoading: false,
		sortBy: 'rating',
		category: 0,
	},
	reducers: {
		setPizza(state, {...payload}){
			const {response, page, sortBy, category} = payload.payload
			state.pizza = response
			state.page = page
			state.sortBy = sortBy
			state.category = category
		},
		setSort(state, action){
			state.sortBy = action.payload		 
		},
		setCategory(state,action){
			state.category = action.payload
		},
		setFilter(state, action){
			const {sortBy, category, page} = action.payload
			state.sortBy = sortBy
			state.category = category
			state.page = page
		},
	},
	extraReducers(builder){
		builder
		.addCase(pizzaGetThunk.pending, (state) => {state.isLoading = true})
		.addCase(pizzaGetThunk.fulfilled, (state) => {state.isLoading = false})
	}
})
export const {setPizza, setSort,setCategory, setFilter} = pizzaSlice.actions
export default pizzaSlice.reducer