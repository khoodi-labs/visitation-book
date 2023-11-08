import React from "react";
import PropTypes from "prop-types";
import '../../assets/css/TopSearchsleave.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload, faPrint, faSearch, faPlus ,faList} from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon
import BasicInputElement from "./BasicInputElement";

import TabsElement from "./TabsElement";


function TopSleave(props) {
  const handleOnSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="top-sleave">

    <TabsElement add_url={props.add_url} active_tab={props.active_tab}  list_url={props.list_url}   />



      <form className="form-inline" onSubmit={handleOnSubmit}>

        <label>Search: </label>

        <BasicInputElement className="form-control mr-sm-2" type="text" placeholder="input here..." />
        <button className="btn btn-primary my-2 my-sm-0 searchbutton" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">


          <FontAwesomeIcon icon={faUpload} />
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
          <FontAwesomeIcon icon={faPrint} />
        </button>

<div className="count-summary">
  123 of 233 Records 
</div>
      </form>
    </div>
  );
}

TopSleave.propTypes = {};

export default TopSleave;
