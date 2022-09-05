import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPizza } from "../../api/getPizzaAPI"
import { ThunkInterface } from "../../utils/types"
import { setPizza } from './pizza.slice'

export const pizzaGetThunk = createAsyncThunk(
	'cardsThunk', 
	 async function setPizzaApi(field:ThunkInterface, {rejectWithValue, dispatch}){
		const {sortBy, category, page} = field
		try {
			let response = await getPizza.getPizzaApi(sortBy, +category, +page)
			dispatch(setPizza({response, sortBy, category, page}))
		} catch (error:any) {
			return rejectWithValue(error.message)
		}
		
	}
)