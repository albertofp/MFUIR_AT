import React from 'react'
import filetext from '../../assets/filetext.svg'
import styles from './Document.module.css'

function Document({ filename, date }) {
	return (
		<div className={styles.document}>
			<img
				src={filetext}
				alt='document thumbnail'
                className={styles.img}
			></img>
			<h4 className={styles.filename}>{filename}</h4>
			<p className={styles.date}>{date}</p>
		</div>
	)
}

export default Document
