import React from 'react';

const Todos = ({error, todos,}) => {
    if(error) return <h1>{error}</h1>
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li>
                            <h1>{todo.title}</h1>
                            
                        </li>
                    )

                })}
            </ul>

            
        </>
    );
};

export default Todos;