import React from 'react'
import Header from './Header'
import './mainHeader.css'
import Searchbar from './Searchbar'

function MainHeader() {
	return (
		<div id='MainHeader'>
			<Searchbar />
			<Header nomeUsuario='Alberto' />
		</div>
	)
}

export default MainHeader
