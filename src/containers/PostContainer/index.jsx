import React, { useEffect } from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector} from 'react-redux'
import { addPosts } from '../../store/posts/slice'
import { fetchPosts } from "../../store/posts/actions";
import { getPosts } from "../../store/posts/selectors";

const PostContainer = () => {
    const dispatch = useDispatch()
    const {posts, isLoad, error} = useSelector(getPosts)
  

    const handleAddPost = () => {
        dispatch(addPosts({
            title: 'title',
            body: 'body'
        }))
    }
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <> 
            {isLoad ? <h1>loading</h1> : <Posts error={error} posts={posts} handleAddPost={handleAddPost}/>}
        </>
    )
};

export default PostContainer;