import React from "react";

function Others() {
  return (
    <div className="w-full gap-4 p-6 h-full border-[] border rounded-lg bg-white">
      <h2> Others </h2>

      <textarea
        className="block my-2 w-full rounded-md bg-[#F9F9FC] border-gray-300 shadow-sm focus:border-primary-400  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
        placeholder="Any note"
        cols="30"
        rows="4"
      ></textarea>
    </div>
  );
}

export default Others;
