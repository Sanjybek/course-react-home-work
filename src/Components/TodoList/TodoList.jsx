import { useCallback, useState } from "react"
import List from "./Components/List/List"
import AddTodo from "./Components/AddTodo/AddTodo"

function TodoList () {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')    
    const [arr, setArr] = useState([])
    const [item, setItem] = useState(null) 
    console.log('TodoList');


    const delet = useCallback((id) => {
      setArr((prevArr) => prevArr.filter((i) => i.id !== id));
    }, [])
    
    // const delet = (id) => {
    //     setArr((prevArr) => prevArr.filter((i) => i.id !== id));
    // } 
    const  startEditing = useCallback((id) => {
      setItem(id);
      const itemToEdit = arr.find((i) => i.id === id);
      if (itemToEdit) {
        setTitle(itemToEdit.title);
        setDesc(itemToEdit.desc);
      }
    }, [arr])
    

    return (
        <>
          
          <AddTodo
            title={title}
            desc={desc}
            setTitle={setTitle}
            setDesc={setDesc}
            setItem={setItem}
            item={item}
            arr={arr}
            setArr={setArr}
          />
          
          <List
          delet={delet}
          startEditing={startEditing}
          arr={arr}

          />
        </>
       
    )
}
export default TodoList