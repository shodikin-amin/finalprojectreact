import React, { Children } from "react";

const Label = (props) => {
  return (
    <label htmlFor={props.name} className="block mt-4 text-sm font-medium text-gray-900 text-lg">
      {props.children}
    </label>
  );
};

export default Label;
