import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = props => {
  return (
    <div className='card-footer' style={props.style}>
      {props.children}
    </div>
  );
};

export default CardFooter;
