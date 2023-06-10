import React from "react";

const Inputs = [
  { id: 1, label: "First Name", type: "text" },
  { id: 2, label: "Last Name", type: "text" },
  { id: 3, label: "Student ID", type: "Number" },
  { id: 4, label: "Email ID", type: "text" },
];
function GeneralInformation() {
  return (
    <div className="w-[840px] p-4 md:w-full h-full bg-white rounded-lg  border-2 border-[]">
      <h2>General Information</h2>

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
          Address
        </label>
        <textarea
          className="block w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Enter Student Address Here..."
          cols="30"
          rows="6"
        ></textarea>
      </div>
    </div>
  );
}

export default GeneralInformation;
