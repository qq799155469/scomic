import Immutable from 'Immutable'
import {
	ADD
} from '../actions'

const defaultState = Immutable.fromJS({data: {
	num: 1
}, isFetching: false})
//首次渲染时获取数据
export const fetchData = (state = defaultState, action = {}) => {
	switch(action.type){
		case ADD:
			return state.data.num = state.data.num + 1
			console.log(state)
		default:
			return state
	}
}