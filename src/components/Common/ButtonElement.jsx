import React from 'react'

function ButtonElement(props) {
    const {type,className,onclick,label} = props;
  return (
    <div>
        	<button type={type} onClick={onclick}  className={className}>{label}</button>
    </div>
  )
}
export default  ButtonElement;