import Calculator from '../Components/Calculator/Calculator'
import { createBrowserRouter } from "react-router-dom";
import TodoList from '../Components/TodoList/TodoList';
import Header from '../Components/Header/Header';
import Resume from '../Components/Resume/Resume'
import TodoListPage from './TodoListPage/TodoListPage';
const router = createBrowserRouter([
    {
      path: '/',
      element:(
        <>
            <Header/>
            <div>dfvdgbf</div>
        </>
      )
    },
    {
        path: '/todo-list',
        element: (
          <>
            <Header/>
            <TodoListPage/>
          </>
        ),
    }, 
    {
        path: '/calculator',
        element: (
          <>
            <Header/>
            <Calculator/>
          </>
        ),
    },   
    {
        path: '/resume',
        element: (
          <>
            <Header/>
            <Resume/>
          </>
        ),
    },  
]);

export {router}  