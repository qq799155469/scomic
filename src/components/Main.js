require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Header from './Header'
import Comic from './Comic'
import Script from './Script'
import Story from './Story'
import Graphic from './Graphic'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      	<Header/>
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

export default AppComponent;
