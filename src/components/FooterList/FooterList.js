import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './FooterList.module.scss'

const FooterList = props => {
	const { children, className: classNameProp, horizontal, separator, ...other } = props

	const className = classnames(styles.root, { [styles.horizontal]: horizontal }, classNameProp)

	return (
		<ul className={className} {...other}>
			{React.Children.map(children, (child, index) => {
				const hasSeparator = separator && index > 0
				return (
					<>
						{hasSeparator && <li role="separator">{separator}</li>}
						<li>{child}</li>
					</>
				)
			})}
		</ul>
	)
}

FooterList.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	separator: PropTypes.node,
}

FooterList.uiName = 'FooterList'

export default FooterList
