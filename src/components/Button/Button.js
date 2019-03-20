import React from 'react'
import styles from './Button.module.scss'
import classnames from 'classnames'
import { capitalize } from '../utils/helpers'


const Button = props => {
	const { children, className: classNameProp, color, fullWidth, size, ...other } = props

	const className = classnames(
		styles.root,
		{
			[styles[`color${capitalize(color)}`]]: color !== 'default'
		},
		classNameProp,
	)

	return <button className={className} {...other}>{children}</button>
}

export default Button
