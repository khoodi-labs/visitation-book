import React from 'react' 
import Select from 'react-select'
import PropTypes from 'prop-types'

function SelectElement(props) {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

      

  return (
    <Select options={options} />
  )
}

SelectElement.propTypes = {}

export default SelectElement
