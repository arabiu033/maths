import PropTypes from 'prop-types';
import React from 'react';

const Display = (props) => {
  const { obj } = props;
  return (
    <div id="screen">
      <span>
        { `${obj.total ?? ''} 
        ${obj.operation ?? ''} 
        ${obj.next ?? ''}` }
      </span>
    </div>
  );
};

Display.propTypes = {
  obj: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Display;
