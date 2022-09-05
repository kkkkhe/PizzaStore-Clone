import styled from "styled-components";
export const MainCartContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 94px;
`

export const TopHeaderStyles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 30px;
border-bottom: 1px solid #F4F4F4;
`
export const PizzaCardStyle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 0;
&:not(:last-child){
	border-bottom: 1px solid #F4F4F4;
}
`