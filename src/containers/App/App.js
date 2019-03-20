import React from 'react'
import { Link } from 'react-router-dom'
import LoaderStories from '../../components/Loader/stories'
import AppBase from '../../containers/AppBase'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Typography from '../../components/Typography'
import Media from '../../components/Media'
import Card from '../../components/Card'
import Overlay from '../../components/Overlay'
import Gallery from '../../components/Gallery'
import Fetch from '../Fetch'
import { MyApiProvider, MyApi } from '../API'
import CardTitle from '../../components/CardTitle'
import styles from './App.module.scss'

const App = () => {
	return (
		<MyApiProvider>
			<AppBase>
				<Fetch path={'/frontpage_data'} from={MyApi}>
					{({ data, fetching, error }) => {
						if (fetching) {
							return <LoaderStories />
						}
						return (
							<React.Fragment>
								{fetching ? (
									<section style={{ padding: '150px 0' }}>
										<LoaderStories />
									</section>
								) : (
									<React.Fragment>
										<section style={{ padding: '150px 0' }}>
											<Container>
												<Grid container spacing={16}>
													{data.featured_posts.map((featured, index) =>
														index === 0 ? (
															<Grid
																item
																xs={12}
																style={{
																	display: 'flex',
																	marginBottom: 30,
																	padding: 0,
																}}
																key={featured.id}
															>
																<div
																	className={
																		styles.featuredContent
																	}
																>
																	<Typography
																		variant="body2"
																		className={
																			styles.storyOfToday
																		}
																	>
																		STORY OF THE DAY
																	</Typography>
																	<Typography
																		variant="h2"
																		className={
																			styles.featuredTitle
																		}
																	>
																		{featured.card_title ||
																			featured.title}
																	</Typography>
																	<Typography
																		variant="body3"
																		className={
																			styles.featuredBody
																		}
																	>
																		{featured.excerpt}
																	</Typography>
																	<Link
																		to={`/post/${
																			featured.slug
																		}`}
																	>
																		<Typography
																			variant="cite"
																			className={
																				styles.featuredReadMore
																			}
																		>
																			Read More
																		</Typography>
																	</Link>
																</div>
																<Media
																	component="img"
																	src={featured.thumbnail.url}
																	alt={featured.thumbnail.alt}
																	className={styles.featuredMedia}
																/>
															</Grid>
														) : (
															<Grid
																item
																xs={12}
																md={4}
																lg={4}
																xl={4}
																key={featured.id}
															>
																<Link to={`/post/${featured.slug}`}>
																	<Card
																		className={styles.featured}
																	>
																		<Media
																			component="img"
																			src={
																				featured.thumbnail
																					.url
																			}
																			alt={
																				featured.thumbnail
																					.alt
																			}
																		/>
																		<Overlay
																			variant={
																				index % 2 === 0
																					? 'indigo'
																					: 'blue'
																			}
																		>
																			<Typography
																				variant="body3"
																				className={
																					styles.category
																				}
																			>
																				{
																					featured
																						.taxonomies
																						.destinations[0]
																						.name
																				}
																			</Typography>

																			<CardTitle
																				style={{
																					fontSize:
																						'1.3em',
																					fontWeight: 700,
																					lineHeight: 1.2,
																					marginBottom:
																						' 0.75em',
																					textDecoration:
																						'none',
																				}}
																			>
																				{featured.cardTitle ||
																					featured.title}
																			</CardTitle>
																			<Typography
																				variant="cite"
																				className={
																					styles.readMore
																				}
																			>
																				Read More
																			</Typography>
																		</Overlay>
																	</Card>
																</Link>
															</Grid>
														),
													)}
												</Grid>
											</Container>
										</section>
										<section
											style={{
												backgroundColor: '#1f1f1f',
												padding: '50px 0',
												color: '#e8e8e8',
											}}
										>
											<Container>
												<Typography
													variant="h3"
													className={styles.latestTitle}
												>
													Trending Now
												</Typography>
												<Grid container spacing={32}>
													{SingleLatestPost(data.latest_posts)}
													<Grid item xs={12} md={12} lg={3} xl={3}>
														<Grid container spacing={16}>
															{DoubleLatestsPost(data.latest_posts)}
														</Grid>
													</Grid>
												</Grid>
												<Grid container spacing={16}>
													{OtherLatestPosts(data.latest_posts)}
												</Grid>
											</Container>
										</section>
										<section style={{ padding: '50px 0' }}>
											<Container>
												<Typography
													variant="h3"
													style={{ marginTop: 0, marginBottom: 30 }}
												>
													{data.home_destinations.title}
												</Typography>

												<Gallery>
													{data.home_destinations.destinations.map(
														(hostDestination, index) => {
															return (
																<article
																	key={hostDestination.name}
																	style={{
																		backgroundImage: `url(${
																			hostDestination
																				.thumbnail.url
																		})`,
																	}}
																>
																	<Link
																		to={`/destinations/${hostDestination.name.toLowerCase()}`}
																	>
																		<Overlay
																			style={{
																				overflow: ' hidden',
																			}}
																		>
																			<CardTitle
																				style={{
																					fontSize: '1em',
																				}}
																			>
																				{
																					hostDestination.name
																				}
																			</CardTitle>
																		</Overlay>
																	</Link>
																</article>
															)
														},
													)}
												</Gallery>
											</Container>
										</section>
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

export default App

const SingleLatestPost = posts => {
	return posts.map(
		(post, index) =>
			index === 0 && (
				<Grid item xs={12} md={12} lg={9} xl={9} key={post.id}>
					<Link to={`/post/${post.slug}`} style={{ color: 'inherit' }}>
						<Media
							component="img"
							src={post.thumbnail.url}
							alt={post.thumbnail.alt}
							className={styles.bigMedia}
						/>
						<Typography
							variant="h3"
							style={{
								textTransform: 'initial',
								fontWeight: 600,
							}}
						>
							{post.cardTitle || post.title}
						</Typography>
						<Typography variant="body3" style={{ fontSize: 18 }}>
							{post.excerpt}
						</Typography>
					</Link>
				</Grid>
			),
	)
}

const DoubleLatestsPost = posts => {
	return posts.map(
		(post, index) =>
			[1, 2].includes(index) && (
				<Grid item xs={12} md={6} lg={12} xl={12} key={post.id}>
					<Link to={`/post/${post.slug}`}>
						<Card
							ContainerProps={{
								style: {
									minHeight: 215,
								},
							}}
							key={post.id}
						>
							<Media
								component="img"
								src={post.thumbnail.url}
								alt={post.thumbnail.alt}
								style={{
									maxHeight: '100%',
									height: 215,
									objectFit: 'cover',
								}}
							/>
							<Overlay variant="blue">
								<Typography variant="body3" className={styles.category}>
									{post.taxonomies.destinations[0].name}
								</Typography>
								<CardTitle style={{ fontSize: '1.1em' }}>
									{post.cardTitle || post.title}
								</CardTitle>
							</Overlay>
						</Card>
					</Link>
				</Grid>
			),
	)
}

const OtherLatestPosts = posts => {
	return posts.map(
		(post, index) =>
			index > 2 && (
				<Grid item xs={12} md={4} lg={4} xl={4} key={post.id}>
					<Link to={`/post/${post.slug}`}>
						<Card
							ContainerProps={{
								style: {
									minHeight: 215,
								},
							}}
						>
							<Media
								component="img"
								src={post.thumbnail.url}
								alt={post.thumbnail.alt}
								style={{
									maxHeight: '100%',
									height: 215,
									objectFit: 'cover',
								}}
							/>
							<Overlay variant="blue">
								<Typography variant="body3" className={styles.category}>
									{post.taxonomies.destinations[0].name}
								</Typography>
								<CardTitle style={{ fontSize: '1.1em' }}>
									{post.cardTitle || post.title}
								</CardTitle>
							</Overlay>
						</Card>
					</Link>
				</Grid>
			),
	)
}
