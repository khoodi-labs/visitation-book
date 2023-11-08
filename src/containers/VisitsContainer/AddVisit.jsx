import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import AlertElement from '../../components/Common/AlertElement'
import TopSleave from '../../components/Common/TopSearchSleave'
import TabsElement from "../../components/Common/TabsElement";
import SelectElement from "../../components/Common/SelectElement";
import DateTimePicker from "react-datetime-picker";


import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';



function AddVisit(props) {
 

  const [alertSet, showAlert] = useState(false);
  const [timeInDate, changeTimeIn] = useState(new Date());

  const [timeOutDate, changeTimeOut] = useState(timeInDate);
  
  return (
    <div>
      <AlertElement cssClass={alertSet === true ? "alert alert-info alert-dismissable" : "hide"} msgtype="info" msgDetail="Processing..." />
      <TabsElement active_tab="add" list_url="/dashboard/visitations/list" add_url="/dashboard/visitations/add" />


      <div className="container-fluid main-wrapper">
        <div className="row">
          <div className="col-md-12">
            <form role="form">

              <fieldset className="row">
                <legend>Personal Information:</legend>

                <div className="form-group col-md-6">

                  <label for="first_name">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="first_name" />
                </div>

                <div className="form-group col-md-6">

                  <label for="first_name">
                    Other Names
                  </label>
                  <input type="text" className="form-control" id="other_names" />
                </div>

                <div className="form-group col-md-12">

                  <label for="first_name">
                    Address :
                  </label>
                  <input type="text" className="form-control" id="other_names" />
                </div>
              </fieldset> <br />
              <fieldset className="row">
                <legend>Host Information:</legend>

                <div className="form-group col-md-4">

                  <label for="exampleInputEmail1">
                    Department
                  </label>
                  <SelectElement />
                </div>

                <div className="form-group col-md-4">

                  <label for="exampleInputEmail1">
                    Office
                  </label>
                  <SelectElement />
                </div>

                <div className="form-group col-md-4">

                  <label for="exampleInputEmail1">
                    Host
                  </label>
                  <SelectElement />
                </div>

              </fieldset>
              <br />
              <fieldset className="row">
                <legend>Time Information:</legend>
                <div className="form-group col-md-6">

                  <label for="exampleInputPassword1">
                    Time In
                  </label>
                  <DateTimePicker minDate={new Date()} onChange={changeTimeIn} value={timeInDate} />
                </div>

                <div className="form-group col-md-6">

                  <label for="exampleInputPassword1">
                  TimeOut
                  </label>
                  <DateTimePicker minDate={timeInDate} onChange={changeTimeOut} value={timeOutDate} />
                  
                  
                </div>

              </fieldset>


              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>



    </div>
  )
}

AddVisit.propTypes = {}

export default AddVisit
