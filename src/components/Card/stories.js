import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import ButtonBase from '../ButtonBase'
import Card from '.'

const stories = storiesOf('Components/Card', module)

export const Default = () => (
	<Card>
		<header>
			<Typography variant="h4">West Palm Beach United States</Typography>
			<Typography variant="cite">Mohammed Daea</Typography>
		</header>
		<section>
			<Typography variant="body1">
				Enim officia duis veniam consectetur ullamco ipsum anim velit. Commodo aliquip ipsum
				excepteur aute sit tempor eiusmod dolore sint. Duis pariatur irure eu esse
				incididunt magna tempor cupidatat dolore adipisicing ullamco labore minim.
			</Typography>
		</section>
		<footer>
			<ButtonBase>READ MORE</ButtonBase>
		</footer>
	</Card>
)

stories.add('Default', Default)

export default Default
