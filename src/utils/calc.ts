
export const calcTotalCount = (cart: any) => {
	return cart.reduce((sum:any, obj:any) => sum + obj.count, 0)
}

export const cartTotalSum = (cart: any) => {
	return cart.reduce((sum:any, obj:any) => sum + obj.count * obj.price ,0)
}