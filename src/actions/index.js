import fetch from 'isomorphic-fetch'

export const ADD = 'ADD'

const add = count => {
	return {
		type: ADD,
		count
	}
}