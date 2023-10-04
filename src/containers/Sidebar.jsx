import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="col-md-2">
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard">Requests</Link>
        </li>
        <li>
          <Link to="/dashboard">Visitations </Link>
        </li>
      </ul>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
