import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
	const [posts, setPost] = useState([]);
	async function getPost() {
		const fetcher = await fetch("https://jsonplaceholder.typicode.com/posts");
		const posts = await fetcher.json();
		setPost(posts);
	}
	useEffect(() => {
		getPost();
	}, []);
	const postElement = posts.map((post) => {
		return (
			<div key={post.id}>
				<NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
				<p>{post.body}</p>
			</div>
		);
	});
	return (
		<div>
			<h1>Home page</h1>
			{postElement}
		</div>
	);
}

export default Home;
