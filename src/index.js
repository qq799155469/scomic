import "babel-polyfill"
import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch'
import { Provider } from 'react-redux'
import routes from './routes/routes'
import store from 'stores'


const Root = (props) => {
	return (
		<div>
			<Provider store={store}>
				{routes}
			</Provider>
		</div>
	)
}

// Render the main component into the dom
render(<Root />,document.getElementById('app'))