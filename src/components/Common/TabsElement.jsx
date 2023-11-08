import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload, faPrint, faSearch, faPlus, faList } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon


function TabsElement(props) {
    const { active_tab, list_url, add_url } = props;

    return (
        <div>
            <div className=" row" >
                <ul className="tabs" >
                    <li className={active_tab === "list" ? "active" : ""}> <Link to={list_url} >  <FontAwesomeIcon icon={faList} /> view </Link> </li>
                    <li className={active_tab === "add" ? "active" : ""}> <Link to={add_url} > <FontAwesomeIcon icon={faPlus} /> add </Link>  </li>
                </ul>
            </div>

        </div>
    )
}

TabsElement.propTypes = {}

export default TabsElement
