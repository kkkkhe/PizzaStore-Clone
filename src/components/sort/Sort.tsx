import { SortPopup } from '../popup/SortPopup'
import { SortCategory } from '../sortCategory/SortCategory'
import './sort.scss'

export const Sort = () => {
	return (
		<div className="categories-header header-categories">
			<SortCategory/>
			<SortPopup/>
		</div>
	)
}
