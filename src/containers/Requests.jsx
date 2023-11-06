import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../components/Common/PageHeader";




function Requests() {
 
  return (
    <div>
      	<PageHeader title="REQUESTS"  />
      <Outlet />
    </div>
  );
}

export default Requests;
