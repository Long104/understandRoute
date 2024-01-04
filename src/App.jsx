import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AppHeader from "./AppHeader";
import Page404 from "./Page404";
import Post from "./Post";
function App() {
	return (
		<div>
			<AppHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about/*" element={<About />} />
				<Route path="*" element={<Page404 />} />
				<Route path="/post/:postId" element={<Post />} />
			</Routes>
		</div>
	);
}

export default App;
