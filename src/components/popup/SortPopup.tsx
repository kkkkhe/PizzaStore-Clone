import { useCallback, useState } from 'react'
import './popupStyles.scss'
import {setSort} from '../../reduxStore/Pizza/pizza.slice'
import { useAppDispatch } from '../../utils/typedHooks'
interface arrayInterface{
name: string
sortBy: string
}
const sortByObj:arrayInterface[] = [
	{name: 'популярности (DESC)', sortBy: 'rating'},
	{name: 'популярности (ASC)', sortBy: '-rating'},
	{name: 'цене (DESC)', sortBy: 'price'},
	{name: 'цене (ASC)', sortBy: '-price'},
	{name: 'алфавиту (DESC)', sortBy: 'title'},
	{name: 'алфавиту (ASC)', sortBy: '-title'},
]
export const SortPopup = () => {
	const [isActive, setActive] = useState<number>(0)
	const [isOpened, displayPopUp] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const onBtnClick = useCallback((item: arrayInterface, ind:number) => {
		displayPopUp(false)
		setActive(ind)
		dispatch(setSort(item.sortBy))
	}, [isOpened])
	return (
		<div className="header-categories__sorted sorted-categories">
				<div className="sorted-categories__title">Сортировка по:</div>
				<div className="sorted-categories__block">
					<button className='sorted-categories__by' onClick={() => displayPopUp(!isOpened)}>{sortByObj[isActive].name}</button>
					<div className={`sorted-categories__popup ${isOpened? 'active' : ''}`}>
					<div className="main-popup popup-main">
				{sortByObj.map((item: arrayInterface, ind:number) => <button key={ind}
				 onClick={() => onBtnClick(item, ind)}
				 className={`popup-main__button ${isActive === ind ? 'active' : ''}`}>{item.name}</button>)}
				</div>
					</div>
				</div>
		</div>
	)
}