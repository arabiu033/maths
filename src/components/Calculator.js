import React from 'react';
import Rows from './Rows';
import Display from './Display';
import calculate from '../logic/calculate';

class Calc extends React.Component {
  constructor() {
    super();
    this.buttonClicks = this.buttonClicks.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  componentDidMount() {
    this.setState({
      obj: {
        total: '0',
        next: null,
        operation: null,
      },
    });
  }

  buttonClicks(value) {
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, value),
    });
  }

  render() {
    const { obj } = this.state;
    return (
      <main>
        <Display obj={obj} />
        <div>
          <div className="rows">
            <Rows row={['AC', '+/-', '%', '÷']} buttonClicks={this.buttonClicks} />
          </div>
          <div className="rows">
            <Rows row={['7', '8', '9', 'x']} buttonClicks={this.buttonClicks} />
          </div>
          <div className="rows">
            <Rows row={['4', '5', '6', '-']} buttonClicks={this.buttonClicks} />
          </div>
          <div className="rows">
            <Rows row={['1', '2', '3', '+']} buttonClicks={this.buttonClicks} />
          </div>
          <div className="rows">
            <Rows row={['0', '.', '=']} buttonClicks={this.buttonClicks} />
          </div>
        </div>
      </main>
    );
  }
}

export default Calc;
