import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SearchInput from './Search'
import Input from './'

storiesOf('Components/Input/Input', module)
	.add('default', () => <Input onChange={action('onChange')} />)
	.add('debounced', () => <Input debouncedOnChange={action('debouncedOnChange')} />)
	.add('disabled', () => <Input disabled value="I'm disabled" />)
	.add('textarea', () => <Input component={<textarea />} />)

storiesOf('Components/Input/Search', module)
	.add('default', () => <SearchInput onSearch={action('onSearch')} />)
	.add('collapsible', () => <SearchInput collapsible emptyAfterSearch />)
	.add('debounced', () => <SearchInput debouncedOnChange={action('debouncedOnSearch')} />)
