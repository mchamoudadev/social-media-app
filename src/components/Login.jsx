import { useState } from "react";
const Login = ({ setUser }) => {
	const [username, setUserName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (username.length < 5) return console.log("please provide a username");
		setUser(username);
	};

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(event) => setUserName(event.target.value)}
					placeholder="enter username"
				/>
				<div>
					<button>Login</button>
				</div>
			</form>
		</>
	);
};

export default Login;
