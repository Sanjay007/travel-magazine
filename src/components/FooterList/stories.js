import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import FooterList from '.'

const stories = storiesOf('Components/FooterList', module)

export const Default = () => (
	<FooterList horizontal={boolean('horizontal', false)} separator={text('separator', '|')}>
		<a>Privacy Policy</a>
		<a>Terms and Conditions</a>
		<a>Integrity Policy</a>
	</FooterList>
)

stories.add('Default', Default)

export default Default
