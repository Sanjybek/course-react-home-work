import { useCallback, useState } from "react"
import List from "./Components/List/List"
import AddTodo from "./Components/AddTodo/AddTodo"
import { useDispatch } from 'react-redux'
import { deleteTodo } from "../Store"

function TodoList () {
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
    

    return (
        <>
          
          <AddTodo
            title={title}
            desc={desc}
            setTitle={setTitle}
            setDesc={setDesc}
            setItem={setItem}
            item={item}
           
          />
          
          <List
          delet={delet}
          startEditing={startEditing}
        
          />
        </>
       
    )
}
export default TodoList