import React from 'react'
import './mainHeader.css'
import userdefault from '../../assets/userdefault.svg'

function Searchbar() {
	return (
		<>
			<div className='searchContainer'>
				<input
					type='text'
					placeholder='Search...'
					className='searchinput'
				></input>
				<img
					alt='user-icon'
					src={userdefault}
					className='user-icon'
				></img>
			</div>
		</>
	)
}

export default Searchbar
