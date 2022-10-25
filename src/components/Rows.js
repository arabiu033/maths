import PropTypes from 'prop-types';
import React from 'react';

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { row } = this.props;
    const buttons = [];
    for (let i = 0; i < row.length; i += 1) {
      buttons.push(<button type="button" id="" className="">{ row[i] }</button>);
    }

    return buttons;
  }
}

Rows.propTypes = {
  row: PropTypes.string.isRequired,
};

export default Rows;
