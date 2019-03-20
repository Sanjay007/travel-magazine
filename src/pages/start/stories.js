import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBaseStory from '../../containers/AppBase/stories'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Typography from '../../components/Typography'
import Media from '../../components/Media'
import Card from '../../components/Card'
import ButtonBase from '../../components/ButtonBase'
import Overlay from '../../components/Overlay'
import Gallery from '../../components/Gallery'
import styles from './start.module.scss'

const stories = storiesOf('Pages/Start', module)

export const Default = () => (
	<AppBaseStory>
		<section style={{ padding: '150px 0' }}>
			<Container>
				<Grid container spacing={24}>
					<Grid item xs={12} style={{ display: 'flex' }}>
						<div>
							<Typography variant="body3" style={{ color: 'red' }}>
								STORY OF THE DAY
							</Typography>
							<Typography variant="h2" className={styles.featuredTitle}>
								8 Romantic Getaways in Kentucky: Grab a Bourbon and Suit Up for an
								Adventure
							</Typography>
							<Typography variant="body3" className={styles.featuredBody}>
								Local writer Ashlie Stevens shares 8 romantic getaways in Kentucky
								from Louisville and Lexington to Paducah and Pine Mountain State
								Park.
							</Typography>
						</div>
						<Media
							component="img"
							src="https://imgcy.trivago.com/c_lfill,f_auto,g_faces,q_auto:good,w_5120/mag/2019/02/12091338/biloxi-beach-hotels-holly-fulmer-eyeem.jpg"
							className={styles.featuredMedia}
						/>
					</Grid>
					<Grid container style={{ marginTop: 60 }} spacing={8}>
						{Array.from(new Array(6), (val, index) => (
							<Grid item xs={4} key={index}>
								<Card className={styles.featured}>
									<Media
										component="img"
										src="https://imgcy.trivago.com/c_lfill,f_auto,g_faces,q_auto:good,w_5120/mag/2019/02/06143950/puerto-vallarta-all-inclusive-resorts.jpg"
									/>
									<Overlay variant={index % 2 === 0 ? 'indigo' : 'blue'}>
										<Typography variant="body3" className={styles.category}>
											New York City
										</Typography>
										<Typography variant="h4" className={styles.cardTitle}>
											Northeast Four Vermont Hotels that are all about the
											experience
										</Typography>
										<ButtonBase>
											<Typography variant="cite" className={styles.readMore}>
												Read More
											</Typography>
										</ButtonBase>
									</Overlay>
								</Card>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Container>
		</section>
		<section style={{ backgroundColor: '#1f1f1f', padding: '50px 0', color: '#e8e8e8' }}>
			<Container>
				<Typography variant="h3" className={styles.latestTitle}>
					Latest Posts
				</Typography>
				<Grid container spacing={32}>
					<Grid item xs={9}>
						<Media
							component="img"
							src="https://imgcy.trivago.com/c_lfill,f_auto,g_faces,q_auto:good,w_5120/mag/2019/02/07141613/jamaica-all-inclusive-resorts-adults-only-eyeem-gerardo-herrera.jpg"
							className={styles.bigMedia}
						/>
						<Typography
							variant="h3"
							style={{
								textTransform: 'initial',
								fontWeight: 600,
							}}
						>
							New York Ski Resorts
						</Typography>
						<Typography variant="body3" style={{ fontSize: 18 }}>
							You don't need to fly across the country for a weekend of hitting the
							slopes. Save money by staying at one of these seven New York ski
							resorts.
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Grid container spacing={16}>
							{Array.from(new Array(2), (val, index) => (
								<Grid item xs={12}>
									<Card
										className={styles.latested}
										ContainerProps={{
											style: {
												minHeight: 215,
											},
										}}
									>
										<Media
											component="img"
											style={{
												maxHeight: '100%',
												height: 215,
												objectFit: 'cover',
											}}
											src="https://imgcy.trivago.com/c_lfill,f_auto,g_faces,q_auto:good,w_5120/mag/2019/02/11140500/utah-ski-resorts-scott-markewitz-photography.jpg"
										/>
										<Overlay variant="blue">
											<Typography variant="body3" className={styles.category}>
												New York City
											</Typography>
											<Typography variant="h4" className={styles.cardTitle}>
												Northeast Four Vermont Hotels that are all about the
												experience
											</Typography>
										</Overlay>
									</Card>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</section>
		<section style={{ padding: '50px 0' }}>
			<Container>
				<Typography variant="h3" style={{ marginTop: 0, marginBottom: 30 }}>
					Destinations
				</Typography>

				<Gallery>
					{Array.from(new Array(4), (val, index) => (
						<article
							className={styles.galleryItem}
							style={{
								backgroundImage:
									'url(https://imgcy.trivago.com/c_lfill,f_auto,g_faces,q_auto:good,w_5120/mag/2019/02/04145545/coolest-hotels-in-berlin.jpg)',
							}}
						>
							<Overlay className={styles.destinations}>
								<Typography variant="h4" className={styles.cardTitle}>
									NORTHEAST
								</Typography>
								{/* <Media
									className={styles.galleryItem}
									src="https://imgcy.trivago.com/c_lfill,f_auto,g_faces,q_auto:good,w_5120/mag/2019/02/04145545/coolest-hotels-in-berlin.jpg"
								/> */}
							</Overlay>
						</article>
					))}
				</Gallery>
			</Container>
		</section>
	</AppBaseStory>
)

stories.add('Default', Default)

export default Default
