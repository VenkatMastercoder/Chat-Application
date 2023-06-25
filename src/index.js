import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Chartbar from "./component/Chatbar/Chatbar";
import Sidebar from "./component/Sidebar/Sidebar";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Chartbar />
      </div>
    </>
  );
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
  },
  {
    path: "/india-office",
    element : <Applayout />,
  },
  {
    path: "/poland-office",
    element : <Applayout />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRoute} />
  </React.StrictMode>
);
