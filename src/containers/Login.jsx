import React from 'react'

 function Login() {
  return (
    <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<div className="row">
				<div className="col-md-6">
                    Left Side 
				</div>
				<div className="col-md-4">
                    <h1> LOGIN FORM </h1>
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
						 
					 
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
export default Login
