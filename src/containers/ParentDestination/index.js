import React from 'react'
import { Link } from 'react-router-dom'
import AppBase from '../AppBase'
import Container from '../../components/Container'
import Media from '../../components/Media'
import Grid from '../../components/Grid'
import Card from '../../components/Card'
import Fetch from '../Fetch'
import { MyApiProvider, MyApi } from '../API'
import LoaderStories from '../../components/Loader/stories'
import Typography from '../../components/Typography'
import Destinations from '../Destinations'
import styles from './styles.module.scss'

const ParentDestination = props => {
	const { name } = props.match.params
	console.log('ParentDestination', props)

	return (
		<MyApiProvider>
			<AppBase>
				<Fetch path={`/destination/${name}`} from={MyApi}>
					{({ data, fetching, error }) => {
						if (fetching) {
							return <LoaderStories />
						}
						return (
							<React.Fragment>
								{fetching ? (
									<section style={{ paddingTop: 110 }}>
										<LoaderStories />
									</section>
								) : (
									<React.Fragment>
										<section style={{ paddingTop: 110 }}>
											<div className={styles.bannerWraper}>
												<Media
													src={data.thumbnail.url || ''}
													alt={data.thumbnail.alt}
													className={styles.media}
												/>
												<Container>
													<Typography
														variant="h2"
														className={styles.bannerTitle}
													>
														{data.cardTitle || data.title}
													</Typography>
												</Container>
											</div>
										</section>
										<Fetch path={`/destination_page_data/${name}`} from={MyApi}>
											{({ data: destinations, fetching, error }) => {
												if (fetching) {
													return <LoaderStories />
												}
												return (
													<React.Fragment>
														<section style={{ paddingTop: 80 }}>
															<Container>
																<Grid container spacing={16}>
																	{destinations.top_posts.map(
																		(post, index) => (
																			<Grid
																				item
																				xs={12}
																				md={4}
																				lg={4}
																				xl={4}
																				key={post.id}
																				style={{
																					marginBottom: 20,
																				}}
																			>
																				<Link
																					to={`/post/${
																						post.slug
																					}`}
																				>
																					<Card>
																						<Media
																							component="img"
																							src={
																								post
																									.thumbnail
																									.url
																							}
																							alt={
																								post
																									.thumbnail
																									.alt
																							}
																						/>
																					</Card>
																					<Typography variant="h6">
																						{post.title}
																					</Typography>
																					<Typography variant="cite">
																						Read More
																					</Typography>
																				</Link>
																			</Grid>
																		),
																	)}
																</Grid>
															</Container>
														</section>
														<Destinations
															parent={name}
															destinations={
																destinations.destination_children_data
															}
														/>
													</React.Fragment>
												)
											}}
										</Fetch>
									</React.Fragment>
								)}
							</React.Fragment>
						)
					}}
				</Fetch>
			</AppBase>
		</MyApiProvider>
	)
}

export default ParentDestination
