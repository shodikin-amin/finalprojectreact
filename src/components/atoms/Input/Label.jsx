import React, { Children } from "react";

const Label = (props) => {
  return (
    <label htmlFor={props.name} className="block my-2 md:text-sm font-medium text-gray-900 text-lg">
      {props.children}
    </label>
  );
};

export default Label;
