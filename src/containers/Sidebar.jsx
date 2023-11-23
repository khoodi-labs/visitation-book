import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../assets/css/Sidebar.css";
import { faExpand, faMinimize, faDashboard, faCircleUser, faMaximize, faUsers, faBookOpen, faCogs, faHeadSideCough, faHeader, faPerson } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DearHEad from '../assets/images/dearlogo.png';
{/* <img src={DearHEad}  className='dear-head-master'/>  </h3>
    </div> */}

function Sidebar(props) {

    const [expanded, setExpanded] = useState(true);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };


    return (
        <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
                {expanded ? <span>   <img src={DearHEad}  className='dear-head-master'/>  VISIT BOOK</span> : <span>   <img src={DearHEad}  className='dear-head-master'/> </span>}
            </div>
            <ul>
                <li>
                    <Link to="/dashboard/overview">
                        {expanded ? <span>  <FontAwesomeIcon icon={faCogs} /> Dashboard</span> : <span>  <FontAwesomeIcon icon={faCogs} />   </span>}

                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/requests/list">
                        {expanded ? <span>  <FontAwesomeIcon icon={faUsers} /> Requests</span> : <span>  <FontAwesomeIcon icon={faUsers} />   </span>}

                    </Link>
                </li>
                <li  >
                    <Link to="/dashboard/visitations/list">
                        {expanded ? <span>  <FontAwesomeIcon icon={faBookOpen} /> Visitations</span> : <span>  <FontAwesomeIcon icon={faBookOpen} />   </span>}

                    </Link>
                </li>

             
                    <Link to="/dashboard/profiles/list">   <li>
                        {expanded ? <span>  <FontAwesomeIcon icon={faPerson} /> Profiles</span> : <span>  <FontAwesomeIcon icon={faBookOpen} />   </span>}
                        </li>
                    </Link>
                


            </ul>
        </div>
    )
}

Sidebar.propTypes = {}

export default Sidebar
