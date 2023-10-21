import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../components/Common/PageHeader";




function Requests() {
 
  return (
    <div>
      	<PageHeader title="invitations"  />
      <Outlet />
    </div>
  );
}

export default Requests;
