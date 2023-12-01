import React from 'react';
import List from "./Components/List/List"
import AddTodo from "./Components/AddTodo/AddTodo"
// import TodoListContainer from "../../containers/TodoListContainer/TodoListContainer"

function TodoListRedux ({ title,desc, setTitle, setDesc, setItem, item, delet, startEditing}) {
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
export default TodoListRedux