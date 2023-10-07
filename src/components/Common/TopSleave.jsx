import React from "react";
import PropTypes from "prop-types";

function TopSleave(props) {
  return (
    <div className="top-sleave">
      <form className="form-inline">
        <label>Search: </label>
        <input className="form-control mr-sm-2" type="text" />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
          Search
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
          Export
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
          Import
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
          New
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
          Print
        </button>
      </form>
    </div>
  );
}

TopSleave.propTypes = {};

export default TopSleave;
