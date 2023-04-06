import React from 'react'

function NavItem({ text }) {
	const itemStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '1vmin'
	}

	return (
		<div style={itemStyle}>
			<h4>{text}</h4>
			<h4>&gt;</h4>
		</div>
	)
}

export default NavItem
