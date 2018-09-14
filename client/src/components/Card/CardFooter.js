import React from 'react';

const CardFooter = props => {
  return (
    <div className='card-footer' style={props.style}>
      {props.children}
    </div>
  );
};

export default CardFooter;
