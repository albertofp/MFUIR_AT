import React from 'react'
import NavItem from './NavItem'

function NavSection({ name, item1, item2, item3 }) {
	const sectionStyle = {
		fontSize: '.75 em',
		cursor: 'pointer',
		fontWeight: 600
	}

	return (
		<div style={{ marginLeft: '1vmin' }}>
			<h3 style={sectionStyle}>{name}</h3>
			<NavItem text={item1} />
			<NavItem text={item2} />
			<NavItem text={item3} />
		</div>
	)
}

export default NavSection
