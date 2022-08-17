import { createContext, useContext, useState, useReducer } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import postReducer from "./postReducer";
// create context
export const UserContext = createContext();
export const PostContext = createContext({ posts: [] });
// useContext

// provider
// consumer

const App = () => {
	const [user, setUser] = useState("McDev");
	// const [posts, setPosts] = useState([]);

	// context using
	const initialPostState = useContext(PostContext);

	// useReducer
	const [state, dispatch] = useReducer(postReducer, initialPostState);

	if (!user) return <Login setUser={setUser} />;
	/*
	Header
	CreatatePost
	postList
	Footer
	*/
	const userInfo = {
		user,
		setUser,
	};

	console.log("curenet", new Date().getTime());

	return (
		<UserContext.Provider value={userInfo}>
			<PostContext.Provider value={{ state, dispatch }}>
				<div className="app">
					<Header setUser={setUser} />
					<CreatePost user={user} />
					<Posts posts={state.posts} />
				</div>
			</PostContext.Provider>
		</UserContext.Provider>
	);
};

export default App;
