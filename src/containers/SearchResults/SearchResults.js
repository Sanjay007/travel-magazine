import React from 'react'
import { Link } from 'react-router-dom'
import AppBase from '../../containers/AppBase'
import LoaderStories from '../../components/Loader/stories'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Typography from '../../components/Typography'
import Media from '../../components/Media'
import Card from '../../components/Card'
import Fetch from '../Fetch'
import { MyApi } from '../API'

const SearchResults = props => {
	const { query } = props.match.params
	console.log('query', props.match.params.query)
	return (
		<AppBase>
			<Fetch path={`/search_posts?search=${query}`} from={MyApi}>
				{({ data, fetching, error }) => {
					return (
						<section style={{ padding: '150px 0' }}>
							{fetching ? (
								<LoaderStories />
							) : (
								<Container>
									<Grid container>
										<Grid item xs={12} style={{ marginBottom: 100 }}>
											{query ? (
												<React.Fragment>
													<Typography variant="h2">
														Search Results for : {query}
													</Typography>
													<Typography
														variant="subtitle2"
														style={{ fontSize: '1rem' }}
													>
														{data.posts.length} Search Results
													</Typography>
												</React.Fragment>
											) : (
												<React.Fragment>
													<Typography variant="h2">No results</Typography>
													<Typography
														variant="body1"
														style={{ fontSize: '1rem' }}
													>
														Try adjusting your search or look at some of
														our most popular and newest articles.
													</Typography>
												</React.Fragment>
											)}
										</Grid>
									</Grid>

									<Grid container spacing={16}>
										{data.posts.map((post, index) => (
											<Grid
												item
												xs={12}
												md={4}
												lg={4}
												xl={4}
												key={post.id}
												style={{ marginBottom: 20 }}
											>
												<Link to={`/post/${post.slug}`}>
													<Card>
														<Media
															component="img"
															src={post.thumbnail.url}
															alt={post.thumbnail.alt}
															onError={e => {
																e.target.onerror = null
																e.target.src =
																	'https://placekitten.com/400/300'
															}}
														/>
													</Card>
													<Typography variant="h4">
														{post.title}
													</Typography>
													<Typography variant="cite">
														Read More
													</Typography>
												</Link>
											</Grid>
										))}
									</Grid>
								</Container>
							)}
						</section>
					)
				}}
			</Fetch>
		</AppBase>
	)
}

export default SearchResults
