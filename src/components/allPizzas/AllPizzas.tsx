import './pizzas.scss'
import { pizzaCardType } from '../../utils/types'
import {  useAppDispatch, useAppSelector } from '../../utils/typedHooks'
import { MyLoader } from '../ContentLoader/ContentLoader'
import { isLoading, getPizza } from '../../utils/selectors'
import { PizzaCard } from './PizzaCard'
import {getPage,getSortBy, getCategory} from '../../utils/selectors'
import { useEffect, useRef } from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { pizzaGetThunk } from '../../reduxStore/Pizza/pizza.thunk'
import { setFilter } from '../../reduxStore/Pizza/pizza.slice'
export const AllPizzas= () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const preload = useAppSelector(isLoading)
	const pizzas = useAppSelector(getPizza)
	const page = useAppSelector(getPage)
	const sortBy = useAppSelector(getSortBy)
	const category = useAppSelector(getCategory)
	const isSearch = useRef(false)
	const isMounted = useRef(false)


	useEffect(() => {
		if(window.location.search){
			const p = qs.parse(window.location.search.slice(1))
			dispatch(setFilter(p))
			isSearch.current = true
		}
	}, [])
	useEffect(()=> {
		if(!isSearch.current) {
			dispatch(pizzaGetThunk({category, page, sortBy}))
		}
		isSearch.current = false
		
	},[category, sortBy])
	useEffect(() => {
		if(isMounted.current){
			const queryString = qs.stringify({
			page,
			sortBy,
			category
		})
		navigate(`?${queryString}`)
		}
		isMounted.current = true
	}, [page, sortBy, category])

	return (
		<div className="main-body body-main">
			<div className="body-main__title">Всі піци</div>
			<div className="body-main__block">
				{preload
				? [...new Array(4)].map((_, ind) => {
				return <MyLoader key={ind}/>})
				: pizzas.map((item: pizzaCardType, id: number) => {
					return <PizzaCard key={item.id} item={item}/>
				})
			}
			</div>
		</div>
	)
}