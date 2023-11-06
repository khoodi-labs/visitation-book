import React,{useState} from 'react'
import PropTypes from 'prop-types'
import "../assets/css/Sidebar.css";
function Sidebar(props) {

    const [expanded, setExpanded] = useState(true);

    const toggleSidebar = () => {
      setExpanded(!expanded);
    };


  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
    <button className="toggle-button" onClick={toggleSidebar}>
      {expanded ? 'Collapse' : 'Expand'}
    </button>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar
