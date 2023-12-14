import { createBrowserRouter } from "react-router-dom";
import PostsPage from "./PostPage/PostPage";
import Header from "../Components/Header/Header";
import CommentsPage from './CommentsPage/CommentsPage'
import AlbumsPage from "./AlbumsPage/AlbumsPage";
import TodosPage from './TodosPage/TodosPage'
const router = createBrowserRouter([
    {
      path: '/',
      element: (
          <>
              <Header/>
              <div>Header</div>
          </>
      )
    },
    {
      path: '/posts',
      element: (
          <>
              <Header/>
              <PostsPage/>
          </>
      )
    },
    {
      path: '/comments',
      element: (
          <>
              <Header/>
              <CommentsPage/>
          </>
      )
    },
    {
        path: '/albums',
        element: (
            <>
                <Header/>
                <AlbumsPage/>
            </>
        )
    },
    {
        path: '/photos',
        element: (
            <>
                <Header/>
                <TodosPage/>
            </>
        )
    }
]);

export {router}  