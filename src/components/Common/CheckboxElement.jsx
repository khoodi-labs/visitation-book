import React from "react";

function CheckboxElement(props) {
  const { value, handleOnChange, isChecked } = props;
  return (
    <input
      type="checkbox"
      value={value}
      onChange={handleOnChange}
      checked={isChecked}
    />
  );
}

export default CheckboxElement;
