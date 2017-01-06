import * as types from '../actions/actionTypes'

const initialState = {
  is_online: false,
  error: '',
  isLoaing: true,
  nic_name: ''
}

let onlineReducer = (state = initialState, action) => {
  switch(action.type){
  	case types.FETCH_ONLINE:
      return Object.assign({},state,{
        isLoaing: action.isLoaing
      })

    case types.RECEIVE_ONLINE:
      return Object.assign({},state,{
        is_online: action.is_online,
        isLoaing: false,
        nic_name: action.nic_name
      })

    case types.LOGINOUT:
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('name')
      sessionStorage.removeItem('id')
      sessionStorage.removeItem('sex')
      sessionStorage.removeItem('username')
      sessionStorage.removeItem('face')
      return Object.assign({},state,{
        is_online: action.is_online,
        nic_name: ''
      })

  	default:
  		return state
  }
}

export default onlineReducer