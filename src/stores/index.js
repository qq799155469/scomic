import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(rootReducer)

// export default function configureStore(initialState) {
// 	const store = createStore(rootReducer,initialState,applyMiddleware(thunk))
// 	return store
// }

export default store