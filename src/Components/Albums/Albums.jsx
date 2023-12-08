import { Card } from 'antd';
import React from 'react';
import s from './Albums.module.css'
const Albums = ({error ,albums}) => {
    if(error) return <h1>{error}</h1>
    return (
        <>
            <ul className={s.flex}>
                {albums.map((album) => {
                   return (
                        <Card className={s.card} >
                            <li className={s.li}>
                                <h1>{album.title}</h1>
                            </li>
                        </Card>
                   )
                })}
            </ul>

            
        </>
    );
};

export default Albums;