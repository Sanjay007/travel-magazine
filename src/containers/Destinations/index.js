import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import Gallery from '../../components/Gallery'
import Overlay from '../../components/Overlay'
import CardTitle from '../../components/CardTitle'

const Destinations = props => {
	const { destinations, parent } = props

	let content

	if (destinations.length > 0) {
		content = (
			<section style={{ padding: '150px 0' }}>
				<Container>
					<Gallery>
						{destinations.map(destination => {
							return (
								<article
									key={destination.name}
									style={{
										backgroundImage: `url(${destination.thumbnail.url})`,
									}}
								>
									<Link to={`/destinations/${parent}/${destination.slug}`}>
										<Overlay style={{ overflow: ' hidden' }}>
											<CardTitle style={{ fontSize: '1em' }}>
												{destination.name}
											</CardTitle>
										</Overlay>
									</Link>
								</article>
							)
						})}
					</Gallery>
				</Container>
			</section>
		)
	}
	return content || null
}

export default Destinations
