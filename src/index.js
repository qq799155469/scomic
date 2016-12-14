import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch'
import { Provider } from 'react-redux'
import store from './stores'
// import route from './routes'
import App from './components/Main'

store.subscribe(() => {
  //console.log(store.getState())
})

// Render the main component into the dom
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
