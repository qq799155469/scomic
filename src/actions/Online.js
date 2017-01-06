// export function online() {
// 	return {
// 		type: 'online'
// 	}
// }
import * as types from './actionTypes'
import { api_addr } from '../global/global'

import fetch from 'isomorphic-fetch'

export let OnlineAction = (isLoaing) => {
	return dispatch => {
		dispatch(fetchOnline(isLoaing))
		return fetch(api_addr + 'online',{
          method: "post",
          mode: "cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: "token=" + sessionStorage.getItem('token')
        }).then((res) => {
          if(res.ok){
            res.json().then( json => {
            	if(json.code === 200){
            		dispatch(receiveOnline(true,sessionStorage.getItem('name')))
            	}else if(json.code === 400){
            		dispatch(receiveOnline(false),'')
            	}
            })
          }
        })
	}
		
}

let fetchOnline = (isLoaing) => {
	return {
		type: types.FETCH_ONLINE,
		isLoaing: isLoaing
	}
}

let receiveOnline = (is_online,nic_name) => {
	return {
		type: types.RECEIVE_ONLINE,
		is_online: is_online,
		nic_name: nic_name
	}
}