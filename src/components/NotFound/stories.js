import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import NotFound from './'

const stories = storiesOf('Components/NotFound', module)

export const Default = () => (
	<NotFound>
		<Typography variant="h1">Error 404</Typography>
		<Typography variant="body1">Sorry, we couldn't find what you're looking for.</Typography>
	</NotFound>
)

stories.add('Default', Default)

export default Default
