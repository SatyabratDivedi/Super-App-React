import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProctactedRoute from "./components/ProctactedRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";
import UserData from "./components/UserData.jsx";
import Page404 from "./components/Page404.jsx";
import NewsPage from "./components/NewsPage.jsx";
import NewsComponent from "./components/NewsComponent.jsx";
import MainNewsComp from "./components/MainNewsComp.jsx";
import NewsDetails from "./components/NewsDetails.jsx";
import UserDetails from "./components/UserDetails.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <ProctactedRoute Component={Dashboard} />,
  },
  {
    path: "/user_dashboard",
    element: <ProctactedRoute Component={UserData} />,
  },
  {
    path: "/user_dashboard/user",
    element: <ProctactedRoute Component={UserDetails} />,
  },
  {
    path: "/:error",
    element: <Page404 />,
  },
  {
    path: "/news",
    element: <ProctactedRoute Component={NewsPage} />,
    children: [
      {
        path: "allNews",
        element: <ProctactedRoute Component={MainNewsComp} />,
      },
      {
        path: ":category",
        element: <ProctactedRoute Component={NewsComponent} />,
        children: [
          {
            path: ":title",
            element: <ProctactedRoute Component={NewsDetails} />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
