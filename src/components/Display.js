import React from 'react';

class Display extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  render() {
    const { value } = this.state;
    return (
      <div id="screen">{ value }</div>
    );
  }
}

export default Display;
