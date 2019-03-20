import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Magnifier from '../Icons/Magnifier'
import styles from './Search.module.scss'
import Input from './Input'

class SearchInput extends React.Component {
	static propTypes = {
		collapsible: PropTypes.bool,
		size: PropTypes.oneOf(['s', 'm']),
		emptyAfterSearch: PropTypes.bool,
		input: PropTypes.element,
		value: PropTypes.string,
		className: PropTypes.string,
		onSearch: PropTypes.func,
		debouncedOnChange: PropTypes.func,
	}

	static defaultProps = {
		collapsible: false,
		size: 'm',
		emptyAfterSearch: false,
		input: <Input placeholder="Search" />,
		value: '',
		className: '',
		onSearch: () => {},
		debouncedOnChange: null,
	}

	constructor(props) {
		super(props)

		this.inputRef = React.createRef()

		this.state = {
			open: !this.props.collapsible,
			value: this.props.value,
			id: Math.random(), // The htmlId of the input
		}

		this.onSubmit = this.onSubmit.bind(this)
		this.onFocus = this.onFocus.bind(this)
		this.onBlur = this.onBlur.bind(this)
		this.onKeyUp = this.onKeyUp.bind(this)
		this.onInputChange = this.onInputChange.bind(this)
	}

	componentWillReceiveProps(newProps) {
		if (this.props.value !== newProps.value) {
			this.setState({ value: newProps.value })
		}
	}

	onSubmit(e) {
		e.preventDefault()

		// Call prop handler
		this.props.onSearch(e, this.state.value)

		// Empty the input if specified
		if (this.props.emptyAfterSearch) {
			this.setState({ value: '' })
			this.inputElement.blur()
		}
	}

	onKeyUp(e) {
		// escape key
		if (e.keyCode === 27) {
			this.inputElement.blur()
		}
	}

	onFocus() {
		this.setState({ open: true })
	}

	onBlur() {
		if (this.props.collapsible) {
			this.setState({ open: false })
		}
	}

	onInputChange(value) {
		this.setState({ value })
	}

	render() {
		const { size, input, className: classNameProps, debouncedOnChange } = this.props

		const className = classnames(
			styles.wrapper,
			styles[`wrapper--size-${size}`],
			{
				[styles.wrapperOpen]: this.state.open,
			},
			classNameProps,
		)

		return (
			<form onSubmit={this.onSubmit} className={className}>
				<label className={styles.label} htmlFor={this.state.id}>
					{/* <Magnifier className={styles.magnifier} /> */}
					<Magnifier fontSize="large" className={styles.magnifier} />
				</label>
				{React.cloneElement(input, {
					id: this.state.id,
					className: styles.input,
					autoComplete: 'off',
					value: this.state.value,
					onChange: this.onInputChange,
					debouncedOnChange,
					onKeyUp: this.onKeyUp,
					onFocus: this.onFocus,
					onBlur: this.onBlur,
					inputRef: this.inputRef,
				})}
			</form>
		)
	}
}

export default SearchInput
