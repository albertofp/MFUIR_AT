import React from 'react'
import Header from './Header'
import './mainHeader.css'
import Searchbar from './Searchbar'

function MainHeader() {
	return (
		<>
			<Searchbar />
			<Header nomeUsuario='Alberto' />
		</>
	)
}

export default MainHeader
