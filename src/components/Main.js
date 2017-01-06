require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'

import Comic from './Comic'
import Script from './Script'
import Story from './Story'
import Graphic from './Graphic'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="container">
      	<Comic/>
      	<Script/>
      	<Story/>
      	<Graphic/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

module.exports = AppComponent
