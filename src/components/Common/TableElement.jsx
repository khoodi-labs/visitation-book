import React from "react";
import PropTypes from "prop-types";

function TableElement(props) {
  const { headerArray, data } = props;
  const isHeaderArray = Array.isArray(headerArray);
  const isDataArray = Array.isArray(data);

  return <div></div>;
}

TableElement.propTypes = {};

export default TableElement;
