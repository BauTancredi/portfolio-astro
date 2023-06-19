import React from "react";

import arrow from "../assets/arrow.svg";

const Arrow = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
      <img alt="arrow" className=" w-24 animate-[pulse_2s_.3s_ease-in-out_infinite]" src={arrow} />
      <img
        alt="arrow"
        className="-my-10 w-24 animate-[pulse_2s_.6s_ease-in-out_infinite]"
        src={arrow}
      />
      <img alt="arrow" className="w-24 animate-[pulse_2s_.9s_ease-in-out_infinite]" src={arrow} />
    </div>
  );
};

export default Arrow;
