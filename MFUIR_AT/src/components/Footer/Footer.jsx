import React from 'react'
import styled from 'styled-components'

function Footer() {
	const StyledFooter = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: small;
		font-weight: bold;
		height: 100%;
		padding: 2ch;
		box-sizing: border-box;
		border-top:1px solid rgba(5, 36, 208, 0.8);
		background: linear-gradient(
			to right,
			rgba(5, 36, 208, 0.8),
			rgba(5, 35, 208, 0.531)
		);
	`
	return (
		<StyledFooter>
			<p>2023</p>
			<p>Alberto F. Pluecker</p>
		</StyledFooter>
	)
}

export default Footer
