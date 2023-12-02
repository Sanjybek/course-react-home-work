import React from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector} from 'react-redux'
import { addPosts } from '../../store/posts/slice'

const PostContainer = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsReducer.posts)
    const handleAddPost = () => {
        dispatch(addPosts({
            title: 'title',
            body: 'body'
        }))
    }
    return <Posts posts={posts} handleAddPost={handleAddPost}/>
};

export default PostContainer;