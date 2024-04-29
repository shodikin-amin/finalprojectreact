import React from "react";
import RegisterAccoutFragment from "../fragments/RegisterAccount";
import AuthLayout from "../layout/AuthLayout";

const RegisterAccountPage = () => {
  return (
    <AuthLayout title="Daftar Akun" type="register">
      <RegisterAccoutFragment />
    </AuthLayout>
  );
};
export default RegisterAccountPage;
