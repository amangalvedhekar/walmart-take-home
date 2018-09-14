import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = props => {
  return(
    <div className='card-header' style={props.style}>
      {props.children}
    </div>
  );
};

export default CardHeader;
