import React from 'react'
export function createApi(url) {
	const Context = React.createContext({ url })
	function ProvideContext({ children: providerChildren }) {
		return (
			<Context.Provider
				value={{
					url,
				}}
			>
				{providerChildren}
			</Context.Provider>
		)
	}
	return [Context, ProvideContext]
}
