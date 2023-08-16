import React from 'react'
import companyLogo from '../assets/images/image1.png';
import '../assets/css/Login.css'

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
							 
							<label for="exampleInputEmail1">
								Username : 
							</label>
							<input type="text" className="form-control" id="exampleInputEmail1" />
						</div>
						<div classNameName="form-group">
							 
							<label for="exampleInputPassword1">
								Password : 
							</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
						</div>
						 <br/>
					 
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
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
