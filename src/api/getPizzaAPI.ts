import axios from 'axios'
const instance = axios.create({
	baseURL: 'https://6308a1dd46372013f58272d2.mockapi.io/'
  });
export const getPizza = {
	async getPizzaApi(sortBy: string = 'rating', category:number, page:number){
		let order= sortBy.startsWith('-') ? 'asc' : 'desc'
		sortBy = sortBy.split('-').join('')
		let response =
		 await instance.get(`items?p=${page}&l=4&category=${category || ''}&sortBy=${sortBy}&order=${order}`)
		return response.data
	},

	async getCategoryAPI(index:number){
		if(index){
			let response = await instance.get(`items?p=1&l=4&category=${index}`)
		return response.data
		}
		let response = await instance.get('items?p=1&l=4&')
		return response.data
	}
}