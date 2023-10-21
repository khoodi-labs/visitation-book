import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Requests from "./Requests";
import NoMatch from "./NoMatch";
import Visits from "./Visits";
import AddRequest from "./RequestsContainer/AddRequest";
import ListRequests from "./RequestsContainer/ListRequests";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Dashboard}>
          <Route path="requests" Component={Requests } >
            <Route path="list" element={<ListRequests />} />
            <Route path="add" element={<AddRequest />} />
          </Route>
          <Route path="visitations" element={<Visits />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>

    </Router>
  );
}

export default Home;
