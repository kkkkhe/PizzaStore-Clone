import { calcTotalCount, cartTotalSum } from "./calc"
import { cartInterface } from "./types"

export const getItemsFromLS = () => {
	const cart = localStorage.getItem('cart')
	const items = cart? JSON.parse(cart) : []
	return {
		cart: items as cartInterface[], 
		totalCount: calcTotalCount(items),
		totalSum: cartTotalSum(items)
	}
}