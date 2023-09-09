import React,{useState} from 'react'
import companyLogo from '../assets/images/image1.png';
import '../assets/css/Login.css'
import InputElement from '../components/Common/InputElement';
import ButtonElement from '../components/Common/ButtonElement';
import AuthService from '../services/AuthService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faRightToBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired search icon

import footer_image from '../assets/images/footer.jpg';
import AlertElement from '../components/Common/AlertElement';


 
function Login() {

	const auth = AuthService();

	function handleLogin(e) {
		e.preventDefault()
		//handle submission and etc.. 
	//	const isAuthenticated = auth.validate(	)
		alert(auth.validate("see", "seee"));
	}


	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12 login_container">
					<div className="row">

						<div className="col-md-3 login_form">

							<div>  <FontAwesomeIcon icon={faCircleUser} className="login-user-icon" /> </div>

							<AlertElement cssClass="alert alert-warning alert-dismissable" msgtype="Warning!" msgDetail="invalid credentials" />


							<form onSubmit={handleLogin}>
								<div className="form-group">
									<InputElement facon={<FontAwesomeIcon icon={faUser} className="user-icon" />} value="" label="Username : " type="text" className="form-control" id="username" />

								</div>
								<div classNameName="form-group">
									<InputElement facon={<FontAwesomeIcon icon={faLock} className="user-password-icon" />} label="Password : " type="password" className="form-control" id="password" />

								</div>
								<br />

								<ButtonElement facon={<FontAwesomeIcon icon={faRightToBracket} className="button-login-icon" />} type="submit" className="btn btn-primary login-btn" label="LOGIN" />

							</form>

						</div>


						<div className="col-md-8 div-right-main">
							<div className="image-logo-box">

							</div>


						</div>

					</div>
				</div>
			</div>

		</div>
	)
}
export default Login
