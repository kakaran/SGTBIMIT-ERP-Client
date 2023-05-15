import React, { useState } from "react";

function SidebarLinkGroup({ Icon, title, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    if (onClick) {
      onClick();
    }
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      onClick={handleClick}
      onBlur={handleBlur}
      className={`flex md:mr-8  w-full items-center space-x-5 py-3 md:px-2  cursor-pointer transition-all duration-200 group ${
        isActive && "bg-gray-700/80 rounded-lg"
      }`}
      tabIndex="0"
    >
      {Icon && (
        <Icon
          className={`h-7 w-7 text-white group-hover:text-blue-300 ${
            isActive && "text-blue-300"
          }`}
        />
      )}
      <p
        className={`text-[16px] text-white/60 capitalize text-left hidden md:inline-flex whitespace-nowrap lg:text-xl ${
          isActive && " text-white/100 font-semibold"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default SidebarLinkGroup;
