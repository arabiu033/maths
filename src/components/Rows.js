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
    // if (row.length === 4) {
    //   return (
    //     <div>
    //       <button type="button" id="" className="">{ row[0] }</button>
    //       <button type="button" id="" className="">{ row[1] }</button>
    //       <button type="button" id="" className="">{ row[2] }</button>
    //       <button type="button" id="" className="">{ row[3] }</button>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <button type="button" id="" className="">{ row[0] }</button>
    //     <button type="button" id="" className="">{ row[1] }</button>
    //     <button type="button" id="" className="">{ row[2] }</button>
    //   </div>
    // );
    return buttons;
  }
}

Rows.propTypes = {
  row: PropTypes.string.isRequired,
};

export default Rows;
