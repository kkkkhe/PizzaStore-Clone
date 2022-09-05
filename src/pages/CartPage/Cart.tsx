import { useAppDispatch, useAppSelector } from "../../utils/typedHooks"
import { CardList } from "./CardList"
import { EmptyList } from "./EmptyList"
import { clearBucket } from "../../reduxStore/Cart/cart.slice"
import { FooterCart } from "./FooterCardPage"
import './cartStyle.scss'
import { MainCartContainer, TopHeaderStyles } from "../../utils/styles/CartStyles"
export const Cart = () => {
	const dispatch = useAppDispatch()
	const cart = useAppSelector(state => state.setCart.cart)
	return (
		<>
		{cart.length 
		? <MainCartContainer>
			<TopHeaderStyles>
				<div className='cart'>
				<svg width={30} height={30} className="icon">
 					 <use xlinkHref="#cart"></use>
				</svg>
					Корзина
				</div>
				<button onClick={() => dispatch(clearBucket())} className="clearCart">
				<svg width={25} height={25} className="icon">
 					 <use xlinkHref="#bucket"></use>
				</svg>
					Очистить корзину
				</button>
			</TopHeaderStyles>
			{cart.map((item:any) => <CardList key={item.id + item.type + item.size} item={item}/>)}
			<FooterCart/>
			
			</MainCartContainer>
		: <EmptyList/>
		}
		</>
	)
}