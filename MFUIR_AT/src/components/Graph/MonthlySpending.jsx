import React from 'react'
import SectionTitle from '../SectionTitle'
import chart from '../../assets/chart.svg'
import styles from './MonthlySpending.module.css'

function MonthlySpending() {
	return (
		<div className={styles.sectionContainer}>
			<SectionTitle title='Monthly Spending' />
			<div className={styles.subsectionContainer}>
				<div className={styles.graphContainer}>
					<img
						src={chart}
						className={styles.img}
					></img>
				</div>
			</div>
		</div>
	)
}

export default MonthlySpending
