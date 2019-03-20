import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Overlay.module.scss'

const Overlay = props => {
	const { children, className, variant, ...other } = props
	return (
		<div
			className={classnames(
				styles.root,
				{
					[styles[String(variant)]]: variant,
				},
				className,
			)}
			{...other}
		>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

Overlay.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Overlay
