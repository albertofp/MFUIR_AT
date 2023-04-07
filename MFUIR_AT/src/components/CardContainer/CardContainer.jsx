import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function CardContainer() {
	const Container = styled.div`
		display: flex;
		justify-content: space-around;
		align-items:center;
		background: linear-gradient(to right,rgba(5, 36, 208, 0.8),rgba(5, 35, 208, 0.531));
		height:100%;
		@media screen and (max-width:850px) {
			overflow-x:scroll;
			box-sizing:border-box;
		}
	`

	return (
		<Container>
			<Card
				title='New Document'
				subtitle='Europe Trip'
				imgname='filetext'
			/>
			<Card
				title='Upcoming Event'
				subtitle='Chili Cookoff'
				imgname='calendar'
			/>
			<Card
				title='Recent Emails'
				subtitle='+10'
				imgname='mail'
			/>
			<Card
				title='New Album'
				subtitle='House Concert'
				imgname='image'
			/>
		</Container>
	)
}

export default CardContainer
