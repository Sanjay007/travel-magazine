import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './NotFound.module.scss'

const NotFound = props => {
	const { className, children, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

NotFound.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default NotFound
