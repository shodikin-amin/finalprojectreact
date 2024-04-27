import React from "react";

const InputForm = (props) => {
  return (
    <>
      <div className="flex-row text-center md:text-left md:flex md:justify-between">
        <label className="text-l font-semibold">{props.name}</label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="flex mx-auto md:mx-0 w-full min-w-80 max-w-96 text-left justify-center rounded-xl h-9 block bomt-1 block w-full px-3 py-2 bg-white border border-hijau1 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-hijauMd focus:ring-1 focus:ring-hijauMd"
        ></input>
      </div>
    </>
  );
};

export default InputForm;
