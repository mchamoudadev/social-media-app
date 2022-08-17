const postReducer = (state, action) => {

    const { type, payload } = action;
    switch (type) {
        //
        case "ADD_NEW_POST":
            const newPost = payload.posts;
            return { ...state, posts: [newPost, ...state.posts] };
        case "DELETE_POST":
            const remainingPosts = state.posts.filter(post => post.id != payload.postId);
            return { ...state, posts: remainingPosts };
        default:
            return state;
    }

};

export default postReducer;