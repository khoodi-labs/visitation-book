import React from 'react'
import companyLogo from '../assets/images/image1.png';
import '../assets/css/Login.css'
import InputElement from '../components/Common/InputElement';
import ButtonElement from '../components/Common/ButtonElement';
import LoginService from '../services/LoginService';

 function Login() {

    const userLoginService = LoginService();

function handleLogin(e){
    e.preventDefault()
    //handle submission and etc.. 
    alert(userLoginService.validate("see","seee"));
}

    
  return (
    <div className="container-fluid">
	<div className="row">
		<div className="col-md-12 login_container">
			<div className="row">

      <div className="col-md-3 login_form">
               
               
                      
					<form role="form" onSubmit={handleLogin}>
						<div className="form-group">  
                            <InputElement  value="" placeholder="<i class='fa-brands fa-google'></i>"  label = "Username : " type="text" className="form-control" id="username" />
 
						</div>
						<div classNameName="form-group">
							 <InputElement label = "Password : " type="password" className="form-control" id="password" />

						</div>
						 <br/>
					 
                     <ButtonElement  type="submit" className="btn btn-primary login-btn" label ="LOGIN"  />
					 
					</form>
                        <div className="image-logo-box-bottom">
                        <img src={companyLogo} alt="BigCo Inc. logo"/>
                        </div>
				</div>


				<div className="col-md-6">
                    <div className="image-logo-box"> 
                    <img src={companyLogo} alt="BigCo Inc. logo"/>
                    </div>
               

				</div>
			
			</div>
		</div>
	</div>
</div>
  )
}
export default Login
