import PropTypes from 'prop-types';
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { obj } = this.props;
    return (
      <div id="screen">
        <span>
          { `${obj.total ? obj.total : ''} 
          ${obj.operation ? obj.operation : ''} 
          ${obj.next ? obj.next : ''}` }
        </span>
      </div>
    );
  }
}

Display.propTypes = {
  obj: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Display;
