import React from "react";

function SidebarLinkGroup({ Icon, title, onClick, isActive }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex md:mx-auto  rounded-xl  w-full items-center space-x-3 py-2 md:px-3  cursor-pointer transition-all duration-200 group ${
        isActive && "bg-[#5C59E8] text-white rounded-xl"
      }`}
    >
      {Icon && (
        <Icon
          className={`h-6 w-6 text-[#667085]  ${isActive && "text-[#fff]"}`}
        />
      )}
      <p
        className={`text-[16px] font-semibold text-[#667085] capitalize text-left hidden md:inline-flex whitespace-nowrap lg:text-[14px] ${
          isActive && " text-[#fff]  font-semibold"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default SidebarLinkGroup;
