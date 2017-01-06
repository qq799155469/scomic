import fetch from 'isomorphic-fetch'
import * as types from '../actions/actionTypes'

import { api_addr } from '../global/global'
const initialState = {
	token: '',
	error: '',
	json: ''
}

export default function userReducer( state = initialState, action ) {
	switch(action.type){
		case types.LOGIN: 
			return Object.assign({},state,{json: action.json})
		default:
			return state
	}
}