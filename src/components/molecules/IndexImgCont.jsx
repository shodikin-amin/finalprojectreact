import React from "react";

const IndexImgCont = (props) => {
  return (
    <div className="flex flex-col justify-center items-center content-center space-y-2 h-[30rem] w-[20rem] bg-white shadow-xl rounded-md ">
      <img
        src={props.src}
        alt={props.src}
        className="h-[24rem] w-[18rem] object-cover rounded-md"
      />
      <h2 className="p-2 text-center flex font-semibold text-xl">
        {props.title}
      </h2>
    </div>
  );
};

export default IndexImgCont;
