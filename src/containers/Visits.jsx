import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../components/Common/PageHeader";


import PropTypes from 'prop-types'

function Visits(props) {
  return (
    <div>
      <PageHeader title="Visitations" />
      <Outlet />
    </div>
  )
}

Visits.propTypes = {}

export default Visits
