import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import Button from '.'

const stories = storiesOf('Components/Button', module)

export const Default = () => (
	<Button
		color={select(
			'color',
			{
				default: 'default',
				primary: 'primary',
				secondary: 'secondary',
			},
			'default',
		)}
	>
		{text('Title', 'Just a Button')}
	</Button>
)

stories.add('Default', Default)

export default Default
