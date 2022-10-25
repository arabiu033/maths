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
          <div className="rows"><Rows row={['Ac', '+/-', '%', '÷']} /></div>
          <div className="rows"><Rows row={['7', '8', '9', 'X']} /></div>
          <div className="rows"><Rows row={['4', '5', '6', '-']} /></div>
          <div className="rows"><Rows row={['1', '2', '3', '+']} /></div>
          <div className="rows"><Rows row={['0', '.', '=']} /></div>
        </div>
      </main>
    );
  }
}

export default Calc;
