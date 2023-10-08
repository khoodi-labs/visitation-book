import React from 'react'
import Sidebar from './Sidebar';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes,Outlet  } from 'react-router-dom';
import '../assets/css/Dashboard.css'

//todo: fetch items from the backend service
function Dashboard() {

	return (
		<div>

			<div  >
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