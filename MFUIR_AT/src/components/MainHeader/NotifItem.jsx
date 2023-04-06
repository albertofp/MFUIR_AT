import React from 'react'
import './mainHeader.css'

function NotifItem({ type, value, location = '' }) {
	if ( type  === 'temp') {
		return (
			<div className='notif-item'>
				<h3>{value}°</h3>
				<p>{location}</p>
			</div>
		)
	} else
		return (
			<div className='notif-item'>
				<h3>{value}</h3>
				<p>{type}</p>
			</div>
		)
}

export default NotifItem
