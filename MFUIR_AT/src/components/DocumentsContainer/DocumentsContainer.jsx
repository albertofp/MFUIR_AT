import React from 'react'
import SectionTitle from '../SectionTitle'
import styles from './DocumentsContainer.module.css'
import Document from './Document'

function DocumentsContainer() {
	return (
		<>
			<SectionTitle title='Documents' />
			<div className={styles.mainContainer}>
				<div className={styles.documentsContainer}>
					<Document
						filename='file1'
						date='10/05/2023'
					/>
					<Document
						filename='file2'
						date='10/05/2023'
					/>
					<Document
						filename='file3'
						date='10/05/2023'
					/>
					<Document
						filename='file4'
						date='10/05/2023'
					/>
				</div>
			</div>
		</>
	)
}

export default DocumentsContainer
