import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// views
import Landing from './views/Landing';
import Login from "./views/Login";
import Signup from './views/Signup';
import Main from './views/Main';
import Room from './views/Room';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/signup",
    element: <Signup />
  },

  {
    path: "/main",
    element: <Main />,
  },

  {
    path: "/room/:id",
    element: <Room />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);