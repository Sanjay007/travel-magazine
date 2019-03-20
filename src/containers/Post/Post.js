import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Rating from 'react-rate-component'
import AppBase from '../AppBase'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Media from '../../components/Media'
import Typography from '../../components/Typography'
import Fetch from '../Fetch'
import { MyApiProvider, MyApi } from '../API'
import { setRatings } from '../../components/utils/helpers'
import Loader from '../../components/Loader'

class Post extends React.Component {
	static propTypes = {
		rating: PropTypes.number,
		slug: PropTypes.string.isRequired,
	}

	static defaultProps = {
		slug: '',
		rating: 0,
	}
	state = {
		slug: this.props.match.params.slug,
		rating: 0,
	}

	componentDidMount() {
		this._loadRating(this.state.slug)
	}

	_createMarkup(content) {
		return { __html: content }
	}

	_handleRating = rating => {
		const { slug } = this.state
		setRatings(slug, rating)
	}

	_loadRating = slug => {
		const loagRatings = JSON.parse(sessionStorage.getItem('ratings')) || []
		const el = loagRatings.find(el => {
			return el.slug === slug
		})
		if (!el) return
		this.setState({
			rating: el.rating,
		})
	}

	render() {
		const { slug } = this.state
		return (
			<MyApiProvider>
				<AppBase>
					<Fetch path={`/post/${slug}`} from={MyApi}>
						{({ data, fetching, error }) => {
							if (fetching) {
								return (
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<Loader size={100} />
									</div>
								)
							}
							if (error) {
								return <h1>{error.message}</h1>
							}
							console.log('data', data)
							const {
								excerpt,
								content,
								seo_meta,
								thumbnail,
								taxonomies,
								cardTitle,
								title,
								author,
							} = data
							return (
								<React.Fragment>
									<Helmet>
										<meta charSet="utf-8" />
										<title>{seo_meta.title}</title>
										<meta
											name="og:locale"
											property="og:locale"
											content={seo_meta.opengraph_locale}
										/>
										<meta
											name="og:title"
											property="og:title"
											content={seo_meta.opengraph_title}
										/>
										<meta
											name="og:description"
											property="og:description"
											content={seo_meta.opengraph_description}
										/>
										<meta
											name="og:image"
											property="og:image"
											content={seo_meta.opengraph_image}
										/>
										<meta
											name="og:sitename"
											property="og:site_name"
											content={seo_meta.opengraph_site_name}
										/>
										<meta
											name="og:type"
											property="og:type"
											content={seo_meta.opengraph_type}
										/>
										<meta
											name="og:url"
											property="og:url"
											content={seo_meta.opengraph_url}
										/>

										<meta
											name="robots"
											content={`${seo_meta.meta_robots_adv}${
												seo_meta.meta_robots_noindex
											}${seo_meta.meta_robots_nofollow}`}
										/>
										<link rel="canonical" href={seo_meta.canonical} />
										<meta name="description" content={seo_meta.metadesc} />
										<meta
											name="twitter:title"
											content={seo_meta.twitter_title}
										/>
										<meta
											name="twitter:image"
											content={seo_meta.twitter_image}
										/>
										<meta name="keywords" content={seo_meta.metakeywords} />
									</Helmet>

									<section style={{ padding: '120px 0' }}>
										<Media
											src={thumbnail.url || ''}
											alt={thumbnail.alt}
											style={{
												height: '50vh',
												objectFit: 'cover',
												backgroundPosition: ' center 30%',
												marginBottom: '2rem',
											}}
										/>
										<Container>
											<Grid container style={{ marginTop: 50 }}>
												<Grid item xs={8}>
													<Typography
														variant="cite"
														style={{
															fontSize: '.8em',
															textTransform: 'uppercase',
														}}
													>
														{taxonomies.destinations[0].name}
													</Typography>
													<Typography
														variant="h2"
														style={{
															textTransform: 'initial',
															lineHeight: 1.3,
															fontSize: '2.2rem',
															fontWeight: 600,
															marginBottom: '2rem',
														}}
													>
														{cardTitle || title}
													</Typography>
													<Typography
														variant="body3"
														style={{ fontSize: 24, lineHeight: 1.3 }}
													>
														{excerpt}
													</Typography>
													<div
														dangerouslySetInnerHTML={this._createMarkup(
															content[0].text,
														)}
													/>
												</Grid>
												<Grid item xs={4}>
													<div
														style={{
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															marginBottom: 20,
														}}
													>
														<Media
															component="img"
															style={{
																borderRadius: 300,
																width: 40,
																height: 40,
															}}
															src={author.image}
															alt={author.name}
														/>
														<Typography
															variant="subtitle1"
															style={{ margin: 0, marginLeft: 10 }}
														>
															{author.name}
														</Typography>
													</div>
													<Rating
														defaultValue={this.state.rating}
														inactiveColor="#e0e1e2"
														activeColor="#f7a626"
														onChange={this._handleRating}
													/>
												</Grid>
											</Grid>
										</Container>
									</section>
								</React.Fragment>
							)
						}}
					</Fetch>
				</AppBase>
			</MyApiProvider>
		)
	}
}

export default Post
