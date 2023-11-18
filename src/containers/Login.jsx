import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/css/Login.css'
import InputElement from '../components/Common/InputElement';
import ButtonElement from '../components/Common/ButtonElement';
import AuthService from '../services/AuthService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faRightToBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon


import AlertElement from '../components/Common/AlertElement';

import DearHEad from "../assets/images/dearlogo.png"


function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [alertCss, setAlertCss] = useState("alert alert-info alert-dismissable");
	const [alertMsg, setAlertMsg] = useState("  Username and Password");

	const navigate = useNavigate();

	const auth = AuthService();

	const handleLogin = (e) => {
		e.preventDefault()
		setAlertMsg("Processing...");

		if (auth.validate(username, password) === undefined) {
			setAlertCss("alert alert-warning alert-dismissable");
			setAlertMsg("Invalid username or password ");
			return;
		}

		setAlertCss("alert alert-success alert-dismissable");
		setAlertMsg("Succesfully Logged in ");

		//todo: go to the dashboard
		navigate('/dashboard');
	}


	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12 login_container">
					<div className="row">

						<div className="col-md-4 login_form">

						 

								<img src={DearHEad} alt="" className="login-user-icon" />
							 
							<AlertElement cssClass={alertCss} msgtype="Warning!" msgDetail={alertMsg} />


							<form onSubmit={handleLogin}>
							<h1>Sign in </h1>
								<div className="form-group">
									<InputElement value={username} onChange={(e) => setUsername(e.target.value)} facon={<FontAwesomeIcon icon={faUser} className="user-icon" />} label="Username : " type="text" className="form-control" id="username" />

								</div>
								<div classNameName="form-group">
									<InputElement value={password} onChange={(e) => setPassword(e.target.value)} facon={<FontAwesomeIcon icon={faLock} className="user-password-icon" />} label="Password : " type="password" className="form-control" id="password" />
								</div>
								<br />

								<ButtonElement facon={<FontAwesomeIcon icon={faRightToBracket} className="button-login-icon" />} type="submit" className="btn btn-primary login-btn" label="LOGIN" />

							</form>

						</div>


						<div className="col-md-7 div-right-main  ">
							 
						</div>

					</div>
				</div>
			</div>

		</div>
	)
}
export default Login
