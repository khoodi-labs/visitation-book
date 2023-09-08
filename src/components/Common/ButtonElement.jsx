import React from 'react'

function ButtonElement(props) {
    const {type,className,onclick,label,facon} = props;
  return (
    <div  className='buttonDiv'>
        	{facon} <button type={type} onClick={onclick}  className={className}>{label}</button>
    </div>
  )
}
export default  ButtonElement;