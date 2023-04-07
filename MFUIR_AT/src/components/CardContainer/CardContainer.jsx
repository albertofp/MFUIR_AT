import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function CardContainer() {
	const Container = styled.div`
		display: flex;
		justify-content: space-around;
		align-items:center;
		background: rgba(5, 36, 208, 0.8);
		height:100%;
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
