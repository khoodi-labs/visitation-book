import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/css/Pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons"; // Replace with the desired search icon

function Pagination(props) {
  return (
    <div className="pagination-sleeve">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Previous">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Next">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {};

export default Pagination;
