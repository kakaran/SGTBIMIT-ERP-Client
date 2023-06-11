import React from "react";
import { useState } from "react";

const options = [
  { id: 1, label: "course", option: "Select a Course" },
  { id: 1, label: "Batch", option: "Select Batch" },
  { id: 1, label: "Semester", option: "Select Semester" },
  { id: 1, label: "Section", option: "Select Section" },
];

function Selection() {
  return (
    <div className="rounded-lg bg-white border border-[] w-full max-h-fit p-6 gap-[14px]">
      Class
      {options.map(({ label, option }) => (
        <div className="flex flex-col my-4">
          <label
            className="text-[15px]  capitalize text-black font-semibold"
            htmlFor=""
          >
            {label}
          </label>
          <select className="bg-gray-100 rounded-lg  border-2 border-[#E0E2E7]">
            <option value={option}>{option}</option>
            <img src="/ArrowDown.svg" alt="" />

            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default Selection;
