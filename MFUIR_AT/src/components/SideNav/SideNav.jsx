import React from 'react'
import userdefault from '../../assets/userdefault.svg'
import NavSection from './NavSection'

function SideNav() {
	const navBarStyle = {
		display: 'flex',
		flexDirection: 'column',
		background: 'rgba(14, 40, 186, 0.8)',
		gap: '2vmin',
		height: '100dvh'
	}

	const nameCardStyle = {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		background: 'rgba(0, 0, 18, 0.23)',
		padding: '1vmin'
	}

	const iconStyle = {
		width: '5vmin',
		height: '5vmin'
	}

	const titleStyle = {
		verticalAlign: 'middle',
		fontWeight: 600,
		marginTop: '1vmin',
		marginLeft: '1vmin'
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
				<h3>Alberto Pluecker</h3>
			</div>
			<NavSection
				name='DOCUMENTS'
				item1='Insurance'
				item2='Travel'
				item3='Taxes'
			/>
			<NavSection
				name='MESSAGES'
				item1='Inbox'
				item2='Unread'
				item3='Archives'
			/>
			<NavSection
				name='PHOTO ALBUM'
				item1='Vacation'
				item2='Anniversary'
				item3='University'
			/>
			<NavSection
				name='STATISTICS'
				item1='Finances'
				item2='Call Stats'
				item3='Trip Logs'
			/>
			<NavSection
				name='EVENTS'
				item1='Weddings'
				item2='Playdates'
				item3='Networking'
			/>
		</nav>
	)
}

export default SideNav
