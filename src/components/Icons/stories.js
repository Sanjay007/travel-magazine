import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Svg from '.'

const stories = storiesOf('Components/Icons', module)

export const Default = () => (
	<div>
		<Svg.Burger />
		<Svg.Cross />
		<Svg.Facebook />
		<Svg.Youtube />
		<Svg.Instagram />
		<Svg.TrivagoMagazineLogo />
		<Svg.TrivagoLogo />
		<Svg.Star />
		<Svg.Magnifier />
	</div>
)

stories.add('Default', Default)

export default Default
