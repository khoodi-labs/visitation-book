import React, { useState } from "react";
import constants from "../components/utils/constants";
import RequestService from "../services/RequestsService";

function Requests() {
  const [offset, setOffset] = useState(constants.default);
  const [limit, setLimit] = useState(constants.limit);
  const [query, setQuery] = useState("");

  const fetchRequests = () => {
    const data = RequestService().list(offset, limit, query);
    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td> 
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
      <div>
        Print, Export , Import , Search 
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
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
