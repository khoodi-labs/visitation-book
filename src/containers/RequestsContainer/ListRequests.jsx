import React, { useEffect, useState } from "react";
import constants from "../../components/utils/constants";
import RequestService from "../../services/RequestsService";
import CheckboxElement from "../../components/Common/CheckboxElement";
import { faL, faYenSign } from "@fortawesome/free-solid-svg-icons";
import InputElement from "../../components/Common/InputElement";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faRightToBracket, faCircleUser, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon

import TopSleave from "../../components/Common/TopSearchSleave";
import Pagination from "../../components/Common/Pagination";
import { Outlet } from "react-router-dom";

import { simpleDate, manageDates } from '../../components/utils/DateFormatter'
import AlertElement from "../../components/Common/AlertElement";


function ListRequests() {
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
  const [msgtype, setMsgType] = useState("info");
  const [msgDetail, setMsgDetail] = useState("Processing..");

  const [alertCSsStatus, setAlertCssStatus] = useState("alert alert-info alert-dismissable")

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
    showAlert(true);
    setAlertCssStatus("alert alert-info alert-dismissable")
    RequestService().list(20, 0, "", (data) => {
      if (data !== undefined) {
        showAlert(false);
        setData(data)
      }

    }, (err) => {
      if (err != undefined) {
        setAlertCssStatus("alert alert-warning alert-dismissable")
        setMsgDetail(err.message)
      }
    }
    )
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


    let count = 0;

    return _data.map((item) => (

      <tr key={item.id} value={item.id} onClick={() => handleRowClick(item.id)} className={(selectedValues.includes(item.id) || parentCheckboxChecked) ? "row-selected" : ""}>
        <td>
          <CheckboxElement
            value={item.id}
            isChecked={parentCheckboxChecked ? parentCheckboxChecked : selectedValues.includes(item.id)}
            handleOnChange={handleCheckboxChange}
          />

        </td>
        <td> {
          count = count + 1
        }</td>
        <td>{item.host.first_name + " " + item.host.other_names}</td>
        <td>{item.guest.first_name + " " + item.guest.other_names}</td>
        <td>{item.status}</td>
        <td>{item.inv_type}</td>
        <td className="date-tab left" >{manageDates(item.start_date)} - {manageDates(item.end_date)}</td>
        <td className="date-tab right">{simpleDate(item.created_at)}</td>
        <td> <FontAwesomeIcon icon={faEdit} /> &nbsp;  <FontAwesomeIcon icon={faTrash} /> &nbsp;  <FontAwesomeIcon icon={faYenSign} /> </td>
      </tr>
    )

    )
  }

  return (
    <div>
      
      <AlertElement cssClass={alertSet === true ? alertCSsStatus : "hide"} msgtype={msgtype} msgDetail={msgDetail} />
      <TopSleave active_tab="list" list_url="/dashboard/requests/list" add_url="/dashboard/requests/add" />

      <div className="table_view tableFixHead">


        <table className="table tableFixHead">
          <thead>
            <tr>
              <th colSpan={2}>
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
      </div>
      <Pagination />
    </div>
  );
}

export default ListRequests;
