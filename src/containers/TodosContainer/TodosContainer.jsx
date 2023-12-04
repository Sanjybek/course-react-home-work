import React, { useEffect } from 'react';
import Todos from '../../Components/Todos/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../store/todos/actions';
import { getTodos } from '../../store/todos/selector';

const PhotosContainer = () => {
    const dispatch = useDispatch()
    const {isLoad, error, todos} = useSelector(getTodos)
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <>
            <Todos error={error} todos={todos}/>
        </>
    );
};

export default PhotosContainer;