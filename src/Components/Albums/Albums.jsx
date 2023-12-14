import React from 'react';

const Albums = ({error ,albums}) => {
    if(error) return <h1>{error}</h1>
    return (
        <>
            <ul>
                {albums.map((album) => {
                   return (
                        <li>
                            <h1>{album.title}</h1>
                        </li>
                   )
                })}
            </ul>

            
        </>
    );
};

export default Albums;