import React from "react";

function Requests() {
  const fetchRequests = () => {};
  const data = [
    {
      id: "1",

      host: {
        id: 1,
        firstName: "Muyinda",
        lastName: "Muyinda",
        Email: "Login Notification Message",
      },
      guest: {
        id: 10,
        firstName: "Muyinda",
        lastName: "Muyinda",
        Email: "Login Notification Message",
      },
      status: "pending",
      dateCreated: "05,10,2023",
      visitationDate: "05,10,2023",
      visitationType: "Online",
      details: [
        {
          link: "url",
        },
      ],
    },
    {
      id: "2",

      host: {
        id: 1,
        firstName: "Muyinda",
        lastName: "Muyinda",
        Email: "Login Notification Message",
      },
      guest: {
        id: 10,
        firstName: "Muyinda",
        lastName: "Muyinda",
        Email: "Login Notification Message",
      },
      status: "pending",
      dateCreated: "05,10,2023",
      visitationDate: "05,10,2023",
      visitationType: "Online",
      details: [
        {
          link: "url",
        },
      ],
    },
  ];

 
  return (
    <div>
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
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.host.firstName + item.host.lastName}</td>
              <td>{item.guest.firstName + item.host.lastName}</td>
              <td>{item.status}</td>
              <td>{item.visitationType}</td>
              <td>{item.visitationDate}</td>
              <td>{item.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Requests;
