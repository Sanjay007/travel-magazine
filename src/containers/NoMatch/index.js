import React from 'react'
import AppBase from '../../containers/AppBase'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Typography from '../../components/Typography'
import NotFound from '../../components/NotFound'

const NoMatch = () => {
	return (
		<AppBase>
			<section style={{ paddingTop: 150 }}>
				<Container>
					<Grid container justify="center" align="center" spacing={16}>
						<Grid item xs={12}>
							<NotFound>
								<Typography variant="h1">Error 404</Typography>
								<Typography variant="body1">
									Sorry, we couldn't find what you're looking for.
								</Typography>
							</NotFound>
						</Grid>
					</Grid>
				</Container>
			</section>
		</AppBase>
	)
}

export default NoMatch
