import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AlertElement from '../../components/Common/AlertElement'
import TopSleave from '../../components/Common/TopSearchSleave'
import TabsElement from "../../components/Common/TabsElement";
import SelectElement from "../../components/Common/SelectElement";
import DateTimePicker from "react-datetime-picker";


import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import ProfileService from '../../services/ProfileService';


function AddRequest(props) {


  const [alertSet, showAlert] = useState(false);
  const [timeInDate, changeTimeIn] = useState(new Date());

  const [timeOutDate, changeTimeOut] = useState(timeInDate);


  const [hostData, setHostData] = useState([]);

  const [officeData, setOfficeData] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      host_id: 17,
      guest_id: 19,
      office_id: 1,
      department_id: 2,
      time_in: "2023-10-03",
      time_out: "2023-10-03",
      inv_type: "ONLINE"
    };


    // Submit the form data to a backend server
    fetch("http://localhost:9000/v1/request/visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend server
        console.log(data);
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });


    alert("testing");
  }



  //on every load load data and move 
  useEffect(() => {
    //todo: set up loader and move 
    showAlert(true);
    ProfileService().list(20, 0, "HOST", (data) => {
      showAlert(false);

      //todo: 
      let profiles = new Array();

      data.map(x => {
        let _name = x.first_name + " " + x.last_name;
        let _id = x.id;
        let profile = { value: _id, label: _name }
        profiles.push(profile);
      });
      setHostData(profiles);
    });

    console.log("--host data----");
    console.table(hostData);

    showAlert(true);
  }, []);





  const fillDepartmentData = () => {
    return departmentData != undefined && departmentData != null && departmentData.length > 0 ?

      <div className="form-group col-md-4">

        <label for="department_data">
          Department
        </label>
        <SelectElement data={departmentData} required />
      </div>
      : ""
  }

  const fillOfficeData = () => {
    return officeData != undefined && officeData != null && officeData.length > 0 ?

      <div className="form-group col-md-4">

        <label for="office_data">
          Office
        </label>
        <SelectElement data={officeData} required />
      </div>
      : ""
  }


  const fillHostData = () => {
    return hostData != undefined && hostData != null && hostData.length > 0 ?

      <div className="form-group col-md-4">

        <label for="host_data">
          Host
        </label>
        <SelectElement data={hostData} required />
      </div>
      : ""
  }


  return (
    <form onSubmit={() => { alert("blessed") }}>
      <div>
        <AlertElement cssClass={alertSet === true ? "alert alert-info alert-dismissable" : "hide"} msgtype="info" msgDetail="Processing..." />
        <TabsElement active_tab="add" list_url="/dashboard/requests/list" add_url="/dashboard/requests/add" />


        <div className="container-fluid main-wrapper">
          <div className="row">
            <div className="col-md-12">
              <form role="form" method="POST">

                <fieldset className="row">
                  <legend>Personal Information:</legend>

                  <div className="form-group col-md-6">

                    <label for="first_name">
                      First Name
                    </label>
                    <input type="text" className="form-control" id="first_name" required />
                  </div>

                  <div className="form-group col-md-6">

                    <label for="first_name">
                      Other Names
                    </label>
                    <input type="text" className="form-control" id="other_names" required />
                  </div>

                  <div className="form-group col-md-12">

                    <label for="address">
                      Address :
                    </label>
                    <input autocomplete="home street-address" type="text" className="form-control" id="address" required />
                  </div>
                </fieldset> <br />
                <fieldset className="row">
                  <legend>Host Information:</legend>


                  {fillDepartmentData()}
                  {fillOfficeData()}
                  {fillHostData()}


                </fieldset>
                <br />
                <fieldset className="row">
                  <legend>Time Information:</legend>
                  <div className="form-group col-md-6">

                    <label for="exampleInputPassword1">
                      Time In : &nbsp;
                    </label>
                    <DateTimePicker minDate={new Date()} onChange={changeTimeIn} value={timeInDate} />
                  </div>

                  <div className="form-group col-md-6">

                    <label for="exampleInputPassword1">
                      TimeOut : &nbsp;
                    </label>
                    <DateTimePicker minDate={timeInDate} onChange={changeTimeOut} value={timeOutDate} />


                  </div>

                </fieldset>


                <button type="submit" className="btn btn-primary" onClick={handleSubmit}  >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>



      </div>
    </form>
  )
}

AddRequest.propTypes = {}

export default AddRequest
