import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Footer.module.scss'

const Footer = props => {
	const { children, className, ...other } = props
	return (
		<footer className={classnames(styles.root, className)} {...other}>
			{children}
		</footer>
	)
}

Footer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Footer
