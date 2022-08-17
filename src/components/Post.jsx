import { useContext } from "react";
import { UserContext, PostContext } from "../App";

const Post = ({ post }) => {
	const { user } = useContext(UserContext);
	const { dispatch } = useContext(PostContext);
	const isCurrentUser = user == post.user;

	const handleDeletePost = () => {
		dispatch({ type: "DELETE_POST", payload: { postId: post.id } });
	};

	return (
		<div>
			<p>{post.title}</p>
			{post.image && (
				<img
					style={{ objectFit: "fill" }}
					height={100}
					width={200}
					src={URL.createObjectURL(post.image)}
					alt=""
				/>
			)}
			<p style={{ color: isCurrentUser && "green" }}>{post.user}</p>
			<button disabled={!isCurrentUser} onClick={handleDeletePost}>
				Delete
			</button>
		</div>
	);
};

export default Post;
