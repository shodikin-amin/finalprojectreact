import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterLayout from "./layout/RegisterLayout.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";
import HomepageLayout from "./layout/HomepageLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterLayout />,
  },
  {
    path: "/login",
    element: <LoginLayout />,
  },
  {
    path: "/home",
    element: <HomepageLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
