import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './containers/App'
import Post from './containers/Post'
import NoMatch from './containers/NoMatch'
import SearchResults from './containers/SearchResults'
import ParentDestination from './containers/ParentDestination'
import './components/styles/global.module.scss'

const Root = () => (
	<Switch>
		{/* Put all the routes here */}
		<Route exact path="/" component={App} />
		<Route exact path="/post/:slug" component={Post} />
		<Route exact path="/search/:query" component={SearchResults} />
		<Route exact path="/destinations/:name" component={ParentDestination} />
		<Route exact path="/destinations/:parent/:name" component={ParentDestination} />
		<Route component={NoMatch} />
	</Switch>
)
ReactDOM.render(
	<Router>
		<Root />
	</Router>,
	document.getElementById('root'),
)
