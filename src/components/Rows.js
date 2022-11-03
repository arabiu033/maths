import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';

const Rows = (props) => {
  const { row, setObj } = props;
  const buttons = [];
  for (let i = 0; i < row.length; i += 1) {
    buttons.push(
      <button
        type="button"
        key={i}
        onClick={(e) => setObj((obj) => calculate(obj, e.target.innerText))}
      >
        { row[i] }
      </button>,
    );
  }

  return buttons;
};

Rows.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  setObj: PropTypes.func.isRequired,
};

export default Rows;
