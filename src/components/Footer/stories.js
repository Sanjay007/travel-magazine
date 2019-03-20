import React from 'react'
import { storiesOf } from '@storybook/react'
import InstagramIcon from '../Icons/Instagram'
import YoutubeIcon from '../Icons/Youtube'
import Typography from '../Typography'
import IconButton from '../IconButton'
import FooterList from '../FooterList'
import FacebookIcon from '../Icons/Facebook'
import Footer from '.'

const stories = storiesOf('Components/Footer', module)

export const Default = () => (
	<Footer>
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				maxWidth: 200,
				marginRight: 'auto',
				marginLeft: 'auto',
				textAlign: 'center',
			}}
		>
			<IconButton
				href="#"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FacebookIcon fontSize="large" />
			</IconButton>

			<IconButton
				href="#"
				target="_blank"
				rel="noopener noreferrer"
			>
				<InstagramIcon fontSize="large" />
			</IconButton>

			<IconButton
				href="https://www.youtube.com/user/ginatricot"
				target="_blank"
				rel="noopener noreferrer"
			>
				<YoutubeIcon fontSize="large" />
			</IconButton>
		</div>

		<div>
			<FooterList horizontal separator="|">
				<Typography component="a" href="#">
					Privacy Policy
				</Typography>

				<Typography component="a" href="#">
					Terms and Conditions
				</Typography>

				<Typography component="a" href="#">
					Integrity Policy
				</Typography>
			</FooterList>
		</div>
	</Footer>
)

stories.add('Default', Default)

export default Default
