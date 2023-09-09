import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon


function InputElement(props) {
  const { label, value, onChange, className, id, type, placeholder, facon } = props;
  return (
    <div >

      <label for={props.id}>
        {facon}   {label}

      </label>
      <div className="input-group">
        <input placeholder={placeholder} value={value} type={type} className={className} id={id} onChange={onChange} />
      </div>

    </div>


  )
}
export default InputElement;