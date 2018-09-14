import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className='card shadow-effect' style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
