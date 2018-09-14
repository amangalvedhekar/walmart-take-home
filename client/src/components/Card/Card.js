import React from 'react';

const Card = props => {
  return (
    <div className='card shadow-effect' style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
