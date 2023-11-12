import React from 'react' 
import Select from 'react-select'
import PropTypes from 'prop-types'

function SelectElement(props) {

    const {data} = props

      

  return (
    <Select options={data} />
  )
}

SelectElement.propTypes = {}

export default SelectElement
