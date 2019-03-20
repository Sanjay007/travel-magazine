import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import classnames from 'classnames'
import styles from './Input.module.scss'

class Input extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		onChange: PropTypes.func,
		debouncedOnChange: PropTypes.func,
		disabled: PropTypes.bool,
		fullWidth: PropTypes.bool,
		inputRef: PropTypes.object,
		debounceWait: PropTypes.number,
		type: PropTypes.string,
		component: PropTypes.element,
	}

	static defaultProps = {
		className: '',
		onChange: () => {},
		debouncedOnChange: null,
		inputRef: null,
		debounceWait: 500,
		type: 'text',
		component: <input />,
	}

	constructor(props) {
		super(props)
		if (this.props.debouncedOnChange) {
			this.debouncedOnChange = debounce(
				value => this.props.debouncedOnChange(value),
				this.props.debounceWait,
			)
		}
	}
	render() {
		const {
			className: classNameProp,
			component,
			debouncedOnChange,
			debounceWait,
			disabled,
			fullWidth,
			inputRef,
			onChange,
			type,
			...other
		} = this.props

		const className = classnames(
			styles.input,
			{
				[styles.disabled]: disabled,
				[styles.fullWidth]: fullWidth,
			},
			classNameProp,
		)

		return React.cloneElement(component, {
			ref: inputRef,
			type,
			disabled,
			onChange: event => {
				// Call both the onChange and debouncedOnChange handler
				onChange(event.target.value, event)
				if (debouncedOnChange) {
					this.debouncedOnChange(event.target.value)
				}
			},
			className: className,
			...other,
		})
	}
}
export default Input
