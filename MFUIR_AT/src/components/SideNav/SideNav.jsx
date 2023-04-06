import React from 'react'
import userdefault from '../../assets/userdefault.svg'

function SideNav() {
	const navBarStyle = {
		display: 'flex',
		flexDirection: 'column',
		background: 'rgba(0, 0, 17, 0.46)',
		gap: '2vmin',
		height: '100dvh'
	}

	const nameCardStyle = {
		display: 'flex',
		background: 'rgba(0, 0, 18, 0.23)'
	}

	const iconStyle = {
		width: '10vmin',
		height: '10vmin'
	}

	const titleStyle = {
		textAlign: 'center'
	}

	return (
		<nav style={navBarStyle}>
			<div style={titleStyle}>UxPro</div>
			<div style={nameCardStyle}>
				<img
					alt='user-icon'
					src={userdefault}
					style={iconStyle}
				></img>
			</div>
		</nav>
	)
}

export default SideNav
