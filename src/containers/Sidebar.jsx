import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../assets/css/Sidebar.css";
import { faExpand, faMinimize, faDashboard, faCircleUser, faMaximize, faUsers, faBookOpen, faCogs } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Sidebar(props) {

    const [expanded, setExpanded] = useState(true);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };


    return (
        <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
                {expanded ? <span>  <FontAwesomeIcon icon={faMinimize} /> Minimize</span> : <span>  <FontAwesomeIcon icon={faExpand} />   </span>}
            </div>
            <ul>
                <li>
                    <Link to="/dashboard/requests/list">
                        {expanded ? <span>  <FontAwesomeIcon icon={faCogs} /> Dashboard</span> : <span>  <FontAwesomeIcon icon={faDashboard} />   </span>}

                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/requests/list">
                        {expanded ? <span>  <FontAwesomeIcon icon={faUsers} /> Requests</span> : <span>  <FontAwesomeIcon icon={faDashboard} />   </span>}

                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/visitations/list">
                        {expanded ? <span>  <FontAwesomeIcon icon={faBookOpen} /> Invitations</span> : <span>  <FontAwesomeIcon icon={faDashboard} />   </span>}

                    </Link>
                </li>
            </ul>
        </div>
    )
}

Sidebar.propTypes = {}

export default Sidebar
