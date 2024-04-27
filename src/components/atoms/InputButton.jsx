import React from "react";

const InputButton = (props) => {
  return (
    <button className="flex w-full max-w-36 justify-center rounded-xl bg-hijau1 px-3 py-1.5 text-l font-semibold text-white hover:bg-hijauMd  hover:text-hijau1 active:bg-hijau1 active:text-white focus:outline-none focus:ring focus:ring-hijauMd">
      {props.name}
    </button>
  );
};

export default InputButton;
