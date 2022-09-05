import { createSlice } from "@reduxjs/toolkit";
import {calcTotalCount, cartTotalSum} from '../../utils/calc'
import { getItemsFromLS } from "../../utils/getItemsFromls";
const state = getItemsFromLS()
getItemsFromLS()
const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: state,
	reducers:{
		fillCartReducer(state, action:any){
			const findItem = state.cart.find((obj) => obj.id === action.payload.id && obj.type === action.payload.type && obj.size === action.payload.size)
			if(findItem) findItem.count++
			else
			state.cart.push({
				...action.payload,
				count: 1
			})
			state.totalCount = calcTotalCount(state.cart)
			state.totalSum = cartTotalSum(state.cart)
		},

		decreasePizza(state, action){
			const findItem = state.cart.find((obj) => obj.id === action.payload)
			if(findItem) findItem.count--
			state.totalCount = calcTotalCount(state.cart)
			state.totalSum = cartTotalSum(state.cart)
		},
		incrementPizza(state, action){
			const findItem = state.cart.find((obj) => obj.id === action.payload)
			if(findItem) findItem.count++
			state.totalCount = calcTotalCount(state.cart)
			state.totalSum = cartTotalSum(state.cart)
		},

		clearBucketById(state, action){
			state.cart = state.cart.filter(item => item.id !== action.payload)
			state.totalCount = calcTotalCount(state.cart)
			state.totalSum = cartTotalSum(state.cart)
		},
		clearBucket(state){
			state.cart = []
		}
	}
})

export const {fillCartReducer, decreasePizza, incrementPizza, clearBucketById, clearBucket} = cartSlice.actions
export default cartSlice.reducer