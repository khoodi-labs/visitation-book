import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Requests from "./Requests";
import NoMatch from "./NoMatch";
import Visits from "./Visits";
import AddRequest from "./RequestsContainer/AddRequest";
import ListRequests from "./RequestsContainer/ListRequests";
 
import ListVisits from "./VisitsContainer/ListVisits";
import AddVisit from "./VisitsContainer/AddVisit";
import Overview from "./Overview";
import Signin from "./auth/Signin";
 

function Home() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/auth/signin" Component={Signin} />
        <Route path="/dashboard" Component={Dashboard}>
          <Route path="requests" Component={Requests } >
            <Route path="list" element={<ListRequests />} />
            <Route path="add" element={<AddRequest />} />
          </Route>
          <Route path="visitations" Component={Visits} >
           <Route path="list" element={<ListVisits />} />
            <Route path="add" element={<AddVisit />} />
            </Route>
            <Route path="overview" Component={Overview}  />
        </Route>
      
           
    

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>

    </Router>
  );
}

export default Home;
