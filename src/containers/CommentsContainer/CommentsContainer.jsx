import React, { useEffect } from 'react';
import Comments from '../../Components/Comments/Comments'
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/comments/actions';
import { getComments } from '../../store/comments/selector';
import { Spin } from 'antd';
import s from './comment.module.css'
const CommentsContainer = () => {
    const {isLoad, error, comments} = useSelector(getComments)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])
    return (
        <>
                <Spin  tip="Loading" spinning={isLoad}>
                    <Comments comments={comments} error={error} />
                </Spin>
        </>
    );
};

export default CommentsContainer;