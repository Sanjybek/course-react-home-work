import React from 'react';
import { useCallback, useState } from "react"
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../Store"
import TodoListRedux from '../../Components/TodoListRedux/TodoListRedux'
function TodoListContainer () {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')    
    const [item, setItem] = useState(null) 


    const delet = useCallback((id) => {
      dispatch(deleteTodo(id))
    }, [])
    
   
    const  startEditing = useCallback((arr) => {
      const {title, desc} = arr
      console.log(arr, 'arr');
        setTitle(title);
        setDesc(desc);
        setItem(arr)
      // }
    }, [])
    return <TodoListRedux
            title={title}
            desc={desc}
            setTitle={setTitle}
            setDesc={setDesc}
            setItem={setItem}
            item={item}

            delet={delet}
            startEditing={startEditing}
            />
    
};

export default TodoListContainer;