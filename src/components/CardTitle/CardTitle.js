import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Typography from '../Typography'
import styles from './CardTitle.module.scss'

const CardTitle = props => {
	const { className, children, ...other } = props
	return (
		<Typography variant="h4" className={classnames(styles.root, className)} {...other}>
			{children}
		</Typography>
	)
}

CardTitle.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default CardTitle
