import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import BurgerIcon from '../Icons/Burger'
import CrossIcon from '../Icons/Cross'
import styles from './Burger.module.scss'

const Burger = props => {
	const { className, close, back, ...other } = props

	return (
		<div
			className={classnames(
				styles.root,
				{
					[styles.idle]: !back && !close,
					[styles.back]: back,
					[styles.close]: close,
				},
				className,
			)}
			{...other}
		>
			<BurgerIcon className={classnames(styles.icon, styles.burgerIcon)} />
			<CrossIcon className={classnames(styles.icon, styles.crossIcon)} />
		</div>
	)
}

Burger.propTypes = {
	className: PropTypes.string,
	close: PropTypes.bool,
}

Burger.defaultProps = {
	close: false,
}

export default Burger
