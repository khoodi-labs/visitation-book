import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Requests from "./Requests";

function Main(props) {
  return (
    <div className="col-md-10">
      <Outlet />
    </div>
  );
}

Main.propTypes = {};

export default Main;
