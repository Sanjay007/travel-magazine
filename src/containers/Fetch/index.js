import React from 'react'

function Fetch({ path, from, children }) {
	const fromApi = React.useContext(from)
	const [fetchState, setFetchState] = React.useState({ fetching: true })

	const fetchData = async () => {
		setFetchState({
			posts: null,
			fetching: true,
		})
		let response = await fetch(`${fromApi.url}${path}`)
		let result = await response.json()
		setFetchState({
			data: result,
			fetching: false,
		})
	}

	React.useEffect(() => {
		fetchData()
	}, [path, from])

	return <>{children(fetchState)}</>
}

export default Fetch
