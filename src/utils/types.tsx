import {store} from '../reduxStore/redux-store'
export interface pizzaCardType {
id: number
imageUrl: string
title: string
types: number[]
sizes: number[]
price: number
category: number
rating: number
}

export interface cartInterface{
	id: number
	count: number
	price: number
	size: string
	type: string
	title: string
	image: string
}

export interface ThunkInterface {
	sortBy: string
	category: number
	page: number
}