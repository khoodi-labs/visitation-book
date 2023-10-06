import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Requests from "./Requests";
import NoMatch from "./NoMatch";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Dashboard}>
          <Route path="requests" element={<Requests />} />
          <Route path="visitations" element={<Requests />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
     
    </Router>
  );
}

export default Home;
