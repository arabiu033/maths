import React from 'react';
import Rows from './Rows';
import Display from './Display';

class Calc extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <Display />
        <div>
          <div><Rows row={['Ac', '+/-', '%', '/']} /></div>
          <div><Rows row={['7', '8', '9', 'X']} /></div>
          <div><Rows row={['4', '5', '6', '-']} /></div>
          <div><Rows row={['1', '2', '3', '+']} /></div>
          <div><Rows row={['0', '.', '=']} /></div>
        </div>
      </main>
    );
  }
}

export default Calc;
