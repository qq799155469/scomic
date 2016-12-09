require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Header from './Header'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      	<Header/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
