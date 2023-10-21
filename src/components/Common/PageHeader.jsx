import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/PageHeader.css'

function PageHeader(props) {
    const { title } = props
    return (
        <div className="page-header ">
            <h1 className='title'>
                {title}
            </h1>
        </div>
    )
}

PageHeader.propTypes = {}

export default PageHeader
