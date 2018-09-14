import React from 'react';

const Button = props => {
  return (
    <button
      type={props.type}
      className={props.className}
      style={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
