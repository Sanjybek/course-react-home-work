import React from 'react';
import {Button , Alert} from 'antd'
const Posts = ({error, posts, handleAddPost}) => {
    // if(error) return <h1>{error}</h1>
    return (
        <>  <Button type='primary' onClick={handleAddPost} >Add</Button>
            {/* <button onClick={handleAddPost}> add</button> */}
            <ul>
                {posts.map((post) => {
                    return (
                        <li>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>

                        </li>
                    )
                })}
            </ul>
            {error && <Alert message="Error"description="This is an error message about copywriting." type="error" showIcon />}
            
        </>
    );
};

export default Posts;