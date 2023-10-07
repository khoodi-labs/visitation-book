import React, { useState } from "react";
import constants from "../components/utils/constants";
import RequestService from "../services/RequestsService";
import CheckboxElement from "../components/Common/CheckboxElement";

function Requests() {
  //offset , limit and query used in fetching items from backedn.
  const [offset, setOffset] = useState(constants.default);
  const [limit, setLimit] = useState(constants.limit);
  const [query, setQuery] = useState("");

  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // Update the state based on checkbox change
    if (isChecked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    }
  };

  const fetchRequests = () => {
    const data = RequestService().list(offset, limit, query);
    return data.map((item) => (
      <tr key={item.id}>
        <td>
          <CheckboxElement
            value={item.id}
            checked={selectedValues.includes(item.id)}
            onChange={handleCheckboxChange}
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
      <div>Print, Export , Import , Search</div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <CheckboxElement />
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
