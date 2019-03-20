import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import '../src/components/styles/global.module.scss'

const components = require.context('../src/components', true, /\/stories\.js$/)
const pages = require.context('../src/pages', true, /\/stories\.js$/)

function loadStories() {
	components.keys().forEach(filename => components(filename))
	pages.keys().forEach(filename => pages(filename))
}

addDecorator(withKnobs)
configure(loadStories, module)
