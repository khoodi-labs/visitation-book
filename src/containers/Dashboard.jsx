import React from 'react'
import Sidebar from './Sidebar';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes,Outlet  } from 'react-router-dom';

//todo: fetch items from the backend service
function Dashboard() {

	return (
		<div>

			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">

						<div className="row">
							<Sidebar/>
							<Main/>
							 
						</div>
					</div>
				</div>
			</div>



		</div>
	)
}

export default Dashboard;