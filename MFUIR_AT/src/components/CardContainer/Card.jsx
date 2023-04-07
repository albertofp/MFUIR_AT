import React from 'react'
import styled from 'styled-components'
import calendar from '../../assets/calendar.svg'
import filetext from '../../assets/filetext.svg'
import image from '../../assets/image.svg'
import mail from '../../assets/mail.svg'

function Card({ title, subtitle, imgname }) {
	const Card = styled.div`
		display: flex;
		justify-content: space-between;
		background: linear-gradient(to right,rgba(5, 36, 208, 0.8),rgba(5, 35, 208, 0.531));
		width: 20%;
		padding: 2vmin;
		border-radius: 5px;
		cursor: pointer;
		height:4vmin
	`

	const Info = styled.div`
		display: flex;
		flex-direction: column;
	`

	const TitleStyled = styled.h3`
		font-weight: bold;
	`

	switch (imgname) {
		case 'filetext':
			return (
				<Card>
					<img src={filetext}></img>
					<Info>
						<TitleStyled>{title}</TitleStyled>
						<p>{subtitle}</p>
					</Info>
				</Card>
			)

		case 'calendar':
			return (
				<Card>
					<img src={calendar}></img>
					<Info>
						<TitleStyled>{title}</TitleStyled>
						<p>{subtitle}</p>
					</Info>
				</Card>
			)
		case 'mail':
			return (
				<Card>
					<img src={mail}></img>
					<Info>
						<TitleStyled>{title}</TitleStyled>
						<p>{subtitle}</p>
					</Info>
				</Card>
			)
		case 'image':
			return (
				<Card>
					<img src={image}></img>
					<Info>
						<TitleStyled>{title}</TitleStyled>
						<p>{subtitle}</p>
					</Info>
				</Card>
			)
	}
	return (
		<Card>
			<img src={imgname}></img>
			<Info>
				<TitleStyled>{title}</TitleStyled>
				<p>{subtitle}</p>
			</Info>
		</Card>
	)
}

export default Card
