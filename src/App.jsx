import React from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

import Calculator from './Components/Calculator/Calculator';


import Resume from './components/Resume/Resume';


function App() {
  console.log('App');

  return (
   <>

      <TodoList/>


      <Calculator/>

      <Resume/>


   </>
  );
}

export default App;
