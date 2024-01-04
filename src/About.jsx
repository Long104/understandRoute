import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

function About() {
	return (
		<div>
			<h1>About page</h1>
			<NavLink to="me">about me </NavLink>
			<p></p>
			<NavLink to="history">my history </NavLink>
			<Routes>
				<Route path="me" element={<h1>my name is long</h1>} />
				<Route path="history" element={<h1>my history is my past</h1>} />
				<Route path="*" element={<Navigate to="me" replace={true} />} />
			</Routes>
		</div>
	);
}

export default About;
