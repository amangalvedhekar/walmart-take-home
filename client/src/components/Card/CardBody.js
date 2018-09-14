import React from 'react';

const CardBody = props => {
  return (
    <div className='card-body' style={props.style}>
      {props.children}
    </div>
  );
};

export default CardBody;
