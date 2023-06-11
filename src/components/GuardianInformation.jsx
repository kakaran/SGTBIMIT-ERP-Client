import React from "react";

const Inputs = [
  { id: 1, label: "Father's Name / Guardian Name", type: "text" },
  { id: 2, label: "Mother's Name", type: "text" },
  { id: 3, label: "lorem ipsum", type: "Number" },
  { id: 4, label: "any", type: "text" },
];
export default function GuardianInformation() {
  return (
    <div className="w-[840px] p-4 md:w-full h-full bg-white rounded-lg  border-2 border-[]">
      <h2>Parents/Guardian's Information</h2>
      <div className="grid grid-cols-2 my-4 gap-4 ">
        {Inputs.map(({ id, type, label }) => (
          <div key={id} className="w-full  ">
            <div>
              <label
                for="example1"
                className="mb-1 capitalize block text-[15px] font-semibold text-black"
              >
                {label}
              </label>
              <input
                type={type}
                className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder={label}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <label className="mb-1 capitalize block text-[15px] font-semibold text-black">
          Lorem Ipsum
        </label>
        <textarea
          className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Enter Lorem ipsum..."
          cols="30"
          rows="6"
        ></textarea>
      </div>
    </div>
  );
}
