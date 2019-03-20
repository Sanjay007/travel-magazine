import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader from './'

const stories = storiesOf('Components/Loader', module)

export const Default = () => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<Loader size={100} />
	</div>
)

stories.add('Default', Default)

export default Default
