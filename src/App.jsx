import React from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

import Calculator from './Components/Calculator/Calculator';


import Resume from './Components/Resume/Resume';
import TodoListRedux from './Components/TodoListRedux/TodoList'
function App() {

  return (
   <>
      <TodoListRedux/>
      {/* <TodoList/>
      <Calculator/> */}
      {/* <Resume/> */}
     
   </>
  );
}

export default App;
