import React from "react";
import RegisterContainer from "../components/molecules/RegisterContainer";
import RegisterFragments from "../fragments/RegisterFragments";

const RegisterLayout = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center h-screen">
      {/* <div>
        <RegisterContainer />
      </div> */}
      <div className="flex-row space-y-8">
        <div className="space-y-6 px-4 md:px-0">
          <RegisterFragments />
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
