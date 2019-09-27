import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './App.css';

class App extends Component {
  render() {
    return (
      <p>
        <FormattedMessage id="app.test" />
      </p>
    );
  }
}

export default App;
