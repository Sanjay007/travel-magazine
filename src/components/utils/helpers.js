export function capitalize(string) {
	if (typeof string !== 'string') {
		throw new Error('UI: capitalize(string) expects a string argument.')
	}

	return string.charAt(0).toUpperCase() + string.slice(1)
}

export function setRef(ref, value) {
	if (typeof ref === 'function') {
		ref(value)
	} else if (ref) {
		ref.current = value
	}
}

export function setRatings(slug, rating) {
	let elementExists
	let oldRatings = JSON.parse(sessionStorage.getItem('ratings')) || []

	if (oldRatings) {
		elementExists = oldRatings.find(el => {
			return el.slug === slug
		})

		if (!elementExists) {
			oldRatings.push({ slug, rating })

			sessionStorage.setItem('ratings', JSON.stringify(oldRatings))
		} else {
			let newRatings = oldRatings.map(el => {
				if (el.slug === elementExists.slug) {
					return { ...elementExists, rating }
				}

				return el
			})
			sessionStorage.setItem('ratings', JSON.stringify(newRatings))
		}
	} else {
		sessionStorage.setItem('ratings', JSON.stringify([]))
	}
}
