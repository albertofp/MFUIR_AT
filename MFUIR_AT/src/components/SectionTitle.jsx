import React from 'react'
import styled from 'styled-components'

function SectionTitle({ title }) {
	const StyledHeader = styled.header`
		display: flex;
		justify-content: flex-start;
		background: #1f3b68;
		color: #c1c2c3;
		font-weight: bold;
		padding: 1ch;
		width: 100%;
		align-items: center;
		box-sizing: border-box;
		@media screen and (max-width: 850px) {
			height: 4dvh;
			padding: 0.5ch;
		}
	`

	return <StyledHeader>{title}</StyledHeader>
}

export default SectionTitle
