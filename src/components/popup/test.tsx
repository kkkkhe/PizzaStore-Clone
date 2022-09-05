import { useEffect } from "react"


export const Test = (props: any) => {
	useEffect(() => {
		console.log('update')
	}, [props.s])
	return (
		<div>asdfsdf</div>
	)
}