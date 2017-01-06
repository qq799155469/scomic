import * as types from './actionTypes'
import { api_addr } from '../global/global'
import { hashHistory } from 'react-router'
import { OnlineAction } from './Online'
import fetch from 'isomorphic-fetch'

export let LoginAction = (u,p) => {
	return dispatch => {
		dispatch(fetchLogin(true))
		return fetch(api_addr + 'login',{
			method: "post",
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: "username=" + u + "&pwd=" + p
		}).then((res) => {
			if(res.ok){
				res.json().then((json) => {
					if(json.code === 400){
						dispatch(receiveLogin(json))
					}else if(json.code === 200){
						sessionStorage.setItem('token',json.data.token)
						for(let i in json.data.user){
							sessionStorage.setItem('' + i,json.data.user[i])
						}
						dispatch(receiveLogin(json))
						dispatch(OnlineAction(true))
						hashHistory.push("/")
					}
				})
			}
		})
	}
}

let fetchLogin = (isFetching) => {
	return {
		type: types.FETCH_ONLINE,
		isFetching: isFetching
	}
}

let receiveLogin = (json) => {
	return {
		type: types.RECEIVE_ONLINE,
		json: json
	}
}