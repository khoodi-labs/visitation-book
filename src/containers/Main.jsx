import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Requests from "./Requests";
import TopContainer from "../components/Common/TopContainer";

function Main(props) {
  return (
    <div className="main-container content">
      <TopContainer />
      <Outlet />
    </div>
  );
}

Main.propTypes = {};

export default Main;
