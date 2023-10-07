import React, { useState } from "react";
import constants from "../components/utils/constants";
import RequestService from "../services/RequestsService";
import CheckboxElement from "../components/Common/CheckboxElement";
import { faL } from "@fortawesome/free-solid-svg-icons";
import InputElement from "../components/Common/InputElement";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faRightToBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon
import TopSleave from "../components/Common/TopSleave";

 


function Requests() {
  //offset , limit and query used in fetching items from backedn.
  const [offset, setOffset] = useState(constants.default);
  const [limit, setLimit] = useState(constants.limit);
  const [query, setQuery] = useState("");

  const [selectedValues, setSelectedValues] = useState([]);
  const [parentCheckboxChecked, setParentCheckbox] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
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

  const fetchRequests = () => {
    const data = RequestService().list(offset, limit, query);

    return data.map((item) => (
      <tr key={item.id}>
        <td>
          <CheckboxElement
            value={item.id}
            isChecked={
              !parentCheckboxChecked
                ? selectedValues.includes(item.id)
                : parentCheckboxChecked
            }
            handleOnChange={handleCheckboxChange}
          />
        </td>
        <td>{item.host.firstName + " " + item.host.lastName}</td>
        <td>{item.guest.firstName + " " + item.host.lastName}</td>
        <td>{item.status}</td>
        <td>{item.visitationType}</td>
        <td>{item.visitationDate}</td>
        <td>{item.dateCreated}</td>
        <td> Edit | Delete</td>
      </tr>
    ));
  };

  return (
    <div>
       <TopSleave/>
      <table className="table">
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
        <tbody>{fetchRequests()}</tbody>
      </table>
    </div>
  );
}

export default Requests;
