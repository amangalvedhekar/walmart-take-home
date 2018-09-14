import React from 'react';
import PropTypes from 'prop-types';

const CardBody = props => {
  return (
    <div className='card-body' style={props.style}>
      {props.children}
    </div>
  );
};

export default CardBody;
