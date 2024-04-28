import React from "react";

const Input = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      required
      className=" w-full outline-0 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-hijau1 sm:text-sm sm:leading-6"
    />
  );
};

export default Input;
