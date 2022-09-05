import '../sort/sort.scss'
import { setCategory } from '../../reduxStore/Pizza/pizza.slice'
import { useAppDispatch, useAppSelector } from '../../utils/typedHooks'
import { getCategory } from '../../utils/selectors'
const categories = ['Всі','М\'ясні', 'Вегетаріанські ', 'Гриль','Гострі', 'Закриті']
export const SortCategory = () => {
const category = useAppSelector(getCategory)
const dispatch = useAppDispatch()

return (
<div className="header-categories__buttons button">
				{categories.map((item, ind) =>
				 <button key={ind}
				  onClick={() => dispatch(setCategory(ind))}
				   className={`button__category ${+category === ind? 'button__category-active' : ''}`}>{item}</button>)}
			</div>
)
}