import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProctactedRoute from './components/ProctactedRoute.jsx'
import Dashboard from './components/Dashboard.jsx'
import UserData from './components/UserData.jsx';
import Page404 from './components/Page404.jsx'
import NewsPage from './components/NewsPage.jsx';
import NewsComponent, { allNewsDataLoader } from './components/NewsComponent.jsx';
import MainNewsComp, { mainNewsLoader } from './components/MainNewsComp.jsx';
import NewsDetails, { newsDetailsLoader } from './components/NewsDetails.jsx';
import UserDetails from './components/UserDetails.jsx';

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
  {
    path: "/user_dashboard/user",
    element: <ProctactedRoute Component={UserDetails}/>,
  },
  {
    path: "/:error",
    element: <Page404/>,
  },
  {
    path: "/news",
    element: <ProctactedRoute Component={NewsPage}/>,
    children:[
      {
        path: "allNews",
        element: <ProctactedRoute Component={MainNewsComp}/>,
        loader: mainNewsLoader,
      },
      {
        path: ":category",
        element: <ProctactedRoute Component={NewsComponent}/>,
        loader:allNewsDataLoader,
        children:[
          {
            path: ":title",
            element: <ProctactedRoute Component={NewsDetails}/>,
            loader: newsDetailsLoader,
          },
        
        ]
      },
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
