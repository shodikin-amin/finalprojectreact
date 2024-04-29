import React from "react";
import LoginContainer from "../components/molecules/LoginContainer";
import FormLoginFragment from "../fragments/Login";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RegisAccountLayout = () => {
  const [pageTitle, setPageTitle] = useState("Register Account");
  useEffect(() => {
    document.title = pageTitle;
  }, [setPageTitle]);

  return (
    <div className="bg-login-bg bg-cover bg-fixed bg-center bg-no-repeat min-h-screen">
      <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
        <div className="border-2 bg-white shadow-custom rounded-xl sm:mx-auto sm:w-full sm:max-w-sm px-6 py-8">
          <LoginContainer />
          <FormLoginFragment />
          <p className="mt-2 text-center text-sm text-gray-500">
            Sudah Punya Akun?{" "}
            <Link to={"/login"} className="font-semibold text-blue-600 hover:text-md hover:font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisAccountLayout;