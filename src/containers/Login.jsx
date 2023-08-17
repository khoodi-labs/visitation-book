import React from 'react'
import companyLogo from '../assets/images/image1.png';
import '../assets/css/Login.css'
import InputElement from '../components/Common/InputElement';
import ButtonElement from '../components/Common/ButtonElement';

 function Login() {
  return (
    <div className="container-fluid">
	<div className="row">
		<div className="col-md-12 login_container">
			<div className="row">
				<div className="col-md-6">
                    <div className="image-logo-box">
                    <img src={companyLogo} alt="BigCo Inc. logo"/>
                    </div>
               

				</div>
				<div className="col-md-4 login_form">
                <div className="image-logo-box-top">
                    <img src={companyLogo} alt="BigCo Inc. logo"/>
                    </div>
               
                    <h1 className='login-header-text'> LOGIN FORM </h1>
					<form role="form">
						<div className="form-group">  
                            <InputElement label = "Username : " type="text" className="form-control" id="username" />
 
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
			</div>
		</div>
	</div>
</div>
  )
}
export default Login
