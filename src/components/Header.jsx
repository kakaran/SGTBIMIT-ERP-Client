import React from "react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Header(prope) {
  return (
    <div className="flex shadow-md border h-16  border-black/5 flex-row  py-4 px-6 bg-white justify-between">
      {/* left */}
      <div className="flex flex-row space-x-2 items-center">
        <Bars3Icon className="h-6 cursor-pointer text-[#667085] w-6" />
      </div>

      {/* right */}
      <div className="flex cursor-pointer items-center flex-row space-x-8">
        <CalendarIcon className="h-6 w-6  text-[#667085]" />
        <MagnifyingGlassIcon className="h-6 w-6 text-[#667085]" />
        <BellIcon className="h-6 w-6 text-[#667085]" />
        <EnvelopeIcon className="h-6 w-6 text-[#667085]" />
        {/* <hr className="h-2 text-gray-500" /> */}
        <div className="flex flex-row items-center space-x-3">
          {prope._id ?
            <img
              className="object-cover rounded-full h-10 w-10"
              src={`http://localhost:5000/api/Student/Student_Image/${prope?._id}`}
              alt=""
            /> : ""}

          <div className="flex-col cursor-pointer flex text-sm ">
            <span className=" font-semibold text-[15px] capitalize">
              {prope?.Name}
            </span>
            <span className="text-[13px] font-medium text-[#667085] mt-[1px]">
              {prope?.Course}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
