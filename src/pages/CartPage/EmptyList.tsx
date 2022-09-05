import { findByLabelText } from "@testing-library/react"

const classes = {
display: 'flex',
width: '100%',
height: 'calc(100vh - 137px)',
justifyContent: 'center',
alignItems: 'center',
}
const wrapper ={
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}
const empty = {
	fontSize: '32px',
	fontWeight: 700,
	lineHeight: '40px',
	marginBottom: '10px'
}

const paragraph = {
	textAlign: 'center',
	fontSize: '18px',
	fontWeight: 400,
	lineHeight: '145%',
	color: '#777777',
	maxWidth: '597px',
	marginBottom: '47px'
}

export const EmptyList = () => {
	return (
		<div style={classes}>
			<div style={wrapper as React.CSSProperties}>
				<div style={empty}>Корзина пустая 😕</div>
			<div style={paragraph as React.CSSProperties}> Вероятней всего, вы не заказывали ещё пиццу.<br/>
							Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
			<div><img width={300} src="imgs/cart.png" alt="" /></div>
			</div>
			
		</div>
	)
}