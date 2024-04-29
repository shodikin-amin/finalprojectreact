import React from "react";
import FormResetPassword from "../fragments/ResetPassword";
import AuthLayout from "../layout/AuthLayout";

const ResetPasswordPage = () => {
  return (
    <AuthLayout title="Reset Password" type="reset-password">
      <FormResetPassword />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
