import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

function SelectElement(props) {

  const { data, selectedValue, onChange } = props;


  return (
    <Select
    options={data}
    value={selectedValue}
    onChange={onChange}
    />
  )
}

 

export default SelectElement
