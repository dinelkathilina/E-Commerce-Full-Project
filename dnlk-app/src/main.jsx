import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from './Components/RootLayout.jsx';
import { Email_login } from './Components/Email_login.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import { Password_login } from './Components/Password_login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
        element: <Email_login />,
      },
      {
        path:'/password',
        element:<Password_login />,
      },
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
