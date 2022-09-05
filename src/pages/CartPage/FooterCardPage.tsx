import { useAppSelector } from "../../utils/typedHooks"
import { getTotalSum, getTotalCount } from "../../utils/selectors"
import { useNavigate } from "react-router-dom"

const footer = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '40px',
	},
	totalCountStyle: {
		fontWeight: 400,
		fontSize: '22px',
		lineHeight: '27px',
	},
}

const buttons = {
	home:{
		padding: '16px 22px',
		fontSize: '16px',
		color: '#CACACA',
		border: '1px solid #CACACA',
		borderRadius: '30px',
	},
	pay:{
		padding: '16px 22px',
		fontSize: '16px',
		color: '#fff',
		backgroundColor: '#FE5F1E',
		borderRadius: '30px',
		fontWeight: 700,
	}
}

export const FooterCart = () => {
	const totalSum = useAppSelector(getTotalSum)
	const totalCount = useAppSelector(getTotalCount)
	const navigate = useNavigate()

	function onBtnClick(){
		navigate(-1)
	}
	return (
		<div >
			<div style={footer.container}>
				<div style={footer.totalCountStyle}>Всего пицц: {totalCount} шт.</div>
				<div style={footer.totalCountStyle}>Сумма заказа: {totalSum} ₽</div>	
			</div>
			<div style={footer.container}>
				<button onClick={onBtnClick} style={buttons.home}>Вернуться назад</button>
				<button style={buttons.pay}>Оплатить сейчас</button>
			</div>
		</div>
	)
}