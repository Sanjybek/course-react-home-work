import { createBrowserRouter } from "react-router-dom";
import PostsPage from "./PostsPage";
const router = createBrowserRouter([
    {
      path: '/',
      element: <PostsPage/>
    }
]);

export {router}  