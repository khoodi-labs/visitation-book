import React from "react";

function CheckboxElement(props) {
  const { value, handleOnChange, isChecked, id } = props;
  return (
    <div className="checkbox-wrapper-39">
    <label>
    <input
        id={id}
        type="checkbox"
        value={value}
        onChange={handleOnChange}  
        checked={isChecked} 
      />
      <span className="checkbox"></span>
    </label>
  </div>
  );
}

export default CheckboxElement;

