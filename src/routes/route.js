import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Video from "../pages/Video/Video";
// import Videos from "../pages/Videos/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      // { path: "/videos", element: <Videos /> },
      {
        path: "/video/:id",
        element: <Video />,
      },
    ],
  },
]);

export default router;
