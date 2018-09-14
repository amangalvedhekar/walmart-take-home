import React from 'react';
import PropTypes from 'prop-types';

const ImageHeader = props => {
  return (
    <div className='card-image' style={props.style}>
      <img
        className='contain'
        style={props.imageStyle}
        crossOrigin='anonymous'
        src={props.imageUrl}
        alt={props.alt}
      />
    </div>
  );
};

export default ImageHeader;
