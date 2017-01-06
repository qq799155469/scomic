import * as types from '../actions/actionTypes'

const initialState = {
  story_id: 5
}

let storyReducer = (state = initialState, action) => {
  switch(action.type){
  	case types.GET_STORY_DETAIL:
      return Object.assign({},state,{
        story_id: action.storyId
      })

  	default:
  		return state
  }
}

export default storyReducer