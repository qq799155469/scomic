const initialState = {
  count: 1
}

export default function countReducer(state = initialState, action) {
  switch(action.type){
  	case 'add': 
  		return Object.assign({},state,{count: action.count + state.count})
  	case 'reduce':
  		return Object.assign({},state,{count: state.count - action.count})
  	default:
  		
  		return state
  }
}