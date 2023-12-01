import Calculator from '../Components/Calculator/Calculator'
import { createBrowserRouter } from "react-router-dom";
import TodoList from '../Components/TodoList/TodoList';
import Header from '../Components/Header/Header';
import Resume from '../Components/Resume/Resume'
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
            <TodoList/>
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