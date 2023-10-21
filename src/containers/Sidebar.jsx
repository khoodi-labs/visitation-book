import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import visitorRequestsImage from "../assets/images/visitor-requests.png";
import visitorVisitations from "../assets/images/visitor-visitations.png";
import ListITmes from "../assets/images/listiems.png";

import "../assets/css/Sidebar.css";

function Sidebar(props) {
  return (
    <div className=" sidebar-container  sidebar ">
      <img src={ListITmes} className="list-items-image" />
      <ul>
        <li>
          <Link to="/dashboard/requests/list">
            <img
              src={visitorRequestsImage}
              className="visitation-request-image"
            />
          </Link>
        </li>
        <li>
          <Link to="/dashboard/visitations/list">
            <img src={visitorVisitations} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
