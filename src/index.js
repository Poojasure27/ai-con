import React from 'react';
import ReactDOM from 'react-dom';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import Image from "./Image";
import Login from "./Login"
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/image",
    element: <Image />
  },
  {
    path: "/login",
    element: <Login />
  }

]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
