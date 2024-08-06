import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import Studio from "./Pages/Studio";
import Datasources from "./Pages/Datasources";
import FlowMachine from "./Pages/FlowMachine";
import MicroFunctions from "./Pages/MicroFunctions";
import Gateway from "./Pages/Gateway";
import FileStorage from "./Pages/FileStorage";
import ApplicationManager from "./Pages/ApplicationManager";
import Monitoring from "./Pages/Monitoring";
import Console from "./Pages/Console";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/studio",
        element: <Studio />,
      },
      {
        path: "/datasources",
        element: <Datasources />,
      },
      {
        path: "/flow-machine",
        element: <FlowMachine />,
      },
      {
        path: "/micro-functions",
        element: <MicroFunctions />,
      },
      {
        path: "/gateway",
        element: <Gateway />,
      },
      {
        path: "/file-storage",
        element: <FileStorage />,
      },
      {
        path: "/application-manager",
        element: <ApplicationManager />,
      },
      {
        path: "/monitoring",
        element: <Monitoring />,
      },
      {
        path: "/console",
        element: <Console />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
