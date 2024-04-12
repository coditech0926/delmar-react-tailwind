import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

import "./output.css";

const App = () => {
	return (
		<div
			style={{
				backgroundImage: 'url(./assets/image/background.jpg)',
				backgroundSize: 'cover',
				height: '100vh',
				backgroundPosition: 'center',
				fontFamily: "helvetica",
			}}
		>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	)
};

export default App; 
