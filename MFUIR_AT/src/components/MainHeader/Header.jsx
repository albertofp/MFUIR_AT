import React from 'react'
import './mainHeader.css'

function Header({ nomeUsuario }) {
	return (
		<div className='header'>
			<div id='user-greeting'>
				<h3>Hello, {nomeUsuario} </h3>
				<h4>How are you today?</h4>
			</div>

			<div class='notifs-container'>
				<h4>Test</h4>
			</div>
		</div>
	)
}

export default Header
