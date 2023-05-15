import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

function Header() {
  return (
    <div className="flex shadow-md border  border-black/5 flex-row items-center py-5 px-8 bg-white justify-between">
      {/* left */}
      <div className="flex flex-row space-x-2 items-center">
        <MagnifyingGlassIcon className="h-7 w-7" />
        <input
          placeholder="Search..."
          className=" focus:ring-0 border-transparent text-[18px] w-full  outline-none outline-0   focus:outline-none ml-2 border-none  bg-transparent    "
          type="text"
        />
      </div>

      {/* right */}
      <div>
        <p> Profile</p>
      </div>
    </div>
  );
}

export default Header;
