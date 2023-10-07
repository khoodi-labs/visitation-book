import React from "react";

function CheckboxElement(props) {
  const { value, handleOnChange, isChecked, id } = props;
  return (
    <input
      id={id}
      type="checkbox"
      value={value}
      onChange={handleOnChange} 
      checked={isChecked} 
    />
  );
}

export default CheckboxElement;
