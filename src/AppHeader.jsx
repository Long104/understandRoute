import { NavLink } from "react-router-dom";

function AppHeader() {
	return (
		<div>
			<h1>click</h1>
			<NavLink to="/">Home</NavLink>
			<p></p>
			<NavLink to="/about">About</NavLink>
			<p> </p>
			<NavLink to="/post/">Post</NavLink>
		</div>
	);
}

export default AppHeader;
