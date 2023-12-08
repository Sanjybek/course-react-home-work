import React, { useEffect } from 'react';
import Albums from '../../Components/Albums/Albums';
import { useDispatch, useSelector } from 'react-redux';
import {getAlbums} from '../../store/Albums/selector'
import { fetchAlbums } from '../../store/Albums/actions';

const AlbumsContainer = () => {
    const dispatch = useDispatch()
    const {isLoad, error, albums} = useSelector(getAlbums)
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch])

    return (
        <>
            {isLoad ? <h1>loading</h1> : <Albums error={error} albums={albums}/>}
        </>
    )
};

export default AlbumsContainer;