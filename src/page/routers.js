import React from 'react';
import Calculator from '../Components/Calculator/Calculator';
import Resume from '../Components/Resume/Resume';

import {createBrowserRouter,} from "react-router-dom";
import TodoListPage from './TodoListPage/TodoListPage';
import Header from '../Components/Header/Header';



export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
            <Header/>
            <div>Header knbvgvbn,nbvgcfvbn'iuibyvutcgvhbjnlkm;lnjbkhvgcfgvhbkjnlkm;lnjkbhjvghcfvjhbkjnlkmlnjkbhjvghjhbkjnlkjkbhjv</div>
        </>

      ),
    },
    {
      path: "/todo-list",
      element: (
        <>
            <Header/>
            <TodoListPage/>
        </>

      ),
    },
    {
      path: "/calculator",
      element: (
        <>
             <Header/>
            <Calculator/>
        </>

      ),
    },
    {
      path: "/resume",
      element: (
        <>
             <Header/>
            <Resume/>
        </>

      ),
    },
]); 
