import React from 'react'

function InputElement(props) {
  const {label,value,onChange,className,id,type} = props;
  return (
    <div >
							 
    <label for={props.id}>
     {label}
    </label>
    <input value={value} type={type} className={className} id={id} onChange={onChange}  />
  </div>

    
  )
}
export default  InputElement;