import React from 'react'
import Sidebar from './Sidebar';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import '../assets/css/Dashboard.css'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
//todo: fetch items from the backend service
function Dashboard() {

	return <div className="Dashboard">
		<Sidebar /> 
		<Main />
	</div>


 

}

export default Dashboard;