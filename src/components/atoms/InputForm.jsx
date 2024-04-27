import React from "react";

const InputForm = (props) => {
  return (
    <>
      <label>{props.name}</label>
      <input type={props.type}></input>
    </>
  );
};

export default InputForm;
