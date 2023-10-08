import React from "react";
import PropTypes from "prop-types";
import '../../assets/css/TopSearchsleave.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload, faPrint, faSearch } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon


function TopSleave(props) {
    const handleOnSubmit =(e)=>{
        e.preventDefault();

    }
  return (
    <div className="top-sleave">
      <form className="form-inline" onSubmit={handleOnSubmit}> 
        <label>Search: </label>
        
        <input className="form-control mr-sm-2" type="text" />
        <button className="btn btn-primary my-2 my-sm-0 searchbutton" type="button">
          <FontAwesomeIcon icon={faSearch}  />
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
          <FontAwesomeIcon icon={faDownload}  />
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
        <FontAwesomeIcon icon={faUpload}  />
        </button>
        <button className="btn btn-primary my-2 my-sm-0" type="button">
        <FontAwesomeIcon icon={faPrint}  />
        </button>
        
      </form>
    </div>
  );
}

TopSleave.propTypes = {};

export default TopSleave;
