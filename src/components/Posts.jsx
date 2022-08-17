import Post from "./Post";
const Posts = ({ posts }) => {
	return (
		posts.length > 0 &&
		posts.map((post, index) => <Post key={index} post={post} />)
	);
};
export default Posts;
