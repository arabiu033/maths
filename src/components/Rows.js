import PropTypes from 'prop-types';
import React from 'react';

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonClicks = this.buttonClicks.bind(this);
  }

  buttonClicks(e) {
    const { buttonClicks } = this.props;
    buttonClicks(e.target.innerText);
  }

  render() {
    const { row } = this.props;
    const buttons = [];
    for (let i = 0; i < row.length; i += 1) {
      buttons.push(<button type="button" key={i} onClick={this.buttonClicks}>{ row[i] }</button>);
    }

    return buttons;
  }
}

Rows.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonClicks: PropTypes.func.isRequired,
};

export default Rows;
