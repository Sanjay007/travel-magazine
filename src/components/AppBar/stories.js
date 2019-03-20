import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Toolbar from '../Toolbar'
import Container from '../Container'
import AppBar from '.'

const stories = storiesOf('Components/AppBar', module)
export const colorOptions = ['inherit', 'default']
export const positionOptions = ['fixed', 'absolute', 'static']

export const Default = () => (
	<div style={{ height: '100vh', background: '#eee' }}>
		<AppBar
			position={select('position', positionOptions, 'fixed')}
			color={select('color', colorOptions, 'inherit')}
			style={{ background: '#fff' }}
		>
			<Toolbar>
				<Container style={{ display: 'flex' }}>
					<button type="button">Burger</button>

					<div style={{ flexGrow: 1, textAlign: 'center' }}>
						<img style={{ width: '115px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2000px-Trivago.svg.png" />
					</div>

					<button type="button">Log in</button>
				</Container>
			</Toolbar>
		</AppBar>
	</div>
)

stories.add('Default', Default)

export default Default
