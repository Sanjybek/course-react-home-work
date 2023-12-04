import React, { useEffect } from 'react';
import Comments from '../../Components/Comments/Comments'
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/comments/actions';
import { getComments } from '../../store/comments/selector';
const CommentsContainer = () => {
    const {isLoad, error, comments} = useSelector(getComments)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])
    return (
        <>
            {isLoad ? <h1>loading</h1> : <Comments comments={comments} error={error} />}
        </>
    );
};

export default CommentsContainer;