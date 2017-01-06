// import { combineReducers } from 'redux'
import count from './count'
import user from './userReducer'
import online from './onlineReducer'
import comic from './comicReducer'
import story from './storyReducer'

// export default rootReducer = combineReducers({
// 	online,
// 	user,
// 	count
// })

export default function rootReducer(state = {}, action){
	return {
		count: count(state.count, action),
		user: user(state.token, action),
		online: online(state.is_online, action),
		comic: comic(state.comic_id, action),
		story: comic(state.story_id, action)
	}
}