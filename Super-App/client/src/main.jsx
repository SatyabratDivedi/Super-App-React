import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProctactedRoute from './components/ProctactedRoute.jsx'
import Dashboard from './components/Dashboard.jsx'
import UserData from './components/UserData.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <ProctactedRoute Component={Dashboard}/>,
  },
  {
    path: "/user_dashboard",
    element: <ProctactedRoute Component={UserData}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
