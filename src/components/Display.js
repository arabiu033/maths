import React from 'react';

class Display extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  render() {
    const { value } = this.state;
    return (
      <div id="screen"><span>{ value }</span></div>
    );
  }
}

export default Display;
