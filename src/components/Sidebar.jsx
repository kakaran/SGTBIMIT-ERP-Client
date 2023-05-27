import React, { useState } from "react";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { RxDashboard } from "react-icons/rx";
import { FiHeadphones } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import {
  AcademicCapIcon,
  SquaresPlusIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { MdOutlineLibraryBooks } from "react-icons/md";

function Sidebar() {
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [activeSubLink, setActiveSubLink] = useState("");

  const handleLinkClick = (linkTitle) => {
    setActiveLink(linkTitle);
    setActiveSubLink("");
  };

  const handleSubLinkClick = (subLinkTitle) => {
    setActiveSubLink(subLinkTitle);
  };

  const handleSubjectsClick = () => {
    setIsSubjectsOpen(!isSubjectsOpen);
    setActiveSubLink("");
  };

  return (
    <div className="flex flex-col bg-white w-16  md:w-64 p-4">
      {/* Sidebar header */}
      <div className="flex space-x-2 ml-1 mx-auto flex-row items-center justify-center">
        <img className="h-10 w-10 " src="/collegelogo.png" alt="" />
        <a
          href="#"
          className="text-2xl font-extrabold hidden md:inline  text-red-500"
        >
          SGTBIMIT<span className="text-black">ERP</span>
        </a>
      </div>

      {/* Links */}
      <div className="mt-8 space-y-1 flex flex-col">
        <SidebarLinkGroup
          Icon={RxDashboard}
          title="Dashboard"
          onClick={() => handleLinkClick("Dashboard")}
          isActive={activeLink === "Dashboard"}
        />
        <div className="">
          <SidebarLinkGroup
            Icon={MdOutlineLibraryBooks}
            title="Subjects"
            onClick={handleSubjectsClick}
            isActive={activeLink === "Subjects"}
          />
          {isSubjectsOpen && (
            <div className="  ">
              <SidebarLinkGroup
                Icon={AcademicCapIcon}
                title="Assignments"
                onClick={() => handleSubLinkClick("Assignments", "Subjects")}
                isActive={activeSubLink === "Assignments"}
              />
              <SidebarLinkGroup
                Icon={SquaresPlusIcon}
                title="Notes"
                onClick={() => handleSubLinkClick("Notes", "Subjects")}
                isActive={activeSubLink === "Notes"}
              />
            </div>
          )}
        </div>
        <SidebarLinkGroup
          Icon={RiBarChartHorizontalFill}
          title="Results"
          onClick={() => handleLinkClick("Results")}
          isActive={activeLink === "Results"}
        />

        <SidebarLinkGroup
          Icon={AcademicCapIcon}
          title="Attendence"
          onClick={() => handleLinkClick("Attendence")}
          isActive={activeLink === "Attendence"}
        />

        <SidebarLinkGroup
          Icon={CalendarIcon}
          title="Schedule"
          onClick={() => handleLinkClick("Schedule")}
          isActive={activeLink === "Schedule"}
        />

        <SidebarLinkGroup
          Icon={BsGraphUp}
          title="Performance"
          onClick={() => handleLinkClick("Performance")}
          isActive={activeLink === "Performance"}
        />
      </div>
      <div className="flex-grow" />

      <SidebarLinkGroup
        Icon={FiHeadphones}
        title="Support"
        onClick={() => handleLinkClick("Support")}
        isActive={activeLink === "Support"}
      />

      <SidebarLinkGroup
        Icon={Cog6ToothIcon}
        title="Settings"
        onClick={() => handleLinkClick("Settings")}
        isActive={activeLink === "Settings"}
      />
    </div>
  );
}

export default Sidebar;
