import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/404.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterLayout from "./layout/RegisterLayout.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";
import HomepageLayout from "./layout/HomepageLayout.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import BurgerMenu from "./pages/BurgerMenu.jsx";
import RegisterAccountPage from "./pages/RegisterAccount.jsx";
import ResetPasswordPage from "./pages/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pendaftaran",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterAccountPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/menu",
    element: <BurgerMenu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

);
