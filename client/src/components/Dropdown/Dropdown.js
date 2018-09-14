import React from 'react';

const Dropdown = props => {
  return (
    <div>
      <label className={props.labelClass}>
        {props.label}
      </label>
      <select
        value={props.selectedValue}
        onChange={props.onChange}>
        {props.valueList.map((propValue, index) => (
          <option
            key={index}
            value={propValue}>
            {propValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
