import React, { useEffect, useState } from "react";
import RequestService from "../../services/RequestsService";
import CheckboxElement from "../../components/Common/CheckboxElement";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon

import TopSleave from "../../components/Common/TopSearchSleave";
import Pagination from "../../components/Common/Pagination";


import { simpleDate, manageDates } from '../../components/utils/DateFormatter'
import AlertElement from "../../components/Common/AlertElement";



function ListVisits() {
  //offset , limit and query used in fetching items from backedn.
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [query, setQuery] = useState("");

  const [selectedValues, setSelectedValues] = useState([]);
  const [parentCheckboxChecked, setParentCheckbox] = useState(false);

  const [data, setData] = useState([]); // State to store fetched data

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [alertSet, showAlert] = useState(false);



  const handleRowClick = (id) => {
    selectedValues.find((x) => x === id) ?
      setSelectedValues(selectedValues.filter((item) => item !== id))
      :
      setSelectedValues([...selectedValues, id])
  }

  const handleCheckboxChange = (event) => {
    let value = parseInt(event.target.value);
    const isChecked = event.target.checked;


    isChecked
      ? setSelectedValues([...selectedValues, value])
      : setSelectedValues(selectedValues.filter((item) => item !== value));
  };

  const handleParentCheckboxChange = (event) => {
    if (parentCheckboxChecked) {
      setSelectedValues([]);
    }
    setParentCheckbox(!parentCheckboxChecked);
  };

  //on every load load data and move 
  useEffect(() => {
    //todo: set up loader and move 
    showAlert(true);
    RequestService().list(20, 0, "", (data)=>{
      showAlert(false);
      setData(data);
    } );
    
    
  }, []);



  //todo: handle previous and next pages already fetched 
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };



  const populateData = (_data) => {
    if (_data == undefined) return;



    return _data.map((item) => (
      <tr key={item.id} value={item.id} onClick={() => handleRowClick(item.id)} className={(selectedValues.includes(item.id) || parentCheckboxChecked) ? "row-selected" : ""}>
        <td>
          <CheckboxElement
            value={item.id}
            isChecked={parentCheckboxChecked ? parentCheckboxChecked : selectedValues.includes(item.id)}
            handleOnChange={handleCheckboxChange}
          />
        </td>
         
        <td>{item.host.first_name + " " + item.host.other_names}</td>
        <td>{item.guest.first_name + " " + item.guest.other_names}</td>
        <td>{item.status}</td>
        <td>{item.inv_type}</td>
        <td className="date-tab" >{manageDates(item.start_date)} - {manageDates(item.end_date)}</td>
        <td className="date-tab" >{simpleDate(item.created_at)}</td>
        <td> <FontAwesomeIcon icon={faEdit} /> |  <FontAwesomeIcon icon={faTrash} /> </td>
      </tr>
    )

    )
  }

  return (
    <div>
      <AlertElement cssClass={alertSet===true? "alert alert-info alert-dismissable": "hide"}  msgtype="info"  msgDetail ="Processing..." />
      <TopSleave active_tab="list" list_url="/dashboard/visitations/list" add_url="/dashboard/visitations/add" />
      <table className="table tableFixHead">
        <thead>
          <tr>
            <th>
              <CheckboxElement
                value={"parent"}
                isChecked={parentCheckboxChecked}
                handleOnChange={handleParentCheckboxChange}
              />
            </th>
            <th>Host</th>
            <th>Guest</th>
            <th>Status</th>
            <th>Visit Type</th>
            <th>Visit Date</th>
            <th>Date Created</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody >

          {
            populateData(data)

          }


        </tbody>
      </table>

      <Pagination />
    </div>
  );
}

export default ListVisits;
