import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
	const [post, setPost] = useState({});
	const [comments, setComment] = useState([]);
	const { postId } = useParams();
	async function fetchPost(postId) {
		const respone = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
		const JSON = await respone.json();
		setPost(JSON);
		console.log(JSON);
	}
	async function fetchComment(postId) {
		const respone = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
		);
		const commentRessult = await respone.json();
		setComment(commentRessult);
	}

	useEffect(() => {
		fetchPost(postId);
		fetchComment(postId);
	}, [postId]);

	const commentElement = comments.map((comment) => {
		return (
			<div key={comment.id} className="">
				<h2>{comment.email}</h2>
				<h4>{comment.body}</h4>
			</div>
		);
	});

	return (
		<div>
			<h1>post page</h1>
			<h1>{post.title}</h1>
			<h2>{post.body}</h2>
			<div className="">{comments.length} is all the comment</div>
			{commentElement}
		</div>
	);
}

export default Post;
