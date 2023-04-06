import React from 'react'
import './mainHeader.css'
import NotifItem from './NotifItem'

function Header({ nomeUsuario }) {
	return (
		<div className='header'>
			<div id='user-greeting'>
				<h3>Hello, {nomeUsuario} </h3>
				<h4>How are you today?</h4>
			</div>

			<div className='notifsContainer'>
				<NotifItem
					type='events'
					value='64'
				/>
				<NotifItem
					type='messages'
					value='30'
				/>
				<NotifItem
					type='temp'
					value='25'
					location='Berlin'
				/>
			</div>
		</div>
	)
}

export default Header
