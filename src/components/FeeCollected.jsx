import React from "react";
import ProgressBar from "./ProgressBar";

const Data = [
  { id: 1, name: "lorem", info: "0010", img: "/ArrowDownRed.svg" },
  { id: 2, name: "lorem", info: "0010", img: "/ArrowDownRed.svg" },
  { id: 3, name: "lorem", info: "0010", img: "/ArrowDownRed.svg" },
];
function FeeCollected() {
  const progress = 75;
  return (
    <div className="w-[360px] bg-white h-[376px] md:w-full border-[] border-2 p-6 rounded-lg">
      Fee Collected
      <div className="my-10">
        <ProgressBar progress={progress} />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2>55,25,500</h2>
        <p className="py-2 px-3 text-[14px] leading-5   rounded-full bg-[#E7F4EE] capitalize text-[#0D894F] font-semibold  text-center">
          75%
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-[16px]">lorem</h2>
        <div className="flex space-x-2">
          <p>0010</p>
          <img src="/ArrowDownRed.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FeeCollected;
