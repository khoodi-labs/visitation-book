import React from 'react'
import PropTypes from 'prop-types'

function BasicInputElement(props) {
    const {   value, onChange, className, id, type, placeholder, facon } = props;
  return (
    <input placeholder={placeholder}  value={value} type={type} className={className} id={id} onChange={onChange} />
  )
}

BasicInputElement.propTypes = {}

export default BasicInputElement
