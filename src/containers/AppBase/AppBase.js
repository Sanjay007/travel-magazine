import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Toolbar from '../../components/Toolbar'
import AppBar from '../../components/AppBar'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import RootRef from '../../components/RootRef'
import InstagramIcon from '../../components/Icons/Instagram'
import YoutubeIcon from '../../components/Icons/Youtube'
import TrivagoLogo from '../../components/Icons/TrivagoLogo'
import LogoIcon from '../../components/Icons/TrivagoMagazineLogo'
import Typography from '../../components/Typography'
import IconButton from '../../components/IconButton'
import FooterList from '../../components/FooterList'
import Footer from '../../components/Footer'
import FacebookIcon from '../../components/Icons/Facebook'
import SearchInput from '../../components/Input/Search'
import Input from '../../components/Input'

class AppBase extends React.Component {
	state = {
		query: '',
	}

	handleQuerySearch = query => {
		if (!query) return
		this.setState({ query }, () => this.props.history.push(`/search/${query}`))
	}

	handleIsOpen = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		const { children } = this.props
		return (
			<React.Fragment>
				<AppBar
					transparent
					appBarRef={ref => {
						this.headerRef = ref
					}}
				>
					{/* Desktop Toolbar */}
					<Toolbar variant="default" disableGutters style={{ padding: '30px 0' }}>
						<Container
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Link to="/" color="inherit">
								<TrivagoLogo fontSize="large" />
							</Link>
							<SearchInput
								value={this.props.match.params.query}
								input={<Input placeholder="Search for articles" />}
								collapsible
								onChange={e => e.preventDefault()}
								debouncedOnChange={query => this.handleQuerySearch(query)}
							/>
						</Container>
					</Toolbar>
				</AppBar>

				<RootRef
					rootRef={ref => {
						this.pageRef = ref
					}}
				>
					<main>{children}</main>
				</RootRef>

				<Footer>
					<Container style={{ display: 'flex', alignItems: 'center' }}>
						<Grid container spacing={24} justify="center" align="center">
							<Grid item xs={12} md={2} lg={2} xl={2}>
								<Link to="/" style={{ width: '100%' }}>
									<LogoIcon fontSize="small" />
								</Link>
							</Grid>

							<Grid item xs={12} md={8} lg={8} xl={8}>
								<FooterList horizontal separator="|">
									<Typography
										component="a"
										style={{ fontSize: 14, color: '#000022' }}
										href="https://trivago.com/"
										rel="noopener noreferrer"
										target="_blank"
									>
										Trivago
									</Typography>

									<Typography
										component="a"
										style={{ fontSize: 14, color: '#000022' }}
										href="https://www.trivago.com/app"
										rel="noopener noreferrer"
										target="_blank"
									>
										Download App
									</Typography>

									<Typography
										component="a"
										style={{ fontSize: 14, color: '#000022' }}
										href="https://www.trivago.com/legal-information"
										rel="noopener noreferrer"
										target="_blank"
									>
										Legal Information
									</Typography>
								</FooterList>
							</Grid>
							<Grid
								item
								xs={12}
								md={2}
								lg={2}
								xl={2}
								style={{
									justifyContent: 'space-between',
									textAlign: 'center',
								}}
							>
								<IconButton
									href="https://www.facebook.com/trivagoUS/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FacebookIcon fontSize="large" />
								</IconButton>
								<IconButton
									href="https://twitter.com/trivago"
									rel="noopener noreferrer"
									target="_blank"
								>
									<YoutubeIcon fontSize="large" />
								</IconButton>

								<IconButton
									href="https://www.instagram.com/trivago/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<InstagramIcon fontSize="large" />
								</IconButton>
							</Grid>
						</Grid>
					</Container>
				</Footer>
			</React.Fragment>
		)
	}
}

export default withRouter(AppBase)
