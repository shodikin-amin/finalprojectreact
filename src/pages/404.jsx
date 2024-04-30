import React from "react";
import { Button, Result } from "antd";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ErrorPage = () => {
  const [title, setTitle] = useState("Not Found");

  useEffect(() => {
    document.title = title;
  }, [setTitle]);
  const error = useRouteError();
  return (
    <div className="w-full h-full content-center justify-center min-h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary" className="text-md">
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};
export default ErrorPage;
