import React from 'react';
import { Alert} from 'antd';

function Comments ({error, comments})  {
    if(error) return <h1>{error}</h1>
    return (
        <>
            <ul>
                {comments.map((comment) => {
                    return (
                        <li>
                            <h1>{comment.name}</h1>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </li>
                    )
                })}
            </ul>    
            
        </>
    );
};

export default Comments;