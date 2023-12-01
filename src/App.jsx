import React from 'react';
import './App.css';


import {RouterProvider} from "react-router-dom";
import { router } from './Components/page/routers';





function App() {
  return <RouterProvider router={router} />

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
