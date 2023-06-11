import React from "react";

function FeeStatus2() {
  return (
    <div className="w-full bg-white h-[164px] p-6 rounded-lg border-2 border-[]">
      <div className="flex justify-between">
        <h2 className="">Fee </h2>

        <p className="py-2 px-3 text-[15px] leading-5   rounded-full text-[#0D894F] bg-[#E7F4EE] capitalize font-semibold  text-center">
          Paid
        </p>
      </div>

      <div className="flex flex-col my-2">
        <label
          className="text-[15px]  capitalize text-black font-semibold"
          htmlFor=""
        >
          Fee
        </label>
        <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]">
          <option value="">Select</option>
          <img src="/ArrowDown.svg" alt="" />

          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>
    </div>
  );
}

export default FeeStatus2;
