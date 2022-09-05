import { useState } from 'react'
import './pizzas.scss'
import { pizzaCardType } from '../../utils/types'
import { fillCartReducer } from '../../reduxStore/Cart/cart.slice'
import { useAppDispatch, useAppSelector } from '../../utils/typedHooks'
const types = ['тонкое', 'традиционное']

const sizes = [
{value: '26 см.', overpay: 0},
{value: '30 см.', overpay: 30},
{value: '40 см.', overpay: 110},
]

export const PizzaCard = ({item}: {item: pizzaCardType}) => {
	const dispatch = useAppDispatch()
	const carts = useAppSelector(state => state.setCart.cart)
	let [count, setCount] = useState<number>(0)
	const [activeType, setActiveType] = useState<number>(0)
	const [diameter, setDiameter] = useState<number>(0)
	const findCart = carts.find((cart) => cart.id === item.id)
	function onBtnClick(item: pizzaCardType){
		setCount(count = count + 1)
		let {id, price, title} = item
		price = price + sizes[diameter].overpay
		dispatch(fillCartReducer({id,price,image: item.imageUrl,
			title,size: sizes[diameter].value, type: types[activeType],
			count
		}))
	}

	return (
		<div key={item.id} className="body-main-card card-main">
					<div>
						<img style={{width: 260}} src={item.imageUrl} alt="" />
					</div>
					<div className="card-main__title">{item.title}</div>
					<div className="card-main__category">
						<div className="card-main__types">
						{item.types.map((cardId: number) => (
							<button key={item.id + cardId} onClick={() => {
								setActiveType(cardId)
							}}
							className={`card-main__type ${activeType === cardId ? 'card-main__type-active' : ''}`}> 
								{types[cardId]}
							</button>
						))}
						</div>
						<div className="card-main__types">
						{item.sizes.map((cardId: number, ind:number) => (
							<button key={cardId} onClick={() => {
								setDiameter(ind)
							}}
							className={`card-main__diameter ${diameter === ind ? 'card-main__diameter-active' : ''}`}> 
								{sizes[ind].value}</button>
						))}
						</div>
					</div>
					<div className="card-main__footer">
						<div className="card-main__price">от {item.price}</div>
						<button onClick={() => onBtnClick(item)} className="card-main__button">
							<span></span>Добавить {findCart && findCart.count}
							</button>
					</div>
				</div>
	)
}