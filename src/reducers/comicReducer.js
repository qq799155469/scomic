import * as types from '../actions/actionTypes'

const initialState = {
  comic_id: 5
}

let comicReducer = (state = initialState, action) => {
  switch(action.type){
  	case types.GET_COMIC_DETAIL:
  	console.log('dongle',action.comicId)
      return Object.assign({},state,{
        comic_id: action.comicId
      })

  	default:
  		return state
  }
}

export default comicReducer