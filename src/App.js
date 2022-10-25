import React from 'react';
import Calc from './components/Calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Calc />
    );
  }
}

export default App;
