import React from "react";
import PropTypes from "prop-types";

function TableElement(props) {
  const { header, data } = props;
  const isHeaderArray = Array.isArray(header);
  const isDataArray = Array.isArray(data);

  return (
    <div>
      {isHeaderArray ? (
        <thead>
          <tr>
            {header.map((item) => {
              <td>{item}</td>;
            })}
          </tr>
        </thead>
      ) : (
        ""
      )}

      {isDataArray ? (
        <thead>
          <tr>
            {data.map((item) => {
              <td>{item}</td>;
            })}
          </tr>
        </thead>
      ) : (
        ""
      )}
    </div>
  );
}

TableElement.propTypes = {};

export default TableElement;


//todo: still under implementations