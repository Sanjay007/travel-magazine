import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Gallery.module.scss'

const Gallery = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

Gallery.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Gallery
