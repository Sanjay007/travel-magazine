import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Card.module.scss'

const Card = props => {
	const {
		children,
		className,
		ContainerProps: { className: ContainerPropsClassName, ...ContainerPropsProp } = {},
		...other
	} = props
	return (
		<article className={classnames(styles.root, className)} {...other}>
			<div
				className={classnames(styles.cardContainer, ContainerPropsClassName)}
				{...ContainerPropsProp}
			>
				{children}
			</div>
		</article>
	)
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Card
