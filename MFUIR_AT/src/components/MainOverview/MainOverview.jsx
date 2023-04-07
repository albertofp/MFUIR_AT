import React from 'react'
import OverviewCard from './OverviewCard'
import SectionTitle from '../SectionTitle'
import styles from './MainOverview.module.css'

function MainOverview() {
	return (
		<>
			<SectionTitle title='Your Events' />
			<div className={styles.mainContainer}>
				<OverviewCard
					type='birthday'
					title='Jonathan G'
					subtitle='Going away party at 8:30. Bring a friend!'
					subsubtitle='1404 Gibston St'
					date='today'
				/>
				<OverviewCard
					type='travel'
					title='Matthew H'
					subtitle='Flying to Bora Bora at 4:30pm'
					subsubtitle='Delta, Gate 27B'
					date='Tuesday'
				/>
				<OverviewCard
					type='book'
					title='National Institute of Science'
					subtitle='Join the institute for an in-depth look at Stephen Hawking'
					subsubtitle='7.30pm, Carnegie Center for Science'
					date='Thursday'
				/>
				<OverviewCard
					type='heart'
					title='24th Annual Heart Ball'
					subtitle='Join us and contribute to your favorite local charity.'
					subsubtitle='6:45pm, Austin Convention Ctr'
					date='Friday'
				/>
				<OverviewCard
					type='heart'
					title='Little Rock Air Show'
					subtitle='See the Blue Angels fly with roaring thunder'
					subsubtitle='11:00pm, Jacksonville Airforce Base'
					date='Saturday'
				/>
			</div>
		</>
	)
}

export default MainOverview
