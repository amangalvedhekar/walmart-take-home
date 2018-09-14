import React from 'react';

const CardHeader = props => {
  return(
    <div className='card-header' style={props.style}>
      {props.children}
    </div>
  );
};

export default CardHeader;
