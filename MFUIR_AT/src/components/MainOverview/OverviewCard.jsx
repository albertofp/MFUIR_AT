import React from 'react'
import styles from './OverviewCard.module.css'
import gift from '../../assets/gift.svg'
import heart from '../../assets/heart.svg'
import map from '../../assets/map.svg'
import book from '../../assets/book.svg'

function OverviewCard({ title, subtitle, subsubtitle, type, date }) {
	switch (type) {
		case 'birthday':
			return (
				<div className={styles.cardContainer}>
					<div className={styles.date}>{date}</div>
					<img
						src={gift}
						className={styles.img}
					></img>
					<div className={styles.title}>{title}</div>
					<div className={styles.subtitle}>{subtitle}</div>
					<div className={styles.subsubtitle}>{subsubtitle}</div>
				</div>
			)

		case 'travel':
			return (
				<div className={styles.cardContainer}>
					<div className={styles.date}>{date}</div>
					<img
						src={map}
						className={styles.img}
					></img>
					<div className={styles.title}>{title}</div>
					<div className={styles.subtitle}>{subtitle}</div>
					<div className={styles.subsubtitle}>{subsubtitle}</div>
				</div>
			)

		case 'heart':
			return (
				<div className={styles.cardContainer}>
					<div className={styles.date}>{date}</div>
					<img
						src={heart}
						className={styles.img}
					></img>
					<div className={styles.title}>{title}</div>
					<div className={styles.subtitle}>{subtitle}</div>
					<div className={styles.subsubtitle}>{subsubtitle}</div>
				</div>
			)

		case 'book':
			return (
				<div className={styles.cardContainer}>
					<div className={styles.date}>{date}</div>
					<img
						src={book}
						className={styles.img}
					></img>
					<div className={styles.title}>{title}</div>
					<div className={styles.subtitle}>{subtitle}</div>
					<div className={styles.subsubtitle}>{subsubtitle}</div>
				</div>
			)
	}
}

export default OverviewCard
