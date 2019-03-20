import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import IconButton from '.'

const stories = storiesOf('Components/IconButton', module)

export const Default = () => <IconButton disabled={boolean('disabled', false)}>ICON</IconButton>

stories.add('Default', Default)

export default Default
