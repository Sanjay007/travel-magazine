import React from 'react'
import { storiesOf } from '@storybook/react'
import Toolbar from '../../components/Toolbar'
import AppBar from '../../components/AppBar'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Burger from '../../components/Burger'
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

const stories = storiesOf('Containers/AppBase', module)

class AppBase extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false,
		}
	}

	handleIsOpen = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		const { isOpen } = this.state
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
						<Container style={{ display: 'flex', justifyContent: 'space-between' }}>
							<IconButton color="inherit">
								<Burger onClick={this.handleIsOpen} close={isOpen} />
							</IconButton>

							<IconButton href="#">
								<TrivagoLogo fontSize="large" />
							</IconButton>

							<SearchInput collapsible emptyAfterSearch />
						</Container>
					</Toolbar>
				</AppBar>

				{children ? (
					<RootRef
						rootRef={ref => {
							this.pageRef = ref
						}}
					>
						<main>{children}</main>
					</RootRef>
				) : (
					<div style={{ height: '100vh' }}>Content here...</div>
				)}
				<Footer>
					<Container style={{ display: 'flex', alignItems: 'center' }}>
						<Grid container spacing={24} justify="center">
							<Grid item xs={12} md={4} lg={4} xl={4}>
								<IconButton href="#" style={{ width: '100%' }}>
									<LogoIcon fontSize="small" />
								</IconButton>
							</Grid>

							<Grid item xs={12} md={4} lg={4} xl={4}>
								<FooterList horizontal separator="|" style={{ flex: 1 }}>
									<Typography
										component="a"
										style={{ fontSize: 14, color: '#000022' }}
										href="#"
									>
										Privacy Policy
									</Typography>

									<Typography
										component="a"
										style={{ fontSize: 14, color: '#000022' }}
										href="#"
									>
										Terms and Conditions
									</Typography>

									<Typography
										component="a"
										style={{ fontSize: 14, color: '#000022' }}
										href="#"
									>
										Integrity Policy
									</Typography>
								</FooterList>
							</Grid>
							<Grid
								item
								xs={12}
								md={4}
								lg={4}
								xl={4}
								style={{
									justifyContent: 'space-between',
									textAlign: 'center',
								}}
							>
								<IconButton href="#" rel="noopener noreferrer">
									<FacebookIcon fontSize="large" />
								</IconButton>

								<IconButton href="#" rel="noopener noreferrer">
									<InstagramIcon fontSize="large" />
								</IconButton>

								<IconButton href="#" rel="noopener noreferrer">
									<YoutubeIcon fontSize="large" />
								</IconButton>
							</Grid>
						</Grid>
					</Container>
				</Footer>
			</React.Fragment>
		)
	}
}

stories.add('Default', () => <AppBase />)

export default AppBase
