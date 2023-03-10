import React, { children } from 'react'
import Single from "./Pages/single/Single"
import Home from "./Pages/home/Home"
import Write from "./Pages/write/Write"
import Settings from "./Pages/settings/Settings"
import Login from "./Pages/login/Login"
import Register from "./Pages/register/Register"
import Topbar from "./components/topbar/TopBar"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,   
} from "react-router-dom";


const Layout = () => {
  return (
    <div className="app">
      <Topbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/settings",
        element: <Settings/>
      },
      {
        path: "/write",
        element: <Write/>
      },
      {
        path: "/post/:postId",
        element: <Single/>
      },
    ]
  },
]);
function App() {

  return (
    <div>
    <RouterProvider router={router} />
    </div>

  );
}

export default App;
