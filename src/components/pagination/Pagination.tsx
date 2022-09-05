import './pagination.scss'
import {pizzaGetThunk} from '../../reduxStore/Pizza/pizza.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/typedHooks'
import { getPage } from '../../utils/selectors'
import { useEffect, useRef } from 'react'

export const Pagination = () => {
	const dispatch = useAppDispatch()
	const sortBy = useAppSelector(state => state.getAllPizzas.sortBy)
	const category = useAppSelector(state => state.getAllPizzas.category)
	const page = useAppSelector(getPage)
	const PAGESIZE = 3
	const ref = useRef<any>(null)
	let pagesArr = []
	for(let i = 1; i <= PAGESIZE; i++){
		pagesArr.push(i)
	}
	useEffect(() => {
		ref.current?.scrollIntoView();
	  }, [page]);
	const onPageChange = (page:number, sortBy:string, category: number) => {
			dispatch(pizzaGetThunk({sortBy, category, page}))
	}
	return (
		<div ref={ref} className='main-block block-main'>
			{pagesArr.map(item => {
				return <button onClick={()=>
					 onPageChange(item, sortBy, category)}
					 className={`block-main-page ${item  === +page? "active" : ''}`} 
					 key={item}> {item} </button>
			})}
		</div>
	)
}