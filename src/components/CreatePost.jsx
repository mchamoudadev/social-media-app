import { useState, useRef, useContext } from "react";
import { PostContext } from "../App";
const CreatePost = ({ user }) => {
	const { dispatch } = useContext(PostContext);

	// object distructing
	// let student = {
	// 	name: "hamuuda",
	// 	class_: "CA151",
	// 	address: "123 Main St",
	// };

	// const { name, class_, address } = student;

	// const player = {
	// 	playerName: "messi",
	// 	club: "PSG",
	// 	age: "35",
	// };

	// const students = ["yoooo", "haji"];

	// const [s1, s2] = students;
	// console.log(s1);
	// console.log(s2);
	// const { playerName, club, age } = player;

	// console.log(name);
	// console.log(class_);
	// console.log(address);

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");

	const imageRef = useRef();
	const titleRef = useRef();

	const handlePostSubmit = (event) => {
		event.preventDefault();
		const newPost = { title, image, user, id: new Date().getTime() };
		dispatch({ type: "ADD_NEW_POST", payload: { posts: newPost } });
		// setPosts((prev) => [newPost, ...prev]);
		setTitle("");
		setImage("");
		imageRef.current.value = "";
		titleRef.current.focus();
	};
	return (
		<form onSubmit={handlePostSubmit}>
			<div>
				<input
					type="text"
					placeholder="post title"
					onChange={(event) => setTitle(event.target.value)}
					value={title}
					ref={titleRef}
				/>
			</div>
			<div>
				<input
					type="file"
					onChange={(event) => setImage(event.target.files[0])}
					ref={imageRef}
				/>
			</div>
			<button type="submit">save Posts</button>
		</form>
	);
};
export default CreatePost;
