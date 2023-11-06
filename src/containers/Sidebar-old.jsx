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
      
      <ul>
      <li>
          <Link to="/dashboard/requests/list">
             Dashboard
          </Link>
        </li>

        <li>
          <Link to="/dashboard/requests/list">
             Requests
          </Link>
        </li>
        <li>
          <Link to="/dashboard/visitations/list">
           Invitations
          </Link>
        </li>
      </ul>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
