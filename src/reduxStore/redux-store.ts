import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartSlice from './Cart/cart.slice'
import pizzaSlice from './Pizza/pizza.slice'
let rootReducer = combineReducers({
	getAllPizzas: pizzaSlice,
	setCart: cartSlice,
})
export const store = () => configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
