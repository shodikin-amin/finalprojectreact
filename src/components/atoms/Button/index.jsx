import React from "react";

const IndexButton = (props) => {
  return (
    <button type={props.type} className="flex w-full justify-center rounded-md bg-hijau1 px-3 py-1.5 text-l font-semibold text-white hover:bg-hijauMd hover:text-hijau1 active:bg-hijau1 active:text-white focus:outline-none focus:ring focus:ring-hijauMd">
      {props.name}
    </button>
  );
};

export default IndexButton;
